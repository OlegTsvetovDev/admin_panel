import React from "react";
import { ResponsiveChoropleth } from "@nivo/geo";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { geoFeatures } from "../data/mockGeoFeatures";
import { mockGeographyData } from "../data/mockData";

const GeographyChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const gray = colors.gray[100];
  const primary = colors.primary[500];
  // https://nivo.rocks/guides/theming/ -> theme object
  const customTheme = {
    axis: {
      domain: {
        line: {
          stroke: gray,
        },
      },
      legend: {
        text: {
          fill: gray,
        },
      },
      ticks: {
        line: {
          stroke: gray,
          strokeWidth: 1,
        },
        text: {
          fill: gray,
        },
      },
    },
    legends: {
      text: {
        fill: gray,
      },
    },
    tooltip: {
      container: {
        color: primary,
      },
    },
  };

  return (
    <ResponsiveChoropleth
      data={mockGeographyData}
      theme={customTheme}
      features={geoFeatures.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      domain={[0, 1000000]}
      unknownColor={gray}
      label="properties.name"
      valueFormat=".2s"
      projectionScale={isDashboard ? 40 : 215}
      projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      borderWidth={1.5}
      borderColor={gray}
      legends={
        isDashboard
          ? undefined
          : [
              {
                anchor: "bottom-left",
                direction: "column",
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemTextColor: gray,
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#000000",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
      }
    />
  );
};

export default GeographyChart;

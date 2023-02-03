import { Box, useTheme, Button } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { tokens } from "../../theme";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard!" />
      </Box>

      <Box>
        <Button
          sx={{
            backgroundColor: `${colors.greenAccent[700]}`,
            color: `${colors.gray[100]}`,
            fonSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        >
          <DownloadOutlinedIcon
            sx={{
              mr: "10px",
            }}
          />
          Download Reports
        </Button>
      </Box>
    </Box>
  );
};

export default Dashboard;

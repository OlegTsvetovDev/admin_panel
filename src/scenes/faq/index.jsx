import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px" display="flex" flexDirection="column" gap="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt vel
          tenetur esse veritatis pariatur eius dolores nemo officia nesciunt
          atque!
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An important question 2
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis et
          non enim! Amet illo rem animi et iure hic pariatur necessitatibus!
          Obcaecati fugit commodi dignissimos excepturi! Eaque velit tenetur
          exercitationem deleniti consequuntur delectus omnis tempora eligendi
          earum magnam? Veniam ducimus maiores soluta doloremque voluptas
          perspiciatis iure quod quia quam! Ducimus nesciunt vero impedit
          repellat, maxime nihil esse labore asperiores dolores! Autem dolores
          in fuga ratione facilis inventore iusto, voluptate quasi enim veniam
          expedita architecto quos consectetur neque pariatur similique incidunt
          ex rerum. Voluptates, pariatur temporibus expedita laborum facilis
          corrupti, nobis architecto similique libero, iure laboriosam nemo
          voluptas suscipit vero quam?
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An important question 3
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima,
          eaque ea error cupiditate nemo, delectus quos dolore molestiae sed
          tempora sequi ducimus assumenda optio quibusdam natus. Excepturi
          necessitatibus sapiente perferendis vero, doloribus repellendus,
          similique eius, nobis exercitationem eum alias dolor quos enim
          nesciunt! Error possimus, repudiandae numquam ex unde totam deserunt
          nesciunt minima, alias necessitatibus pariatur quis in sequi
          distinctio voluptates sit iste. Ducimus, quod eius a ea atque, dolorum
          sit voluptatem molestiae consequuntur enim dolor? Aspernatur odio
          nostrum incidunt asperiores, rem veritatis praesentium dolores modi
          excepturi tenetur necessitatibus similique cumque. Dolorum quod fugit
          sed ducimus amet dolor assumenda eius repudiandae vitae harum
          consequatur, deleniti odio sint vel delectus sapiente blanditiis
          aspernatur error doloremque in cupiditate. Tenetur, architecto?
          Aliquam explicabo dolorem voluptates, veritatis qui rerum est, cumque
          quo quis placeat temporibus inventore aspernatur repellat omnis totam
          distinctio maiores illo optio consequuntur quod consectetur cum. Animi
          excepturi libero deserunt commodi eveniet delectus beatae hic numquam,
          repellendus a temporibus sapiente exercitationem non natus voluptas?
          Quod neque alias quasi dolorem eum, delectus modi! Temporibus minus
          animi accusamus! Tempora repellat ea dolor sed saepe veritatis quos
          animi dolores totam doloremque ullam perferendis ex deleniti, magni
          consectetur natus vitae! Exercitationem quam enim quae vitae id.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An important question 4
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt vel
          tenetur esse veritatis pariatur eius dolores nemo officia nesciunt
          atque!
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An important question 5
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt vel
          tenetur esse veritatis pariatur eius dolores nemo officia nesciunt
          atque!
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An important question 6
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt vel
          tenetur esse veritatis pariatur eius dolores nemo officia nesciunt
          atque!
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;

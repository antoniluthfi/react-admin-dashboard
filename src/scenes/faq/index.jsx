import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../components/header";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="FAQ" subtitle="Frequently Asked Questions" />
      </Box>

      <Box>
        {[1, 2, 3, 4, 5].map((_, i) => (
          <Accordion key={i}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="h5" color={colors.greenAccent[500]}>
                An Important Question
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default FAQ;

import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import GeographyChart from "../../components/geography-chart";
import Header from "../../components/header";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="GEOGRAPHY CHART" subtitle="Simple Geography Chart" />
      </Box>

      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;

import { Box } from "@mui/material";
import BarChart from "../../components/bar-chart";
import Header from "../../components/header";

const Bar = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="BAR CHART" subtitle="Simple Bar Chart" />
      </Box>

      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;

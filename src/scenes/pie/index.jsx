import { Box } from "@mui/material";
import Header from "../../components/header";
import PieChart from "../../components/pie-chart";

const Pie = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="PIE CHART" subtitle="Simple Pie Chart" />
      </Box>

      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;

import { Box } from "@mui/material";
import Header from "../../components/header";
import LineChart from "../../components/line-chart";

const Line = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="LINE CHART" subtitle="Simple Line Chart" />
      </Box>

      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;

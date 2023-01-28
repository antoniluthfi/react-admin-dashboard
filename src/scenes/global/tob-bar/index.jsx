import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "preact/hooks";
import { ColorModeContext, tokens } from "../../../theme";

const TopBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <IconButton></IconButton>
    </Box>
  )
};

export default TopBar;

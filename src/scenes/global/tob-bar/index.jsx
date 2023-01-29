import {
  DarkModeOutlined,
  LightModeOutlined,
  NotificationsOutlined,
  PersonOutline,
  Search,
  SettingsOutlined,
} from "@mui/icons-material";
import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../../theme";

const TopBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* Search Bar */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <Search />
        </IconButton>
      </Box>

      {/* Icons */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlined />
          ) : (
            <LightModeOutlined />
          )}
        </IconButton>

        <IconButton>
          <NotificationsOutlined />
        </IconButton>

        <IconButton>
          <SettingsOutlined />
        </IconButton>

        <IconButton>
          <PersonOutline />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TopBar;

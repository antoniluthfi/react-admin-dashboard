import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import { useState } from "react";
import {
  Sidebar as ProSidebar,
  Menu,
  MenuItem,
  useProSidebar,
  sidebarClasses,
  menuClasses,
} from "react-pro-sidebar";
import {
  BarChartOutlined,
  CalendarTodayOutlined,
  ContactsOutlined,
  HelpOutline,
  HomeOutlined,
  MapOutlined,
  MenuOutlined,
  PeopleOutline,
  PersonOutline,
  PieChartOutline,
  ReceiptOutlined,
  TimelineOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      color={colors.grey[100]}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { collapseSidebar, collapsed, toggleSidebar, toggled } =
    useProSidebar();
  const [selected, setSelected] = useState("Dashboard");

  const toggle = () => {
    toggleSidebar();
    if (toggled) {
      console.log(true);
      collapseSidebar();
    } else {
      console.log(false);
      collapseSidebar();
    }
  };

  return (
    <Box display="flex" flexDirection="row" height="100vh">
      <ProSidebar
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            background: `${colors.primary[400]} !important`,
          },
          [`.${menuClasses.button}:hover`]: {
            color: "#868dfb !important",
            background: "none !important",
          },
        }}
      >
        <Menu iconShape="square" style={{ height: "100vh" }}>
          {/* LOGO AND MENU ICON */}
          <MenuItem
            icon={<MenuOutlined />}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
            onClick={toggle}
          >
            {!collapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
              </Box>
            )}
          </MenuItem>

          {/* USER */}
          {!collapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  loading="lazy"
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src="../../../../assets/user.png"
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>

              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{
                    m: "10px 0 0 0",
                  }}
                >
                  Antoni Luthfi
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  VP Fancy Admin
                </Typography>
              </Box>
            </Box>
          )}

          {/* MENU ITEMS */}
          <Box paddingLeft={collapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/dashboard"
              icon={<HomeOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>

            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutline />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Contacts Information"
              to="/contact"
              icon={<ContactsOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>

            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutline />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="FAQ"
              to="/faq"
              icon={<HelpOutline />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>

            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutline />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Geography"
              to="/geography"
              icon={<MapOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default SideBar;

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge, Container, AppBar } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";

const drawerWidth = 240;
const navItems = ["Store", "Orders", "Analytics"];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" fontFamily="fantasy">
        Reeco
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }} component="header">
      <AppBar
        elevation={0}
        component="nav"
        sx={{ bgcolor: (theme) => theme.palette.success.main }}
      >
        <Container maxWidth="lg">
          <Stack py={2} direction="row" alignItems="center">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Stack
              direction="row"
              gap={2}
              sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}
            >
              <Typography variant="h6" component="div">
                Reeco
              </Typography>

              {navItems.map((item) => (
                <Button key={item} sx={{ color: "#fff", fontWeight: 400 }}>
                  {item}
                </Button>
              ))}
            </Stack>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Badge
                variant="standard"
                badgeContent={4}
                color="warning"
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <IconButton color="inherit" size="small">
                  <ShoppingCartOutlinedIcon />
                </IconButton>
              </Badge>

              <Button
                sx={{ color: "#fff", ml: 2, fontWeight: 400 }}
                endIcon={<ExpandMoreIcon />}
              >
                Hello, James
              </Button>
            </Box>
          </Stack>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Toolbar />
    </Box>
  );
}

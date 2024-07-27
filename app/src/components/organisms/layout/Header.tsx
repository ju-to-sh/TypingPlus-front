import { FC, memo, useState } from "react";
import { AppBar, Box, Drawer, IconButton, Link, List, ListItem, ListItemButton, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SearchIcon from "@mui/icons-material/Search";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import LoginIcon from "@mui/icons-material/Login";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Link as RouterLink } from "react-router-dom";
import { Logo } from "../../atoms/Logo";
import { useCookies } from "react-cookie";
import { UserMenu } from "../../molecules/UserMenu";
import { DrawerUserMenu } from "../../molecules/DrawerUserMenu";

type Props = {
  window?: () => Window;
};

export const Header: FC<Props> = memo((props) => {
  const drawerWidth = 240;
  const [cookie] = useCookies(["accesstoken"]);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ alignItems: "center" }}>
      <List sx={{ paddingTop: "24px" }}>
        <ListItem disablePadding>
          <ListItemButton sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} component={RouterLink} to="/games">
            <VideogameAssetIcon sx={{ marginRight: "8px", color: "#c52f24" }} />
            <Link underline="none">ゲーム選択</Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} component={RouterLink} to="/ranking">
            <EmojiEventsIcon sx={{ marginRight: "8px", color: "#c52f24" }} />
            <Link underline="none">ランキング一覧</Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} component={RouterLink} to="/search">
            <SearchIcon sx={{ marginRight: "8px", color: "#c52f24" }} />
            <Link underline="none">問題検索</Link>
          </ListItemButton>
        </ListItem>
        {cookie.accesstoken ? (
          <>
            <ListItem disablePadding>
              <ListItemButton sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} component={RouterLink} to="/like">
                <ThumbUpIcon sx={{ marginRight: "8px", color: "#c52f24" }} />
                <Link underline="none">お気に入り</Link>
              </ListItemButton>
            </ListItem>
            <DrawerUserMenu />
          </>
        ) : (
          <>
            <ListItem disablePadding>
              <ListItemButton sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} component={RouterLink} to="/signup">
                <SaveAsIcon sx={{ marginRight: "8px", color: "#c52f24" }} />
                <Link underline="none">新規登録</Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} component={RouterLink} to="/login">
                <LoginIcon sx={{ marginRight: "8px", color: "#c52f24" }} />
                <Link underline="none">ログイン</Link>
              </ListItemButton>
            </ListItem>
          </>
        )}
      </List>
    </Box>
  );
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar component="header" position="fixed" style={{ backgroundColor: "#ffeded", borderBottom: "2px solid #c52f24" }}>
        <Box mt={1} mr={2} ml={2} sx={{ display: { sm: "block", md: "none" } }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Link component={RouterLink} to="/">
              <Logo width={220} />
            </Link>
            <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { md: "block" } }}>
              <MenuIcon sx={{ color: "#c52f24" }} />
            </IconButton>
          </Stack>
        </Box>
        <Box mt={1} mr={2} ml={2} sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Link component={RouterLink} to="/">
              <Logo width={220} />
            </Link>
            <Stack lineHeight="70px" direction="row" justifyContent="flex-center" alignItems="center" spacing={3}>
              <Link component={RouterLink} to="/games" underline="hover">
                <div>ゲーム選択</div>
              </Link>
              <Link component={RouterLink} to="/ranking" underline="hover">
                <div>ランキング一覧</div>
              </Link>
              <Link component={RouterLink} to="/search" underline="hover">
                <div>問題検索</div>
              </Link>
              {cookie.accesstoken ? (
                <>
                  <Link component={RouterLink} to="/like" underline="hover">
                    <div>お気に入り</div>
                  </Link>
                  <UserMenu />
                </>
              ) : (
                <>
                  <Link component={RouterLink} to="/signup" underline="hover">
                    <div>新規会員登録</div>
                  </Link>
                  <Link component={RouterLink} to="/login" underline="hover">
                    <div>ログイン</div>
                  </Link>
                </>
              )}
            </Stack>
          </Stack>
        </Box>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: { xs: "block", sm: "block", md: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
});

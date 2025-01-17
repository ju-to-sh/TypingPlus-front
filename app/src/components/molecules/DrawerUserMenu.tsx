import { FC, memo } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link, ListItem, ListItemButton } from "@mui/material";
import { useCookies } from "react-cookie";
import { useApi } from "../../hooks/useApi";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { flashState } from "../../store/flashState";
import LogoutIcon from "@mui/icons-material/Logout";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";

export const DrawerUserMenu: FC = memo(() => {
  const [, , removeCookie] = useCookies(["accesstoken"]);
  const userId = window.localStorage.getItem("user_id");

  const navigate = useNavigate();
  const setFlash = useSetRecoilState(flashState);

  const LogoutHandler = async () => {
    await useApi.post("/logout");
    removeCookie("accesstoken");
    window.localStorage.removeItem("user_id");
    setFlash(true);
    navigate("/");
    setTimeout(() => setFlash(false), 1000);
  };

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton sx={{ display: "flex", justifyContent: "left", alignItems: "center" }} component={RouterLink} to={`/users/${userId}`}>
          <ManageAccountsIcon sx={{ marginRight: "8px", color: "#c52f24" }} />
          <Link underline="none">マイページ</Link>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton sx={{ display: "flex", justifyContent: "left", alignItems: "center" }} component={RouterLink} to={`/users/${userId}/study_records`}>
          <AutoGraphIcon sx={{ marginRight: "8px", color: "#c52f24" }} />
          <Link underline="none">学習記録</Link>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton sx={{ display: "flex", justifyContent: "left", alignItems: "center" }} onClick={LogoutHandler}>
          <LogoutIcon sx={{ marginRight: "8px", color: "#c52f24" }} />
          <Link underline="none">ログアウト</Link>
        </ListItemButton>
      </ListItem>
    </>
  );
});

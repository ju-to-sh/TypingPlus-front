import { FC, memo, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PersonIcon from "@mui/icons-material/Person";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";
import { useCookies } from "react-cookie";
import { useApi } from "../../hooks/useApi";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { flashState } from "../../store/flashState";
import { useRecoilValue } from "recoil";
import { userIdState } from "../../store/userIdState";

export const UserMenu: FC = memo(() => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [, , removeCookie] = useCookies(["accesstoken"]);
  const userId = useRecoilValue(userIdState);

  const navigate = useNavigate();
  const setFlash = useSetRecoilState(flashState);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const LogoutHandler = async () => {
    await useApi.post("/logout");
    removeCookie("accesstoken");
    setAnchorEl(null);
    setFlash(true);
    navigate("/");
    setTimeout(() => setFlash(false), 1000);
  };

  return (
    <>
      <Button id="basic-button" aria-controls={open ? "basic-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined} onClick={handleClick}>
        <PersonIcon />
        <p style={{ paddingLeft: "8px" }}>ユーザー</p>
        <ArrowDropDownIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link component={RouterLink} to={`/users/${userId}`} underline="none" color="#333">
            マイページ
          </Link>
        </MenuItem>
        <MenuItem onClick={LogoutHandler}>ログアウト</MenuItem>
      </Menu>
    </>
  );
});

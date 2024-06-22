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

export const UserMenu: FC = memo(() => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [cookies, setCookie, removeCookie] = useCookies(["accesstoken"]);
  const navigate = useNavigate();

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
    navigate("/", { state: { message: "ログアウトしました" } });
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
          <Link component={RouterLink} to="/profile" underline="none" color="#333">
            マイページ
          </Link>
        </MenuItem>
        <MenuItem onClick={LogoutHandler}>ログアウト</MenuItem>
      </Menu>
    </>
  );
});

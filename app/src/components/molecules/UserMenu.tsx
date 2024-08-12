import { FC, memo, useRef, useState } from "react";
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
  const anchorEl = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [, , removeCookie] = useCookies(["accesstoken"]);
  const userId = useRecoilValue(userIdState);

  const navigate = useNavigate();
  const setFlash = useSetRecoilState(flashState);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const LogoutHandler = async () => {
    await useApi.post("/logout");
    removeCookie("accesstoken");
    setFlash(true);
    navigate("/");
    setTimeout(() => setFlash(false), 1000);
  };

  return (
    <>
      <Button id="basic-button" ref={anchorEl} onClick={handleClick}>
        <PersonIcon />
        <p style={{ paddingLeft: "8px" }}>ユーザー</p>
        <ArrowDropDownIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl.current}
        open={open}
        onClick={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link component={RouterLink} to={`/users/${userId}`} underline="none" color="#333">
            マイページ
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link component={RouterLink} to={`/users/${userId}/study_records`} underline="none" color="#333">
            学習記録
          </Link>
        </MenuItem>
        <MenuItem onClick={LogoutHandler}>ログアウト</MenuItem>
      </Menu>
    </>
  );
});

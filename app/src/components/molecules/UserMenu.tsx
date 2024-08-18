import { FC, memo, useRef, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PersonIcon from "@mui/icons-material/Person";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
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

  const handleClick = () => {
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
      <Button id="basic-user-button" ref={anchorEl} onClick={handleClick}>
        <PersonIcon />
        <p style={{ paddingLeft: "8px" }}>ユーザー</p>
        <ArrowDropDownIcon />
      </Button>
      <Menu id="basic-user-menu" anchorEl={anchorEl.current} open={open} onClick={handleClose}>
        <MenuItem
          onClick={() => {
            handleClose();
            navigate(`/users/${userId}`);
          }}
          sx={{ color: "#c52f24" }}
        >
          マイページ
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            setTimeout(() => {
              navigate(`/users/${userId}/study_records`);
            }, 0);
          }}
          sx={{ color: "#c52f24" }}
        >
          学習記録
        </MenuItem>
        <MenuItem onClick={LogoutHandler} sx={{ color: "#c52f24" }}>
          ログアウト
        </MenuItem>
      </Menu>
    </>
  );
});

import { FC, memo } from "react";
import { AppBar, Box, Link, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Logo } from "../../atoms/Logo";

export const Header: FC = memo(() => {
  return (
    <AppBar component="header" position="fixed" style={{ backgroundColor: "#ffeded", borderBottom: "2px solid #c52f24" }}>
      <Box mt={1} mr={2} ml={2}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Link component={RouterLink} to="/">
            <Logo width={220} />
          </Link>
          <Stack lineHeight="70px" direction="row" justifyContent="flex-center" alignItems="center" spacing={3}>
            <Link component={RouterLink} to="/games" underline="hover">
              <div>ゲーム選択</div>
            </Link>
            <Link component={RouterLink} to="/signup" underline="hover">
              <div>新規会員登録</div>
            </Link>
            <Link component={RouterLink} to="/login" underline="hover">
              <div>ログイン</div>
            </Link>
          </Stack>
        </Stack>
      </Box>
    </AppBar>
  );
});

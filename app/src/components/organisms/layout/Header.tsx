import { FC, memo } from "react";
import { Box, Divider, Link, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Logo } from "../../atoms/Logo";

export const Header: FC = memo(() => {
  return (
    <Box p={2}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Logo width={220} />
        <Stack lineHeight="70px" direction="row" justifyContent="flex-center" alignItems="center" spacing={3}>
          <Link component={RouterLink} to="/signup" underline="hover">
            <div>新規会員登録</div>
          </Link>
          <Link component={RouterLink} to="/login" underline="hover">
            <div>ログイン</div>
          </Link>
        </Stack>
      </Stack>
      <Divider style={{ background: "#c52f24" }} />
    </Box>
  );
});

import { FC, memo } from "react";
import { AppBar, Box, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";
import { Logo } from "../../atoms/Logo";
import { UserMenu } from "../../molecules/UserMenu";

export const LoginHeader: FC = memo(() => {
  return (
    <AppBar component="header" position="fixed" style={{ backgroundColor: "#ffeded", borderBottom: "3px solid #c52f24" }}>
      <Box mt={1} mr={2} ml={2}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Link component={RouterLink} to="/">
            <Logo width={220} />
          </Link>
          <Stack lineHeight="70px" direction="row" justifyContent="flex-center" alignItems="center" spacing={3}>
            <Link component={RouterLink} to="/games" underline="hover">
              <div>ゲーム選択</div>
            </Link>
            <UserMenu />
          </Stack>
        </Stack>
      </Box>
    </AppBar>
  );
});

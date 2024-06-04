import { Button, Link, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { FC } from "react";

export const Top: FC = () => {
  return (
    <>
      <header>
        <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={3}>
          <Link component={RouterLink} to="/signup" underline="hover">
            <div>新規会員登録</div>
          </Link>
          <Link component={RouterLink} to="/login" underline="hover">
            <div>ログイン</div>
          </Link>
        </Stack>
      </header>
      <h2>Topページです</h2>
      <Button variant="contained" color="primary" component={RouterLink} to="/games">問題を解く</Button>
      <footer>
        <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={3}>
          <Link component={RouterLink} to="/term" underline="hover">
            <div>利用規約</div>
          </Link>
          <Link component={RouterLink} to="/policy" underline="hover">
            <div>プライバシーポリシー</div>
          </Link>
        </Stack>
      </footer>
    </>
  );
};

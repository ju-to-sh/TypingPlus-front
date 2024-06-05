import { Button, Link, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { FC, memo } from "react";

export const Top: FC = memo(() => {
  return (
    <>
      <h2>Topページです</h2>
      <Button variant="contained" color="primary" component={RouterLink} to="/games">
        問題を解く
      </Button>
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
});

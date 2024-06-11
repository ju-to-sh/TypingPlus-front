import { Box, Stack, Button, Typography, TextField } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { FC, memo } from "react";
import { Logo } from "../atoms/Logo";

export const Login: FC = memo(() => {
  return (
    <>
      <Box sx={{ maxWidth: 600 }} margin="0 auto">
        <Stack direction="column" justifyContent="center" alignItems="center" height="100vh">
          <Logo width={270} />
          <Typography variant="h4" gutterBottom mb={5} mt={5}>
            ログイン
          </Typography>
          <TextField fullWidth required id="outlined-required" label="メールアドレス" margin="normal" />
          <TextField fullWidth required id="outlined-required" label="パスワード" margin="dense" />
          <Box mt={5}>
            <Button variant="contained" color="primary" component={RouterLink} to="/games">
              ログイン
            </Button>
          </Box>
        </Stack>
      </Box>
    </>
  );
});

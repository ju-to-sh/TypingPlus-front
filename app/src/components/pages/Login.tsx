import { Box, Stack, Button, Typography, TextField, Grid } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { FC, memo } from "react";
import { Logo } from "../atoms/Logo";

export const Login: FC = memo(() => {
  return (
    <Grid container direction="row" sx={{ maxWidth: 600 }} margin="0 auto" justifyContent="center" alignItems="center" height="100vh">
      <Grid item xs={10} textAlign="center" margin="0 auto">
        <Logo width={270} />
        <Typography variant="h4" gutterBottom mb={5} mt={5}>
          ログイン
        </Typography>
        <TextField fullWidth required id="outlined-required" label="メールアドレス" margin="dense" />
        <TextField fullWidth required id="outlined-required" label="パスワード" type="password" margin="dense" />
        <Box mt={3}></Box>
        <Grid container justifyContent="center" columnSpacing={2}>
          <Grid item>
            <Button variant="contained" color="primary" component={RouterLink} to="/games">
              ログイン
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" component={RouterLink} to="/">
              戻る
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
});

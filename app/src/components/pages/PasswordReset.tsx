import { Typography, Grid } from "@mui/material";
import { FC, memo } from "react";
import { Logo } from "../atoms/Logo";
import { PasswordResetForm } from "../organisms/form/PasswordResetForm";

export const PasswordReset: FC = memo(() => {
  return (
    <Grid container direction="row" sx={{ maxWidth: 600 }} margin="0 auto" justifyContent="center" alignItems="center" height="100vh">
      <Grid item xs={10} textAlign="center" margin="0 auto">
        <Logo width={270} />
        <Typography variant="h4" gutterBottom mb={5} mt={5}>
          パスワードリセット申請
        </Typography>
        <PasswordResetForm />
      </Grid>
    </Grid>
  );
});

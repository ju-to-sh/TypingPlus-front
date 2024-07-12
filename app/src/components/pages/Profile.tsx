import { Button, Grid, Typography } from "@mui/material";
import { FC, memo } from "react";
import { Logo } from "../atoms/Logo";
import { UserInfoTable } from "../organisms/layout/UserInfoTable";
import { useNavigate } from "react-router-dom";

export const Profile: FC = memo(() => {
  const navigate = useNavigate();

  return (
    <Grid container direction="row" sx={{ maxWidth: 600 }} margin="0 auto" justifyContent="center" alignItems="center" height="100vh">
      <Grid item xs={10} textAlign="center" margin="0 auto">
        <Logo width={270} />
        <Typography variant="h4" gutterBottom mb={5} mt={5}>
          マイページ
        </Typography>
        <UserInfoTable />
        <Button variant="contained" color="primary" onClick={() => navigate(-1)} sx={{ mt: "24px" }}>
          前画面に戻る
        </Button>
      </Grid>
    </Grid>
  );
});

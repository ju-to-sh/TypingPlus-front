import { Button, Grid, Typography } from "@mui/material";
import { FC, memo } from "react";
import { Logo } from "../atoms/Logo";
import { UserInfoTable } from "../organisms/layout/UserInfoTable";
import { useNavigate, Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const Profile: FC = memo(() => {
  const navigate = useNavigate();
  const [cookies] = useCookies(["accesstoken"]);

  return (
    <>
      {cookies.accesstoken ? (
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
      ) : (
        <Navigate replace to="/" />
      )}
    </>
  );
});

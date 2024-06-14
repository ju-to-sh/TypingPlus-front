import { Box, Button, Typography, TextField, Grid, Stack, Alert } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { FC, memo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useApi } from "../../../hooks/useApi";

type Inputs = {
  email: string;
  password: string;
};

export const LoginForm: FC = memo(() => {
  const [loginFlag, setLoginFlag] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    console.log({ user: data });
    useApi
      .post("/login", data)
      .then(() => {
        reset();
        navigate("/games", { state: { message: "ログインしました" } });
      })
      .catch((error) => {
        setLoginFlag(true);
        console.log(error);
      });
  };

  return (
    <>
      {loginFlag && (
        <Box mb={3}>
          <Alert severity="error">ログインできませんでした</Alert>
        </Box>
      )}
      <Stack component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
        <Stack>
          <ErrorMessage errors={errors} name="email" render={({ message }) => <Typography color="error.main">{message}</Typography>} />
          <ErrorMessage errors={errors} name="password" render={({ message }) => <Typography color="error.main">{message}</Typography>} />
        </Stack>
        <TextField
          id="email"
          fullWidth
          required
          label="メールアドレス"
          type="email"
          {...register("email", {
            required: "メールアドレスを入力して下さい",
            maxLength: 60,
            pattern: {
              value: /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
              message: "メールアドレスの形式が不正です",
            },
          })}
          margin="dense"
        />
        <TextField id="password" fullWidth required label="パスワード" type="password" {...register("password", { required: "パスワードを入力して下さい" })} margin="dense" />
        <Box mt={3}></Box>
        <Grid container justifyContent="center" columnSpacing={2}>
          <Grid item>
            <Button variant="contained" color="primary" type="submit" onSubmit={handleSubmit(onSubmit)}>
              登録する
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" component={RouterLink} to="/">
              戻る
            </Button>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
});

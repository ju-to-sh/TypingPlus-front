import { Box, Button, Typography, TextField, Grid, Stack, Alert } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { FC, memo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useApi } from "../../../hooks/useApi";

type Inputs = {
  nickname: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

export const SignupForm: FC = memo(() => {
  const [registrationFlag, setRegistrationFlag] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    useApi
      .post("/registration", { user: data })
      .then(() => {
        reset();
        setRegistrationFlag(false);
        navigate("/games", { state: { message: "ユーザー登録が完了しました" } });
      })
      .catch((error) => {
        console.log(process.env.REACT_APP_BASE_URL);
        setRegistrationFlag(true);
      });
  };

  return (
    <>
      {registrationFlag && (
        <Box mb={3}>
          <Alert severity="error">登録できませんでした</Alert>
        </Box>
      )}
      <Stack component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
        <Stack>
          <ErrorMessage errors={errors} name="nickname" render={({ message }) => <Typography color="error.main">{message}</Typography>} />
          <ErrorMessage errors={errors} name="email" render={({ message }) => <Typography color="error.main">{message}</Typography>} />
          <ErrorMessage errors={errors} name="password" render={({ message }) => <Typography color="error.main">{message}</Typography>} />
          <ErrorMessage errors={errors} name="passwordConfirmation" render={({ message }) => <Typography color="error.main">{message}</Typography>} />
        </Stack>
        <TextField fullWidth required label="ニックネーム" type="text" {...register("nickname", { required: "ニックネームを入力して下さい" })} margin="dense" />
        <TextField
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
        <TextField fullWidth required label="パスワード" type="password" {...register("password", { required: "パスワードを入力して下さい" })} margin="dense" />
        <TextField fullWidth required label="パスワード(確認)" type="password" {...register("passwordConfirmation", { required: "パスワードをもう一度入力して下さい" })} margin="dense" />
        <Box mt={3}></Box>
        <Grid container justifyContent="center" columnSpacing={2}>
          <Grid item>
            <Button variant="contained" color="primary" type="submit">
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

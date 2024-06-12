import { Box, Button, Typography, TextField, Grid, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { FC, memo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

type Inputs = {
  nickname: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

export const SignupForm: FC = memo(() => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    console.log(`${data.nickname},${data.email},${data.password},${data.passwordConfirmation},`);
  };

  return (
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
  );
});

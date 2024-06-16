import { Box, Button, Typography, TextField, Grid, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FC, memo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useApi } from "../../../hooks/useApi";

type Inputs = {
  nickname: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

export const ProfileForm: FC = memo(() => {
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
        navigate("/games", { state: { message: "ユーザー登録が完了しました" } });
      })
      .catch((error) => console.log(process.env.REACT_APP_BASE_URL));
  };

  return (
    <Stack component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        <ErrorMessage errors={errors} name="nickname" render={({ message }) => <Typography color="error.main">{message}</Typography>} />
        <ErrorMessage errors={errors} name="email" render={({ message }) => <Typography color="error.main">{message}</Typography>} />
        <ErrorMessage errors={errors} name="password" render={({ message }) => <Typography color="error.main">{message}</Typography>} />
        <ErrorMessage errors={errors} name="passwordConfirmation" render={({ message }) => <Typography color="error.main">{message}</Typography>} />
      </Stack>
      <Stack direction="row" mb={2}>
        <TextField id="nickname" fullWidth required label="ニックネーム" type="text" {...register("nickname", { required: "ニックネームを入力して下さい" })} />
      </Stack>
      <Stack direction="row" mb={2}>
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
        />
      </Stack>
      <Stack direction="row" mb={2}>
        <TextField id="password" fullWidth required label="パスワード" type="password" {...register("password", { required: "パスワードを入力して下さい" })} />
        <Button>編集</Button>
      </Stack>
      <Stack direction="row">
        <TextField id="passwordConfirmation" fullWidth required label="パスワード(確認)" type="password" {...register("passwordConfirmation", { required: "パスワードをもう一度入力して下さい" })} />
        <Button>編集</Button>
      </Stack>
    </Stack>
  );
});

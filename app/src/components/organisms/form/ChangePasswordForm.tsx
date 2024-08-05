import { Box, Button, Typography, TextField, Grid, Stack, Alert } from "@mui/material";
import { Link as RouterLink, useParams } from "react-router-dom";
import { FC, memo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useApi } from "../../../hooks/useApi";
import _ from "lodash";

type Inputs = {
  password: string;
  passwordConfirmation: string;
};

export const ChangePasswordForm: FC = memo(() => {
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    const snakeCasedData = _.mapKeys(data, (value, key: string) => _.snakeCase(key));
    await useApi
      .put(`/password_resets/${id}`, { user: snakeCasedData })
      .then((res) => {
        setMessage(res.data.message);
        reset();
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(error);
      });
  };

  return (
    <>
      {message && (
        <Alert sx={{ marginBottom: "16px" }} severity="success">
          {message}
        </Alert>
      )}
      {errorMessage && (
        <Alert sx={{ marginBottom: "16px" }} severity="error">
          {errorMessage}
        </Alert>
      )}
      <Stack component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
        <Stack>
          <ErrorMessage errors={errors} name="password" render={({ message }) => <Typography color="error.main">{message}</Typography>} />
          <ErrorMessage errors={errors} name="passwordConfirmation" render={({ message }) => <Typography color="error.main">{message}</Typography>} />
        </Stack>
        <TextField fullWidth required label="パスワード" type="password" {...register("password", { required: "パスワードを入力して下さい" })} margin="dense" />
        <TextField fullWidth required label="パスワード(確認)" type="password" {...register("passwordConfirmation", { required: "パスワードをもう一度入力して下さい" })} margin="dense" />
        <Box mt={3}></Box>
        <Grid container justifyContent="center" columnSpacing={2}>
          <Grid item>
            <Button variant="contained" color="primary" type="submit">
              更新
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

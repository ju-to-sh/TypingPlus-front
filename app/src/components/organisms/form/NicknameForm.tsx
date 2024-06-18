import { Button, Typography, TextField, Stack } from "@mui/material";
import { FC, memo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useApi } from "../../../hooks/useApi";

type Input = {
  nickname?: string;
};

type Props = {
  onClose: () => void;
};

export const NicknameForm: FC<Props> = memo((props) => {
  const { onClose } = props;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> = (data: Input) => {
    useApi
      .post("/", { user: data })
      .then(() => {
        reset();
      })
      .catch((error) => console.log(process.env.REACT_APP_BASE_URL));
    reset();
    onClose();
  };

  return (
    <Stack component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
      <Stack mb={2}>
        <ErrorMessage errors={errors} name="nickname" render={({ message }) => <Typography color="error.main">{message}</Typography>} />
      </Stack>
      <Stack direction="row" mb={2}>
        <TextField id="nickname" fullWidth required label="ニックネーム" type="text" {...register("nickname", { required: "ニックネームを入力して下さい" })} />
      </Stack>
      <Stack direction="row" spacing={2} justifyContent="center">
        <Button variant="contained" color="primary" type="submit">
          変更する
        </Button>
        <Button variant="contained" color="secondary" onClick={onClose}>
          キャンセルする
        </Button>
      </Stack>
    </Stack>
  );
});

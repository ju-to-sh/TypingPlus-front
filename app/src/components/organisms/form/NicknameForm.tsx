import { Button, Typography, TextField, Stack } from "@mui/material";
import { FC, memo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useApi } from "../../../hooks/useApi";
import { useSetRecoilState } from "recoil";
import { userInfoState } from "../../../store/userInfoState";
import { UserAttributes } from "../../../types/api/user";
import { useParams } from "react-router-dom";

type Input = {
  nickname: string;
};

type Props = {
  onClose: () => void;
  messageFlag: React.Dispatch<React.SetStateAction<boolean>>;
};

export const NicknameForm: FC<Props> = memo((props) => {
  const { id } = useParams();
  const { onClose, messageFlag } = props;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Input>();
  const setUser = useSetRecoilState(userInfoState(id as string));

  const onSubmit: SubmitHandler<Input> = async (data: Input) => {
    try {
      await useApi.patch(`/users/${id}`, { user: data });
      setUser((prevUser: UserAttributes) => ({
        ...prevUser,
        nickname: data.nickname,
      }));
      reset();
      onClose();
      messageFlag(true);
    } catch (error) {
      console.log(error);
    }
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

import { Button, Typography, TextField, Stack, List, ListItem } from "@mui/material";
import { FC, memo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { userInfoState } from "../../../store/userInfoState";
import { useRecoilValue } from "recoil";

type Input = {
  email?: string;
};

type Props = {
  onClose: () => void;
};

export const ChangeEmailForm: FC<Props> = memo((props) => {
  const { onClose } = props;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> = (data: Input) => {
    // useApi
    //   .post("/", { user: data })
    //   .then(() => {
    //     reset();
    //   })
    //   .catch((error) => console.log(process.env.REACT_APP_BASE_URL));
    console.log("hello");
    reset();
    onClose();
  };
  const user = useRecoilValue(userInfoState);

  return (
    <Stack component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
      <Stack mb={2}>
        <ErrorMessage errors={errors} name="email" render={({ message }) => <Typography color="error.main">{message}</Typography>} />
      </Stack>
      <Stack direction="row" mb={2} textAlign="left">
        <Typography width="300px">現在のメールアドレス</Typography>
        <Typography width="380px">{user.email}</Typography>
      </Stack>
      <Stack direction="row">
        <Typography width="300px" lineHeight="56px" textAlign="left">
          新しいメールアドレス
        </Typography>
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
        />
      </Stack>
      <List>
        <ListItem sx={{ listStyle: "inside", padding: 0, mt: "8px" }}>
          <Typography fontSize="14px">メールアドレスの受信拒否が設定されていないかご確認下さい</Typography>
        </ListItem>
        <ListItem sx={{ listStyle: "inside", padding: 0, mb: "8px" }}>
          <Typography fontSize="14px">受診した確認URLの有効期限はxx分です</Typography>
        </ListItem>
      </List>
      <Stack direction="row" spacing={2} justifyContent="center">
        <Button variant="contained" color="primary" type="submit">
          確認メールを受け取る
        </Button>
        <Button variant="contained" color="secondary" onClick={onClose}>
          キャンセルする
        </Button>
      </Stack>
    </Stack>
  );
});

import { Stack, Button, Avatar, Typography } from "@mui/material";
import { FC, memo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../store/userInfoState";
import { UploadButton } from "../../molecules/UploadButton";
import { useFormData } from "../../../hooks/useFormData";
import { UserAttributes } from "../../../types/api/user";
import { useParams } from "react-router-dom";

type Input = {
  avatar: string;
};

type Props = {
  onClose: () => void;
  messageFlag: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ProfileImageForm: FC<Props> = memo((props) => {
  const { id } = useParams();
  const { onClose, messageFlag } = props;
  const { handleSubmit, reset } = useForm<Input>();
  const [user, setUser] = useRecoilState(userInfoState(id as string));
  const [selectedFile, setSelectedFile] = useState<File>();

  const onSubmit: SubmitHandler<Input> = async () => {
    try {
      if (selectedFile) {
        const formData = new FormData();
        formData.append("user[avatar]", selectedFile);
        await useFormData.patch(`/users/${id}`, formData).then((res) =>
          setUser((prevUser: UserAttributes) => ({
            ...prevUser,
            avatar: { url: res.data.data.attributes.avatar.url },
          }))
        );
      } else {
        console.log("ファイルが選択されていません");
      }
      reset();
      onClose();
      messageFlag(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Stack component="form" onSubmit={handleSubmit(onSubmit)}>
      {user.avatar.url ? (
        <Avatar alt="Profile Image" src={user.avatar.url} sx={{ width: 60, height: 60, margin: "auto", marginBottom: "16px" }} />
      ) : (
        <Avatar
          alt="Profile Default Image"
          src="https://rails-avatar-bucket.s3.ap-northeast-1.amazonaws.com/uploads/content_image/default-user.png"
          sx={{ width: 60, height: 60, margin: "auto", marginBottom: "16px" }}
        />
      )}
      <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" mb="16px">
        {user.avatar.url ? (
          <Typography width="400px">現在のプロフィール画像：{user.avatar.url.slice(user.avatar.url.lastIndexOf("/") + 1)}</Typography>
        ) : (
          <Typography width="400px">現在のプロフィール画像：なし</Typography>
        )}
        <UploadButton onFileSelect={setSelectedFile} />
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

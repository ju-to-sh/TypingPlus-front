import { Box, Button, Modal, Typography } from "@mui/material";
import { FC, memo, useState } from "react";
import { NicknameForm } from "../organisms/form/NicknameForm";
import { ChangeEmailForm } from "../organisms/form/ChangeEmailForm";

type Props = {
  heading: string;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

export const ProfileEditModal: FC<Props> = memo((props) => {
  // const [open, setOpen] = useRecoilState(modalState);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { heading } = props;

  return (
    <>
      <Button onClick={handleOpen}>編集</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6" component="h2" pb={2}>
            {heading}の変更
          </Typography>
          {heading === "ニックネーム" && <NicknameForm onClose={handleClose} />}
          {heading === "メールアドレス" && <ChangeEmailForm onClose={handleClose} />}
        </Box>
      </Modal>
    </>
  );
});

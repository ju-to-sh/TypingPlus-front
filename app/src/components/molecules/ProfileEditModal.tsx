import { Button, Modal } from "@mui/material";
import { FC, ReactElement, memo, useState } from "react";
// import { ReactComponent as Icon } from "../../assets/logo.svg";

type Props = {
  children: ReactElement;
};

export const ProfileEditModal: FC<Props> = memo((props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { children } = props;

  return (
    <>
      <Button onClick={handleOpen}>編集</Button>
      <Modal open={open} onClose={handleClose}>
        {children}
      </Modal>
    </>
  );
});

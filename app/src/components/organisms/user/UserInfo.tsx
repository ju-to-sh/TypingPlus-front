/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Stack, Typography } from "@mui/material";
import { FC, memo } from "react";
import { ProfileEditModal } from "../../molecules/ProfileEditModal";

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

type Props = {
  title: string;
  value: string;
};

export const UserInfo: FC<Props> = memo((props) => {
  const { title, value } = props;
  return (
    <Stack direction="row" alignItems="center">
      <Box width="160px">{title}</Box>
      <Stack direction="row" justifyContent="space-between" width="100%" pl={5}>
        <p>{value}</p>
        <ProfileEditModal>
          <Box sx={style}>
            <Typography variant="h6" component="h2">
              {title}の変更
            </Typography>
            <Typography sx={{ mt: 2 }}>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</Typography>
          </Box>
        </ProfileEditModal>
      </Stack>
    </Stack>
  );
});

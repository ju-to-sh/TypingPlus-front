/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Stack, Typography } from "@mui/material";
import { FC, memo } from "react";
import { ProfileEditModal } from "../../molecules/ProfileEditModal";

type Props = {
  title: string;
  value: string;
};

export const UserInfo: FC<Props> = memo((props) => {
  const { title, value } = props;
  return (
    <Stack direction="row" alignItems="center">
      <Box width="160px" height="48px" lineHeight="48px">
        {title}
      </Box>
      <Stack direction="row" justifyContent="space-between" width="100%" pl={4}>
        <Typography alignContent="center">{value}</Typography>
        <ProfileEditModal heading={title} />
      </Stack>
    </Stack>
  );
});

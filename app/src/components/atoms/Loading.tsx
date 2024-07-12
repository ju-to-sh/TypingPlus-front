import { Box, CircularProgress } from "@mui/material";
import { FC, memo } from "react";

export const Loading: FC = memo(() => {
  return (
    <Box>
      <CircularProgress />
    </Box>
  );
});

import { Box, Button, Stack, Typography } from "@mui/material";
import { FC, memo } from "react";
import { Link as RouterLink } from "react-router-dom";
import FileDownloadDoneIcon from "@mui/icons-material/FileDownloadDone";

export const Description: FC = memo(() => {
  return (
    <>
      <Typography variant="subtitle1" gutterBottom>
        Ruby/Railsに特化したクイズとタイピングゲーム
      </Typography>
      <Box pb={2}>
        こんな方にオススメです
        <Stack mt="12px" pl={1} direction="column" justifyContent="flex-start" spacing={1}>
          <Stack direction="row" justifyContent="flex-start" alignItems="flex-start">
            <FileDownloadDoneIcon />
            <Typography variant="body2" gutterBottom pl={1}>
              Ruby/Railsの学習とタイピング速度向上を両立したい方
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="flex-start" alignItems="flex-start">
            <FileDownloadDoneIcon />
            <Typography variant="body2" gutterBottom pl={1}>
              Ruby/Railsの理解度チェックをしたい方
            </Typography>
          </Stack>
        </Stack>
      </Box>
      <Box textAlign="center">
        <Button variant="contained" color="primary" component={RouterLink} to="/games">
          問題を解く
        </Button>
      </Box>
    </>
  );
});

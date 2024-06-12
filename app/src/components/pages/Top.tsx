import { Box, Stack, Button, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { FC, memo } from "react";
import FileDownloadDoneIcon from "@mui/icons-material/FileDownloadDone";

export const Top: FC = memo(() => {
  return (
    <Box sx={{ minWidth: 600 }}>
      <Stack direction="row" justifyContent="center" alignItems="center" height="100vh">
        <Box>
          <Typography variant="h3" gutterBottom>
            Typing Plus
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Ruby/Railsに特化したクイズとタイピングゲーム
          </Typography>
          <Typography variant="body1" gutterBottom mb={2}>
            こんな方にオススメです
            <Stack mt={0.5} pl={1} direction="column" justifyContent="flex-start" spacing={1}>
              <Stack direction="row" justifyContent="flex-start" alignItems="flex-start">
                <FileDownloadDoneIcon />
                <Typography variant="body2" gutterBottom pl={1}>
                  Ruby/Railsの学習とタイピング速度向上を両立させたい方
                </Typography>
              </Stack>
              <Stack direction="row" justifyContent="flex-start" alignItems="flex-start">
                <FileDownloadDoneIcon />
                <Typography variant="body2" gutterBottom pl={1}>
                  Ruby/Railsの理解度チェックをしたい方
                </Typography>
              </Stack>
            </Stack>
          </Typography>
          <Box textAlign="center">
            <Button variant="contained" color="primary" component={RouterLink} to="/games">
              問題を解く
            </Button>
          </Box>
        </Box>
        <Box>
          <img width={300} height="auto" src='../../images/top-image.png' alt="logo" />
        </Box>
      </Stack>
    </Box>
  );
});

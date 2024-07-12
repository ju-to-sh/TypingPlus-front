import { Box, Stack, Button, Typography, Collapse, Alert, Grid } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { FC, memo, useState } from "react";
import FileDownloadDoneIcon from "@mui/icons-material/FileDownloadDone";
import { useRecoilValue } from "recoil";
import { flashState } from "../../store/flashState";

export const Top: FC = memo(() => {
  const [open, setOpen] = useState(true);
  const flash = useRecoilValue(flashState);

  return (
    <Grid container direction="column" justifyContent="center" alignItems="center">
      <Box sx={{ minWidth: 600 }}>
        {flash && (
          <Collapse in={open}>
            <Alert severity="success" onClose={() => setOpen(false)}>
              ログアウトしました
            </Alert>
          </Collapse>
        )}
        <Stack direction="row" justifyContent="center" alignItems="center">
          <Box>
            <Typography variant="h3" gutterBottom>
              Typing Plus
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Ruby/Railsに特化したクイズとタイピングゲーム
            </Typography>
            <Box pb={2}>
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
            </Box>
            <Box textAlign="center">
              <Button variant="contained" color="primary" component={RouterLink} to="/games">
                問題を解く
              </Button>
            </Box>
          </Box>
          <Box>
            <img width={300} height="auto" src="../../images/top-image.png" alt="logo" />
          </Box>
        </Stack>
      </Box>
    </Grid>
  );
});

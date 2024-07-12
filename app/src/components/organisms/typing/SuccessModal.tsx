import { Backdrop, Box, Button, Fade, Modal, Stack, Typography } from "@mui/material";
import { FC, memo } from "react";
import { useStyles } from "../../../hooks/useStyles";
import { Link as RouterLink } from "react-router-dom";

type Props = {
  onClick: () => void;
  open: boolean;
  missType: number;
  speed: number;
};

export const SuccessModal: FC<Props> = memo((props) => {
  const { onClick, open, missType, speed } = props;
  const classes = useStyles();

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box className={classes.modalBox}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              タイピング結果
            </Typography>
            <Stack direction="column" justifyContent="center" alignItems="center" spacing={2} border="1px solid #C1BBBB" p="8px 16px" m={2}>
              <Typography pr={2}>{`CPM(1分間当たりの入力文字数):${Math.round(speed)}`}</Typography>
              <Typography pr={2}>{`ミスタイプ数:${missType}回`}</Typography>
            </Stack>
            <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} pt={2}>
              <Button variant="contained" color="primary" component={RouterLink} to="/typing_games">
                問題一覧へ
              </Button>
              <Button variant="contained" color="primary" onClick={onClick}>
                もう一度解く
              </Button>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </>
  );
});

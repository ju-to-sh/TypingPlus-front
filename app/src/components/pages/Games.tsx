import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import { FC, memo, useState } from "react";
import { useLocation } from "react-router-dom";

export const Games: FC = memo(() => {
  const [open, setOpen] = useState(true);
  const location = useLocation();
  return (
    <>
      {location.state?.message && (
        <Collapse in={open}>
          <Alert severity="success" onClose={() => setOpen(false)}>
            {location.state.message}
          </Alert>
        </Collapse>
      )}
      <h2>ゲーム選択ページです</h2>
    </>
  );
});

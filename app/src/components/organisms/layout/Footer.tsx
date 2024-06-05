import { FC, memo } from "react";
import { Box, Divider, Link, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export const Footer: FC = memo(() => {
  return (
    <Box p={2} component="footer" position="fixed" bottom={0} width="100%" mb={2}>
      <Divider style={{ background: "#c52f24", marginBottom: "16px" }} />
      <Stack direction="column" alignItems="flex-start" spacing={1}>
        <Link component={RouterLink} to="/term" underline="hover">
          <div>利用規約</div>
        </Link>
        <Link component={RouterLink} to="/policy" underline="hover">
          <div>プライバシーポリシー</div>
        </Link>
      </Stack>
    </Box>
  );
});

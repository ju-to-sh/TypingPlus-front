import { FC, memo } from "react";
import { Box, Divider, Link, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export const Footer: FC = memo(() => {
  return (
    <Box p="0px 16px 8px 16px" component="footer" position="fixed" bottom={0} width="100%" style={{ backgroundColor: "#fff" }}>
      <Divider style={{ background: "#c52f24", marginBottom: "15px" }} />
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

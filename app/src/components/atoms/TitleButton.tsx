import { Box, Button, Link, Typography } from "@mui/material";
import { FC, memo } from "react";
import { Link as RouterLink } from "react-router-dom";

type Props = {
  title: string;
  content: string;
  href: string;
};

export const TitleButton: FC<Props> = memo((props) => {
  const { title, content, href } = props;
  return (
    <Button sx={{ padding: 0 }}>
      <Link component={RouterLink} to={href} underline="none">
        <Box sx={{ backgroundColor: "#F1938C", borderRadius: "5px" }} p={1}>
          <Typography textAlign="left" fontSize="16px" fontWeight="bold" color="#ffffff">
            {title}
          </Typography>
          <Typography fontSize="12px" color="#ffffff">
            {content}
          </Typography>
        </Box>
      </Link>
    </Button>
  );
});

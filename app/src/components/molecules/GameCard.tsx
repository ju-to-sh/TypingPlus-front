import { FC, memo } from "react";
import { Box, Card, CardActions, CardMedia, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { TitleButton } from "../atoms/TitleButton";

type Props = {
  title: string;
  content: string;
  attribution: string;
  attributionSrc: string;
  src: string;
  href: string;
};

export const GameCard: FC<Props> = memo((props) => {
  const { title, content, attribution, attributionSrc, src, href } = props;
  return (
    <Card sx={{ maxWidth: 400, border: "1px solid #eee" }}>
      <Box pt="16px" pr="16px" pl="16px" position="relative" sx={{ width: { xs: "auto", sm: "auto", md: "300px" } }}>
        <CardMedia sx={{ height: { xs: 225, sm: 225, md: 280 }, width: "auto" }} image={src} />
        <Link fontSize="8px" position="absolute" bottom="-10px" right="16px" color="#333" component={RouterLink} to={attributionSrc} underline="hover">
          {attribution}
        </Link>
      </Box>
      <CardActions sx={{ padding: "16px", justifyContent: "center" }}>
        <TitleButton href={href} title={title} content={content} />
      </CardActions>
    </Card>
  );
});

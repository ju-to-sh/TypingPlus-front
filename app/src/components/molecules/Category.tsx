import { FC, memo } from "react";
import { Box, List, ListItem, ListItemIcon } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import { GameListAttributes } from "../../types/api/gameList";
import { useCookies } from "react-cookie";

export const Category: FC<Pick<GameListAttributes, "category" | "level">> = memo((props) => {
  const { category, level } = props;
  const MAXLEVEL = 5;
  const [cookie] = useCookies(["accesstoken"]);

  return (
    <List sx={{ maxWidth: 180, display: "flex", justifyContent: "left", alignItems: "center", margin: "left" }}>
      <ListItem sx={{ padding: 0 }}>
        <Box mr="4px" height="20px">
          {category === "ruby" && <img width="20px" height="20px" src="../../../images/ruby.svg" alt="ruby" />}
          {category === "rails" && <img width="20px" height="20px" src="../../../images/rails.svg" alt="rails" />}
        </Box>
        <ListItemIcon sx={{ marginRight: "4px" }}>
          {[...Array(level)].map((_, index) => (
            <StarIcon key={index} sx={{ width: "20px", height: "20px" }} />
          ))}
          {[...Array(MAXLEVEL - level)].map((_, index) => (
            <StarBorderIcon key={index} sx={{ width: "20px", height: "20px" }} />
          ))}
        </ListItemIcon>
        {cookie.accesstoken && (
          <ListItemIcon>
            <ThumbUpIcon sx={{ color: "#f8962f" }} />
          </ListItemIcon>
        )}
      </ListItem>
    </List>
  );
});

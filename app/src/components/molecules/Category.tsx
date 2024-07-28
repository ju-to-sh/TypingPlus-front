import { FC, memo, MouseEventHandler } from "react";
import { Box, List, ListItem, ListItemIcon } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import IconButton from "@mui/material/IconButton";
import { useCookies } from "react-cookie";
import { useApi } from "../../hooks/useApi";

type Props = {
  level: number;
  category: number | string;
  fetchGameLists?: () => Promise<void> | undefined;
};

export const Category: FC<Props> = memo((props) => {
  const { category, level, fetchGameLists } = props;
  const MAXLEVEL = 5;
  const [cookie] = useCookies(["accesstoken"]);

  const LikeHandler = async (id: string) => {
    try {
      await useApi.post("/likes", {
        params: {
          game_list_id: id,
        },
      });
    } catch (error) {
      throw error;
    }
  };
  const UnlikeHandler: MouseEventHandler<HTMLButtonElement> = async (event) => {
    const element = event.currentTarget.closest(".MuiBox-root");
    const id = element?.getAttribute("id");
    try {
      await useApi.delete(`/likes/${id}`);
      fetchGameLists && fetchGameLists();
    } catch (error) {
      throw error;
    }
  };

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
            <IconButton onClick={UnlikeHandler}>
              <ThumbUpIcon sx={{ color: "#f8962f" }} />
            </IconButton>
          </ListItemIcon>
        )}
      </ListItem>
    </List>
  );
});

import { FC, memo, MouseEventHandler, useEffect } from "react";
import { Box, List, ListItem, ListItemIcon } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import IconButton from "@mui/material/IconButton";
import { useCookies } from "react-cookie";
import { useApi } from "../../hooks/useApi";
import { useRecoilState, useRecoilValue } from "recoil";
import { fetchLikeListIdsSelector, likeListIdsState } from "../../store/likeState";
import { GameLists } from "../../types/api/gameList";

type Props = {
  gameListId: string;
  level: number;
  category: number | string;
};

export const Category: FC<Props> = memo((props) => {
  const { gameListId, category, level } = props;
  const MAXLEVEL = 5;
  const [cookie] = useCookies(["accesstoken"]);
  const fetchLikeListIds = useRecoilValue(fetchLikeListIdsSelector);
  const [likeGameLists, setLikeGameLists] = useRecoilState(likeListIdsState);

  const LikeHandler: MouseEventHandler<HTMLButtonElement> = async (event) => {
    const element = event.currentTarget.closest(".MuiBox-root");
    const id = element?.getAttribute("id");
    try {
      await useApi.post("/likes", { id: id });
      const response = await useApi.get<GameLists>("/likes");
      setLikeGameLists(response.data.data.map((data) => data.id));
    } catch (error) {
      throw error;
    }
  };
  const UnlikeHandler: MouseEventHandler<HTMLButtonElement> = async (event) => {
    const element = event.currentTarget.closest(".MuiBox-root");
    const id = element?.getAttribute("id");
    try {
      await useApi.delete(`/likes/${id}`);
      const response = await useApi.get<GameLists>("/likes");
      setLikeGameLists(response.data.data.map((data) => data.id));
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    setLikeGameLists(fetchLikeListIds);
  }, []);

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
        {cookie.accesstoken ? (
          likeGameLists?.includes(gameListId) ? (
            <ListItemIcon>
              <IconButton onClick={UnlikeHandler}>
                <ThumbUpIcon sx={{ color: "#f8962f" }} />
              </IconButton>
            </ListItemIcon>
          ) : (
            <ListItemIcon>
              <IconButton onClick={LikeHandler}>
                <ThumbUpOutlinedIcon sx={{ color: "#f8962f" }} />
              </IconButton>
            </ListItemIcon>
          )
        ) : (
          <></>
        )}
      </ListItem>
    </List>
  );
});

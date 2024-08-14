import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { FC, memo } from "react";
import { useRecoilValue } from "recoil";
import { rankingInfoState } from "../../../store/rankingInfoState";
import { RankingData } from "../../../types/api/ranking";
import { Rank } from "../../atoms/Rank";

export const AvatarList: FC = memo(() => {
  const rankingInfo = useRecoilValue(rankingInfoState);

  return (
    <List sx={{ width: "100%", maxWidth: 800, padding: 0 }}>
      {rankingInfo.data.map((info: RankingData, index: number) => (
        <ListItem key={info.id} alignItems="center" sx={{ bgcolor: "background.paper", border: "1px solid #c1bbbb", borderRadius: "5px", mb: "8px", flexDirection: { xs: "column", sm: "row" } }}>
          <Box display="flex" sx={{ width: { sx: "100%", sm: "80%" } }}>
            <ListItemAvatar>
              {rankingInfo.included[index].attributes.avatar.url ? (
                <Avatar alt="nickname" src={rankingInfo.included[index].attributes.avatar.url} />
              ) : (
                <Avatar alt="nickname" src="https://rails-avatar-bucket.s3.ap-northeast-1.amazonaws.com/uploads/content_image/default-user.png" />
              )}
            </ListItemAvatar>
            <ListItemText
              primary={rankingInfo.included[index].attributes.nickname}
              secondary={
                <Typography sx={{ display: "flex", justifyContent: "center", width: "100%" }} component="span" variant="body2" color="text.primary">
                  タイプ速度:{info.attributes.type_speed} スコア:{info.attributes.score}
                </Typography>
              }
            />
          </Box>
          <ListItemText sx={{ width: { xs: "123px", sm: "40%" } }} primary="順位" secondary={<Rank index={index + 1} />} />
        </ListItem>
      ))}
    </List>
  );
});

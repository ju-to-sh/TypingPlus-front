import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { FC, memo } from "react";

export const AvatarList: FC = memo(() => {
  return (
    <List sx={{ width: "100%", maxWidth: 800, padding: 0 }}>
      <ListItem alignItems="flex-start" sx={{ bgcolor: "background.paper", border: "1px solid #c1bbbb", borderRadius: "5px", mb: "8px" }}>
        <ListItemAvatar>
          <Avatar alt="nickname" src="https://rails-avatar-bucket.s3.ap-northeast-1.amazonaws.com/uploads/content_image/default-user.png" />
        </ListItemAvatar>
        <ListItemText
          primary="nickname"
          secondary={
            <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
              <Typography sx={{ display: "inline" }} component="span" variant="body2" color="text.primary">
                `スコア : 100`
              </Typography>
            </Box>
          }
        />
        <ListItemText
          primary="順位"
          secondary={
            <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
              <Typography sx={{ display: "inline" }} component="span" variant="body2" color="text.primary">
                `1位`
              </Typography>
            </Box>
          }
        />
      </ListItem>
    </List>
  );
});

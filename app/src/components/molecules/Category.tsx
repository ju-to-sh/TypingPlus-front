import { FC, memo } from "react";
import { Box, List, ListItem, ListItemIcon } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
type Props = {
  category: number;
  level: number;
};

export const Category: FC<Props> = memo((props) => {
  const { category, level } = props;
  return (
    <List sx={{ maxWidth: 180, display: "flex", justifyContent: "left", alignItems: "center", margin: "left" }}>
      <ListItem sx={{ padding: 0 }}>
        <Box mr="4px" height="20px">
          {category === 1 && <img width="20px" height="20px" src="../../../images/ruby.svg" alt="ruby" />}
          {category === 2 && <img width="20px" height="20px" src="../../../images/rails.svg" alt="ruby" />}
        </Box>
        <ListItemIcon>
          {[...Array(level)].map((_, index) => (
            <StarBorderIcon key={index} sx={{ width: "20px", height: "20px" }} />
          ))}
        </ListItemIcon>
      </ListItem>
    </List>
  );
});

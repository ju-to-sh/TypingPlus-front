import { Typography } from "@mui/material";
import { FC, memo } from "react";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

type Props = {
  index: number;
};

export const Rank: FC<Props> = memo((props) => {
  const { index } = props;
  const colors = ["gold", "silver", "#CD7F32"];
  return (
    <Typography sx={{ display: "flex", justifyContent: "center", width: "100%", lineHeight: "24px" }} component="span" variant="body2" color="text.primary">
      {index < 4 ? (
        <>
          <EmojiEventsIcon sx={{ color: colors[index - 1] }} />
          {index}位
        </>
      ) : (
        <>{index}位</>
      )}
    </Typography>
  );
});

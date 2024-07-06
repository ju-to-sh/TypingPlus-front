import { FC, memo, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue, useRecoilState } from "recoil";
import { typingState } from "../../../store/typingState";
import { typingInfoState } from "../../../store/typingInfoState";
import { Typography } from "@mui/material";

export const TypingQuestion: FC = memo(() => {
  const param = useParams();
  const typingGames = useRecoilValue(typingState({ id: param.id }));
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typingString, setTypingString] = useState(typingGames[questionIndex]);
  const [typingInfo, setTypingInfo] = useRecoilState(typingInfoState);
  const [inputValue, setInputValue] = useState("");

  const handleKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (typingInfo.finished) return;
    let newValue = inputValue;

    if (e.key === "Enter") {
      newValue = "\n";
    } else if (e.key.length === 1) {
      newValue = e.key;
    }
    setInputValue(newValue);

    if (newValue === typingString.attributes.content[currentIndex]) {
      setTypingInfo((prev) => ({
        ...prev,
        isMissType: false,
      }));
      setCurrentIndex(currentIndex + newValue.length);
      if (currentIndex + 1 >= typingString.attributes.content.length) {
        setTypingInfo((prev) => ({
          ...prev,
          finished: true,
        }));
        console.log("hello");
        alert(`ミスタイプ：${typingInfo.missCount}`);
        // 画面遷移処理
      }
    } else {
      if (e.key !== "Shift")
        setTypingInfo((prev) => ({
          ...prev,
          isMissType: true,
          missCount: prev.missCount + 1,
        }));
    }
  };

  return (
    <div onKeyDown={(e) => handleKey(e)} tabIndex={0}>
      <Typography component="div" display="inline" color="green" sx={{ whiteSpace: "pre-wrap" }}>
        {typingString.attributes.content.slice(0, currentIndex)}
      </Typography>
      {typingInfo.isMissType ? (
        <Typography display="inline" color="red">
          {typingString.attributes.content[currentIndex]}
        </Typography>
      ) : (
        <Typography display="inline" color="black">
          {typingString.attributes.content[currentIndex]}
        </Typography>
      )}
      <Typography component="div" display="inline" sx={{ whiteSpace: "pre-wrap" }}>
        {typingString.attributes.content.slice(currentIndex + 1, typingString.attributes.content.length)}
      </Typography>
    </div>
  );
});

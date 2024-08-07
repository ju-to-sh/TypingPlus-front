import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import { useRecoilState, useRecoilValue } from "recoil";
import { FC, memo, useEffect } from "react";
import { fetchtTypingResultSelector, typingResultState } from "../../../store/typingInfoState";
import { useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#eee",
    color: "#333",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const TypingRecord: FC = memo(() => {
  const { id } = useParams();
  const fetchTyping = useRecoilValue(fetchtTypingResultSelector(id as string));
  const [typingResult, setTypingResult] = useRecoilState(typingResultState(id as string));

  useEffect(() => {
    setTypingResult(fetchTyping);
  }, []);

  return (
    <TableContainer>
      <Table sx={{ minWidth: 360 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              最新のタイピング結果
            </TableCell>
          </TableRow>
          <TableRow sx={{ border: "1px solid #eee" }}>
            <StyledTableCell align="right">タイピング速度(wpm)</StyledTableCell>
            <StyledTableCell align="right">ミスタイプ回数</StyledTableCell>
            <StyledTableCell align="right">スコア</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {typingResult.typing && (
            <TableRow sx={{ border: "1px solid #eee" }}>
              <TableCell align="right">{typingResult.typing[0].attributes.type_speed}</TableCell>
              <TableCell align="right">{typingResult.typing[0].attributes.miss_type}</TableCell>
              <TableCell align="right">{typingResult.typing[0].attributes.score}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
});

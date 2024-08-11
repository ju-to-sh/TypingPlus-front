import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import { useRecoilState, useRecoilValue } from "recoil";
import { FC, memo, useEffect } from "react";
import { fetchtTypingResultSelector, typingResultState } from "../../../store/typingInfoState";
import { useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { LineChart } from "./LineChart";
import { useApi } from "../../../hooks/useApi";

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

  const refreshData = async () => {
    try {
      const newData = await useApi.get(`/users/${id}/study_records`);
      setTypingResult(newData.data);
    } catch (error) {
      console.error("Error refreshing data:", error);
    }
  };
  useEffect(() => {
    setTypingResult(fetchTyping);
    refreshData();
  }, [fetchTyping, setTypingResult]);

  return (
    <>
      {typingResult.typing?.length === 0 ? (
        <Typography>タイピング実績がありません</Typography>
      ) : (
        <>
          <Box
            sx={{
              width: {
                xs: "400px",
                sm: "500px",
                md: "800px",
              },
              margin: " 0 auto",
              height: { xs: "200px", sm: "300px" },
            }}
          >
            <LineChart data={typingResult.typing} />
          </Box>
          <TableContainer sx={{ display: "flex", justifyContent: "center" }}>
            <Table sx={{ minWidth: 360, maxWidth: 500 }} aria-label="spanning table">
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
                    <TableCell align="right">{typingResult.typing.slice(-1)[0].attributes.type_speed}</TableCell>
                    <TableCell align="right">{typingResult.typing.slice(-1)[0].attributes.miss_type}</TableCell>
                    <TableCell align="right">{typingResult.typing.slice(-1)[0].attributes.score}</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </>
  );
});

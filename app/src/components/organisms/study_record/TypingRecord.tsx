import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import { FC, memo } from "react";
import { styled } from "@mui/material/styles";
import { LineChart } from "./LineChart";
import { StudyRecord } from "../../../types/api/studyRecord";

type Props = {
  typingResult: StudyRecord;
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#eee",
    color: "#333",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const TypingRecord: FC<Props> = memo((props) => {
  const { typingResult } = props;

  return (
    <>
      {typingResult.typing?.length === 0 ? (
        <>
          <Box minWidth="600px"></Box>
          <Typography textAlign="center">タイピング実績がありません</Typography>
        </>
      ) : (
        <>
          <Box
            sx={{
              width: {
                xs: "330px",
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
            <Table sx={{ minWidth: 300, maxWidth: 500 }} aria-label="spanning table">
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

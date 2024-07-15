import { FC, memo, useEffect, useState } from "react";
import { Alert, Snackbar, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { UserInfo } from "../user/UserInfo";
import { userInfoState } from "../../../store/userInfoState";
import { useRecoilState } from "recoil";
import { useParams } from "react-router-dom";
import { useApi } from "../../../hooks/useApi";
import { User } from "../../../types/api/user";

export const UserInfoTable: FC = memo(() => {
  const { id } = useParams();
  const [user, setUser] = useRecoilState(userInfoState(id as string));
  const [open, setOpen] = useState(false);

  const handleClose = (reason: any) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const fetchData = async () => {
    const response = await useApi.get<User>(`/users/${id}`);
    setUser(response.data.data.attributes);
  };
  
  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert onClose={handleClose} severity="success">
          変更が完了しました
        </Alert>
      </Snackbar>
      <Table sx={{ maxWidth: 600, minWidth: 360 }}>
        <TableHead>
          <TableRow>
            <TableCell>ユーザー情報</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ border: "1px solid rgba(224, 224, 224, 1)" }}>
          <TableRow>
            <TableCell sx={{ paddingTop: "0px", paddingBottom: "0px" }}>
              <UserInfo title={"ニックネーム"} value={user.nickname} messageFlag={setOpen} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ paddingTop: "0px", paddingBottom: "0px" }}>
              <UserInfo title={"メールアドレス"} value={user.email} messageFlag={setOpen} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ paddingTop: "0px", paddingBottom: "0px" }}>
              {user.avatar.url ? (
                <UserInfo title={"プロフィール画像"} value={user.avatar.url.slice(user.avatar.url.lastIndexOf("/") + 1)} messageFlag={setOpen} />
              ) : (
                <UserInfo title={"プロフィール画像"} value={user.avatar.url} messageFlag={setOpen} />
              )}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
});

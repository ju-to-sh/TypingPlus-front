import { FC, memo } from "react";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { UserInfo } from "../user/UserInfo";
import { userInfoState } from "../../../store/userInfoState";
import { useRecoilValue } from "recoil";
import { UserData } from "../../../types/api/user";

export const UserInfoTable: FC = memo(() => {
  const user = useRecoilValue(userInfoState);
  return (
    <Table sx={{ maxWidth: 600, minWidth: 360 }}>
      <TableHead>
        <TableRow>
          <TableCell>ユーザー情報</TableCell>
        </TableRow>
      </TableHead>
      <TableBody sx={{ border: "1px solid rgba(224, 224, 224, 1)" }}>
        <TableRow>
          <TableCell sx={{ paddingTop: "0px", paddingBottom: "0px" }}>
            <UserInfo title={'ニックネーム'} value={user.attributes.nickname} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell sx={{ paddingTop: "0px", paddingBottom: "0px" }}>
            <UserInfo title={'メールアドレス'} value={user.attributes.email}/>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell sx={{ paddingTop: "0px", paddingBottom: "0px" }}>
            <UserInfo title={'プロフィール画像'} value={user.attributes.avatar}/>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
});

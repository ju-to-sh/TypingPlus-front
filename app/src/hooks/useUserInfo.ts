import { useCallback, useState } from "react";
import { useApi } from "./useApi";
import { User, UserData } from "../types/api/user";

export const useUserInfo = () => {
  const [user, setUser] = useState<UserData>();

  const getUserInfo = useCallback(() => {
    useApi
      .get<User>("/users/1")
      .then((res) => {
        setUser(res.data.data);
      })
      .catch(() => {});
  }, []);

  return { getUserInfo, user };
};

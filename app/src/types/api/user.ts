export type UserAttributes = {
  nickname: string;
  email: string;
  avatar: string;
};

export type UserData = {
  id: string;
  type: "user";
  attributes: UserAttributes;
};

export type Users = {
  data: UserData[];
};

export type User = {
  data: UserData;
};

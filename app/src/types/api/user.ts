export type UserAttributes = {
  nickname: string;
  email: string;
  avatar?: { url: string | null };
};

export type UserData = {
  id: string;
  type: string;
  attributes: UserAttributes;
};

export type Users = {
  data: UserData[];
};

export type User = {
  data: UserData;
};

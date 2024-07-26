import { UserData } from './user';

export type RakingInfo = {
  data: Array<RankingData>,
  included: Array<UserData>
}

export type RankingData = {
  id: string;
  type: string;
  attributes: RankingAttributes;
  relationships: RankingUserData
};

export type RankingUserData = {
  user: User;
};

export type User = {
  data: UserIdData;
};

export type UserIdData = {
  id: string;
  type: string;
};

export type RankingAttributes = {
  type_speed: number;
  miss_type: number;
  score: number;
};

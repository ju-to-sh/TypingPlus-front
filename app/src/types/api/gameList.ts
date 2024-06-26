export type GameListAttributes = {
  title: string;
  content: string;
  game_type: number | string;
  level: number;
  category: number | string;
};

export type GameListData = {
  id: string;
  type: string;
  attributes: GameListAttributes;
};

export type GameLists = {
  data: GameListData[];
};

export type GameList = {
  data: GameListData;
};

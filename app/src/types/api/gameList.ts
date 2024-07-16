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
  data: Array<GameListsData>;
};

export type GameList = {
  data: GameListData;
};

export type GameListsData = {
  id: string;
  type: string;
  attributes: GameListAttributes;
  relationships: Relationships;
};

export type Relationships = {
  quizzes: Array<Object>
}

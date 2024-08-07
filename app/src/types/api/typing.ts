export type TypingAttributes = {
  content: string;
};

export type TypingData = {
  id: string;
  type: string;
  attributes: TypingAttributes;
};

export type Typing = {
  data: TypingData;
};

export type TypingInfo = {
  isMissType: boolean;
  missCount: number;
};

export type TypingResult = {
  typing: Array<TypingResultData>;
};

export type TypingResultData = {
  id: string;
  type: string;
  attributes: TypingResultAttributes;
  relationships: Object
};

export type TypingResultAttributes = {
  type_speed: number;
  miss_type: number;
  score: number;
  created_at: string;
};

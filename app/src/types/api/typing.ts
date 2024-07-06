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

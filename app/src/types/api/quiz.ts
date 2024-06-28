export type QuizAttributes = {
  content: string;
  quiz_choices: Array<QuizChoiceAttributes>
};

export type QuizData = {
  id: string;
  type: string;
  attributes: QuizAttributes;
  relationships: QuizRelationships;
};

export type Quizzes = {
  data: QuizData[];
};

export type Quiz = {
  data: QuizData;
  included: QuizChoiceData;
};

export type TypeData = {
  id: string;
  type: string;
};

export type QuizChoices = {
  data: TypeData[];
};

export type QuizRelationships = {
  quiz_choices: QuizChoices;
};

export type QuizChoiceData = {
  id: string;
  type: string;
  attributes: QuizChoiceAttributes;
  relationships: QuizChoiceRelationships;
};

export type QuizChoiceAttributes = {
  content: string;
  is_correct: string;
};

export type QuizChoiceRelationships = {
  quiz: QuizChoiceRelationshipsData;
};

export type QuizChoiceRelationshipsData = {
  data: TypeData;
};

export enum TodoStatus {
  active,
  complete,
}

export interface TodoItem {
  description: string;
  status: TodoStatus;
}

export interface TodoInput {
  text: string | null;
  error: boolean;
}

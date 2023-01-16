

export interface ITodo {
  id: string;
  description: string;
  status: boolean;
}

export type TodoContextType = {
  todos: ITodo[];
  createTodo: (todo: ITodo) => void;
  updateTodo: (todo: ITodo) => void;
  deleteTodo: (todo: Partial<ITodo>) => void;
  resetTodo: () => void;
};

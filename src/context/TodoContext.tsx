import { createContext, PropsWithChildren, useContext } from 'react';
import { TodoContextType } from '../../types';

export const TodoContextProvider = ({
  defaultValues,
  children,
}: PropsWithChildren<{ defaultValues: TodoContextType }>) => {
  return (
    <TodoContext.Provider value={defaultValues}>
      {children}
    </TodoContext.Provider>
  );
};

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  createTodo: (todo) => {
  },
  updateTodo: (todo) => {
  },
  deleteTodo: (todo) => {
  },
  resetTodo: () => {
  },
});

// custom hook
export const useTodoCtx = () => useContext(TodoContext);

import { useState } from 'react';
import { ITodo } from 'types/Todo.types';

export const useTodoState = (defaultValues: ITodo[]): { updateTodo: (todoUpdated: ITodo) => void; resetTodo: () => void; todos: ITodo[]; deleteTodo: (todo: Partial<ITodo>) => void; createTodo: (todo: ITodo) => void } => {
  const [todos, setTodos] = useState(defaultValues);

  return {
    todos,
    createTodo: (todo: ITodo) => setTodos([...todos, todo]),
    updateTodo: (todoUpdated: ITodo): void => {
      const newTodos = todos.map((todo) => {
        if (todo.id === todoUpdated.id) {
          return todoUpdated;
        }
        return todo;
      });
      setTodos(newTodos);
    },
    deleteTodo: (todo: Partial<ITodo>): void => {
      const newTodo = todos.filter(({ id }) => id !== todo.id);
      setTodos(newTodo);
    },
    resetTodo: () => setTodos([]),
  };
};

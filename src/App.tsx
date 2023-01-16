import { TodoContextProvider } from './context/TodoContext';
import { useTodoState } from './hooks/useTodoState';
import { AddTodo, TodoList } from './components';
import { uniqueId } from './helpers';
import { ITodo } from 'types/Todo.types';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';

const Root = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const Title = styled(Typography)`
  margin-bottom: 20px;
`;
const PaperStyled = styled(Paper)`
  min-width: 400px;
  padding: 1em;
`;

const defaultValues: ITodo[] = [
  { id: uniqueId(), description: 'My todo 1', status: false },
  { id: uniqueId(), description: 'My todo 2', status: true },
];

const App = () => {
  const todoState = useTodoState(defaultValues);

  return (
    <Root>
        <TodoContextProvider defaultValues={todoState}>
          <PaperStyled elevation={3} square>
            <Title align={'center'} variant={'h4'}> My Todo 😊 </Title>
            <AddTodo />
            <TodoList />
          </PaperStyled>
        </TodoContextProvider>
    </Root>
  );
};

export default App;

import Grid from '@mui/material/Grid';

import Todo from './Todo';
import { useTodoCtx } from '../context/TodoContext';
import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';

const TodoContainer = styled(Grid)`
  margin: 1em;
`;
const Status = styled(Grid)`
  padding: 1em;
`;
export const TodoList = () => {
  const { todos } = useTodoCtx();
  const todoCompleted = todos.filter(todo => todo.status).length;
  const count = todos.length;
  const toggleColor = () => todoCompleted === 0 ? 'red' :
    (todoCompleted === count ? 'blue' : 'grey');

  return (
    <TodoContainer
      container
      direction={'column'}
      alignItems={'flex-start'}
    >
      {todos.length === 0 ?
        <p> Empty list 😱 </p> :
        <>
          {todos.map(todo => (<Todo key={todo.id} {...todo} />))}
          <Status container justifyContent={'flex-end'}>
            <Typography color={toggleColor}>
              Status : {todoCompleted} / {count}
            </Typography>
          </Status>
        </>
      }
    </TodoContainer>
  );
};

export default TodoList;

import { ITodo } from 'types/Todo.types';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTodoCtx } from '../context/TodoContext';
import IconButton from '@mui/material/IconButton';
import { Fragment, useState } from 'react';
import EditTodo from './EditTodo';
import InputAdornment from '@mui/material/InputAdornment';
import SendIcon from '@mui/icons-material/Send';

const Description: any = styled(Typography)`
  margin-bottom: 0;
`;
export const Todo = ({ id, description, status }: ITodo) => {
  const [isEdit, setIsEdit] = useState(false);
  const { updateTodo, deleteTodo } = useTodoCtx();
  const handleDeleteTodo = () => {
    console.log('ici');
    deleteTodo({ id });
  };
  const [newDescription, setNewDescription] = useState(description);
  const handleChangeEdit = () => setIsEdit(value => !value);
  const handleSubmit = () => {
    updateTodo({ id, description: newDescription, status });
    setIsEdit(v => !v);
  };
  return (!isEdit ?
      <Grid container justifyContent={'space-between'} alignItems={'center'}>
        <Checkbox
          checked={status}
          inputProps={{
            'aria-labelledby': id,
          }}
          onClick={() => updateTodo({ id, description, status: !status })}
        />
        <Description
          variant="body1"
          sx={{
            textDecorationLine: status && 'line-through',
          }}
          onClick={handleChangeEdit}
        >
          {description}
        </Description>
        <IconButton
          aria-label="delete"
          color="primary"
          onClick={handleDeleteTodo}
        >
          <DeleteIcon />
        </IconButton>
      </Grid>
      :
      <Fragment>
        <EditTodo
          defaultValue={newDescription}
          updateDefaultValue={setNewDescription}
          extraProps={{
            onKeyDown: (e: KeyboardEvent) => {
              if (newDescription.length > 0 && e.key === 'Enter') {
                handleSubmit();
              }
            },
            InputProps: {
              endAdornment: <InputAdornment position={'end'}>
                <IconButton
                  onClick={handleSubmit}
                  disabled={!description}
                >
                  <SendIcon />
                </IconButton>
              </InputAdornment>,
            },
          }} />
      </Fragment>
  );
};

export default Todo;

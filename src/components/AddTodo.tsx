import { MouseEvent, useState } from 'react';
import { useTodoCtx } from '../context/TodoContext';
import { uniqueId } from '../helpers';
import SendIcon from '@mui/icons-material/Send';
import EditTodo from './EditTodo';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

export const AddTodo = () => {
  const { createTodo } = useTodoCtx();
  const [description, setDescription] = useState<string>('');
  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (description) {
      createTodo({ id: uniqueId(), description, status: false });
    }
    setDescription('');
  };
  return (
    <EditTodo
      defaultValue={description}
      updateDefaultValue={setDescription}
      extraProps={{
        InputProps: {
          endAdornment: <InputAdornment position={'end'}>
            <IconButton onClick={handleSubmit} disabled={!description}>
              <SendIcon />
            </IconButton>
          </InputAdornment>,
        },
      }}
    />
  );
};

export default AddTodo;

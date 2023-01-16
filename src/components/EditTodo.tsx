import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';

const EditTodo = ({
  defaultValue,
  updateDefaultValue,
  extraProps,
}: { defaultValue: string, updateDefaultValue?: Function, extraProps?: any }) => {
  const [value, setValue] = useState<string>(defaultValue);

  useEffect(() => {
    updateDefaultValue &&
    updateDefaultValue(value);
  }, [updateDefaultValue, value]);

  useEffect(() => {
    if (!defaultValue) {
      setValue('');
    }
  }, [defaultValue]);

  return (
    <TextField
      id="input-description-todo"
      label="Todo Description"
      variant="standard"
      fullWidth
      type={'text'}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      {...extraProps}
    />
  );
};

export default EditTodo;

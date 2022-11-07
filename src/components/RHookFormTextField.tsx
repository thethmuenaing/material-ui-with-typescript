import React, { FC } from 'react';
import { TextField } from '@material-ui/core';
import { useFormContext } from 'react-hook-form';

interface IReactHookFormTextFieldProps {
  label: string;
  name: string;
}


const ReactHookFormTextField: FC<IReactHookFormTextFieldProps> = ({ label, name }: IReactHookFormTextFieldProps ) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <TextField
      label={label}
      variant="outlined"
      error={!!errors[name]}
      fullWidth
      // helperText={errors[name]?.message ?? ''}
      margin="dense"
      {...register(name)}
    />
  );
};

export default ReactHookFormTextField;
import React, { FC } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Grid } from '@material-ui/core';
// import { Button, Grid,TextField } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { SubmitHandler, FormProvider, useForm } from 'react-hook-form';
import { SchemaOf, string, object } from 'yup';
import ReactHookFormTextField from '../components/RHookFormTextField';
// import ReactHookFormTextFieldContainer from '../components/RHookFormTextFieldContainer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      minHeight: '100vh',
    },
  })
);

interface IFormProps {
  name: string;
  message: string;
}

const formSchema: SchemaOf<IFormProps> = object({
  name: string().required('Name is required'),
  message: string().required('Message is required'),
});


const FormProviderPage: FC = () => {
  const classes = useStyles();

  const methods = useForm<IFormProps>({
    resolver: yupResolver(formSchema),
  });

  const submitRecipe: SubmitHandler<IFormProps> = async (data: IFormProps) => {
    console.log('data submitted', data);
  };

  return (
      <Grid container className={classes.root}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(submitRecipe)}>
            <Grid item>
              {/* <TextField 
								label ="Name"
								variant='outlined'
								error={!!methods.formState.errors.name}
								helperText={methods.formState.errors.name?.message ?? ""}
								fullWidth
								margin='dense'
								{...methods.register("name")}
							/> */}
							<ReactHookFormTextField label="Name" name="name" />
							{/* <ReactHookFormTextFieldContainer label="Name" name="name" /> */}
            </Grid>
            <Grid item>
              {/* <TextField 
								label="Message"
								variant='outlined'
								error={!!methods.formState.errors.message}
								helperText={methods.formState.errors.message?.message ?? ''}
								fullWidth
								margin='dense'
								{...methods.register("message")}
							/> */}
							<ReactHookFormTextField label="Message" name="message" />
							{/* <ReactHookFormTextFieldContainer label="Message" name="message" /> */}
            </Grid>
            <Grid item>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </form>
        </FormProvider>
      </Grid>
  );
};

export default FormProviderPage;
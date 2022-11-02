import {FC} from 'react'
import { useFormContext, Controller } from 'react-hook-form'
import TextField from "@mui/material/TextField"

interface IFormInputs {
	email: string;
	password: string;
}

const SubComponent1: FC = () => {
	const {control , formState:{errors}} = useFormContext<IFormInputs>()
	return (
		<>
			<Controller
				name="email"
				control={control}
				defaultValue="example@leo.test.com"
				render={({field})=>(
					<TextField {...field}
						type="email" 
						label="Email" 
						variant='outlined' 
						error={!!errors.email}
						helperText = {errors.email ? errors.email?.message : ""}
					/>
				)}
			/>
			<br />
			<br />
			<Controller
				name="password"
				control={control}
				defaultValue=""
				render={({field})=>(
					<TextField {...field} 
						type="password"
						label="Password" 
						variant='outlined' 
						error={!!errors.password}
						helperText = {errors.email ? errors.email?.message : ""}
					/>
				)}
			/>
		</>
	)
}

export default SubComponent1;
import {FC} from 'react'
import {useFormContext, Controller} from "react-hook-form"
import TextField from "@mui/material/TextField"

interface IFormInput {
	email: string
	password: string
}

const InputText1: FC = () => {
	const {control, formState:{errors}} = useFormContext<IFormInput>()
	return (
		<div>
			<Controller name="email" control={control} defaultValue="example@text.com"
				render={({field}) => (
					<TextField {...field}
						type="email" 
						label="Email" 
						variant='outlined'
						error={!!errors.email}
						helperText={errors.email ? errors.email?.message : ""}
					/>
				)}
			/>
			<br />
			<br />
			<Controller name="password" control={control} defaultValue=""
				render={({field}) => (
					<TextField {...field} 
						type="password"
						label="Password" 
						variant='outlined' 
						error={!!errors.password}
						helperText={errors.password ? errors.password?.message : ""}
					/>
				)}
			/>
			
		</div>
	)
}

export default InputText1
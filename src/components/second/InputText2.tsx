import {FC} from 'react'
import {useFormContext, Controller} from "react-hook-form"
import TextField from "@mui/material/TextField"

interface IFormInput {
	firstName: string
	lastName: string
}
const InputText2: FC = () => {
	const {control, formState:{errors}} = useFormContext<IFormInput>()
	return (
		<div>
			<Controller name="firstName" control={control} defaultValue=""
				render={({field}) => (
					<TextField {...field}
						label="First Name" 
						variant='outlined'
						error={!!errors?.firstName}
						helperText={errors?.firstName ? errors?.firstName?.message : ""}
					/>
				)}
			/>
			<br />
			<br />
			<Controller name="lastName" control={control} defaultValue=""
				render={({field}) => (
					<TextField {...field} 
						label="Last Name" 
						variant='outlined' 
						error={!!errors?.lastName}
						helperText={errors?.lastName ? errors?.lastName?.message : ""}
					/>
				)}
			/>
			<br />
		</div>
	)
}

export default InputText2

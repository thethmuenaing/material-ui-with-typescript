import {FC} from 'react'
import { useFormContext, Controller } from 'react-hook-form'
import {TextField} from "@mui/material"

interface IFormInputs {
	firstName: string;
	lastName: string;
}
const SubComponent2: FC = () => {
	const {control, formState:{errors}} = useFormContext<IFormInputs>()
	return (
		<>
			<Controller
				name="firstName"
				control={control}
				defaultValue="leo"
				render={({field})=>(
					<TextField 
						{...field}
						label="First Name" 
						variant='outlined' 
						error={!!errors.firstName}
					/>
				)}
			/>
			<br />
			<br />
			<Controller
				name="lastName"
				control={control}
				defaultValue=""
				render={({field})=>(
					<TextField {...field} 
						label="Last Name" 
						variant='outlined' 
						error={!!errors.lastName}
					/>
				)}
			/>
		</>
	)
}

export default SubComponent2;
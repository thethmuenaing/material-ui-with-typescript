import {FC} from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import {useForm, SubmitHandler, FormProvider } from "react-hook-form"

import InputText1 from '../components/second/InputText1'
import InputText2 from '../components/second/InputText2'


interface IForminput {
	email: string
	password: string
	firstName: string
	lastName: string
}

const schema = yup.object().shape({
	email: yup.string().email().required(),
	password: yup.string().min(4).max(10).required(),
	firstName: yup.string().required(),
	lastName: yup.string().required(),
})

const MainComponent: FC = () => {

		const methods = useForm<IForminput>({
		resolver: yupResolver(schema)
	})

	console.log("watch variable email", methods.watch("email"))

	const formSubmitHandler: SubmitHandler<IForminput> = (data: IForminput) => {
		console.log("form data is ", data)
	}


	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(formSubmitHandler)}>
				<InputText1/>
				<br />
				<InputText2/>
				<br />
				<input type="submit" />
			</form>
		</FormProvider>
	)
}

export default MainComponent
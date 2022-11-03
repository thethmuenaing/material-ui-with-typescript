import {FC} from 'react'
import {useForm , SubmitHandler, FormProvider } from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import SubComponent1 from '../components/first/SubComponent1';
import SubComponent2 from '../components/first/SubComponent2';


interface IFormInputs {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
}

const schema = yup.object().shape({
	email: yup.string().email().required(),
	password: yup.string().min(4).max(20).required(),
	firstName: yup.string().required(),
	lastName: yup.string().required(),
})

const Container: FC = () => {
	const methods = useForm<IFormInputs>({
		resolver: yupResolver(schema),
	});

	console.log("watch variable email ", methods.watch("email"))
	const formSubmitHandler: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
		console.log("form data is", data)
	}
	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(formSubmitHandler)}>
				<SubComponent1 />
				<br />
				<br />
				<SubComponent2 />
				<br />
				<br />
				<input type="submit" />
			</form>
		</FormProvider>
	)
}

export default Container;
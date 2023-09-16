import React from "react";
import { useForm } from "react-hook-form";

import AuthForm from "../AuthForm/AuthForm";
import EmailInput from "../Inputs/EmailInput";
import PasswordInput from "../Inputs/PasswordInput";

export default function Login({ onLogin }) {
	
  const {
    register,
		handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

	const submitData = (data) => {
		onLogin(data);
	}

  return (
			<AuthForm 
				title={'Рады видеть!'}
				buttonText={'Войти'}
				navLink={'/sign-up'}
				question={'Ещё не зарегистрированы?'}
				navLinkTitle={'Регистрация'}
				onSubmit={handleSubmit(submitData)}
				isValid={isValid}
			>

				<EmailInput
					type={"email"}
					title={"email"}
					label={"E-mail"}
					placeholder={"E-mail"}
					register={register}
					errors={errors}
				/>

				<PasswordInput
					type={"password"}
					title={"password"}
					label={"Пароль"}
					placeholder={"Пароль"}
					register={register}
					errors={errors}
				/>
    </AuthForm>
  );
}

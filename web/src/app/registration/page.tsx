"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { getMailValidation } from "@/helpers/validators";
import Input from "@/components/Inputs/TextInput";
import { signUp, signUpApi } from "@/lib/strapi/auth";
import { signIn, useSession } from "next-auth/react";

type RegistrationFormData = {
	username: string;
	firstname: string;
	lastname: string;
	email: string;
	password: string;
	passwordConfirm: string;
};

export default function Registration() {
	const { data: session } = useSession();
	const [formData, setFormData] = useState<RegistrationFormData>({
		username: "",
		firstname: "",
		lastname: "",
		email: "",
		password: "",
		passwordConfirm: "",
	});

	const [errorMessage, setErrorMessage] = useState("");

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
	};

	const handlePwValidation = (): string | undefined => {
		if (formData.passwordConfirm !== formData.password) return "Passwords should match";
		return undefined;
	};

	return (
		<div>
			<h1 className="h3">My Account</h1>
			<div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-8">
				<form
					className="flex flex-col items-stretch gap-4"
					onSubmit={async (e: FormEvent<HTMLFormElement>) => {
						e.preventDefault();
						console.log("submit");
						console.log("err");
						const registerresp = await signUp(formData.username, formData.email, formData.password);
						if (registerresp.error) {
							console.log(registerresp.error.message);
							setErrorMessage(registerresp.error.message);
							return;
						}
						console.log(registerresp);
						const res = await signIn("credentials", { email: formData.email, password: formData.password, redirect: false });
						console.log(res);
					}}
				>
					<Input type="text" label="Username" name="username" id="username" value={formData.username} onChange={handleInputChange} required />
					{/* <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-3">
						<Input type="text" label="First Name" name="firstname" id="firstname" value={formData.firstname} onChange={handleInputChange} required />
						<Input type="text" label="Last Name" name="lastname" id="lastname" value={formData.lastname} onChange={handleInputChange} required />
					</div> */}
					<Input
						type="text"
						label="Email Address"
						name="email"
						id="email"
						value={formData.email}
						onChange={handleInputChange}
						required
						validate={value => getMailValidation(value)}
					/>
					<Input type="password" label="Password" name="password" id="password" value={formData.password} onChange={handleInputChange} required />
					<Input
						type="password"
						label="Confirm Password"
						name="passwordConfirm"
						id="passwordConfirm"
						value={formData.passwordConfirm}
						onChange={handleInputChange}
						required
						validate={handlePwValidation}
					/>
					<input className="btn ml-auto hover:cursor-pointer" type="submit" value="Register" />
				</form>
				<div>
					{errorMessage != "" && <h2 className="text-secondary">{errorMessage}</h2>}
					<h2 className="text-secondary">Please note</h2>
					{session?.user && <h2 className="text-secondary">{session.user.name}</h2>}
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel est adipisci quas, aperiam voluptas, omnis tempora blanditiis quae fuga eum ullam
						commodi a perspiciatis provident pariatur sunt excepturi doloremque! Commodi!
					</p>
				</div>
			</div>
		</div>
	);
}

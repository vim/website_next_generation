"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { getMailValidation } from "@/helpers/validators";
import Input from "@/components/Inputs/TextInput";

type LoginFormData = {
	email: string;
	password: string;
};

export default function MyAccount() {
	const { data: session } = useSession();
	const [formData, setFormData] = useState<LoginFormData>({
		email: "",
		password: "",
	});

	const [errorMessage, setErrorMessage] = useState("");

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
	};

	return (
		<div>
			<h1 className="h3">My Account</h1>
			<div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-8">
				{session && <button onClick={() => signOut({ redirect: false })}>Sign Out</button>}
				{session?.user == null && (
					<form
						className="flex flex-col items-stretch gap-4"
						onSubmit={async (e: FormEvent<HTMLFormElement>) => {
							e.preventDefault();
							try {
								const res = await signIn("credentials", { email: formData.email, password: formData.password, redirect: false });
								if (res?.error) throw res.error;
								else setErrorMessage("");
							} catch {
								setErrorMessage("Invalid email or password");
							}
						}}
					>
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
						<input className="btn ml-auto hover:cursor-pointer" type="submit" value="Sign In" />
					</form>
				)}
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

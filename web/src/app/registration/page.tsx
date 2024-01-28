'use client';
import { ChangeEvent, useState } from 'react';
import Input from '@/components/Inputs/TextInput';

type RegistrationFormData = {
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    passwordConfirm: string;
};

export default function Registration() {
    const [formData, setFormData] = useState<RegistrationFormData>({
        username: '',
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        passwordConfirm: '',
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
    return (
        <form className="flex flex-col items-stretch gap-4">
            <Input
                type="text"
                label="Username"
                name="username"
                id="username"
                value={formData.username}
                onChange={handleInputChange}
                required
            />
            <div className="flex justify-between gap-5">
                <div className="flex-2/3">
                    <Input
                        type="text"
                        label="First Name"
                        name="firstname"
                        id="firstname"
                        value={formData.firstname}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="flex-1">
                    <Input
                        type="text"
                        label="Last Name"
                        name="lastname"
                        id="lastname"
                        value={formData.lastname}
                        onChange={handleInputChange}
                        required
                    />
                </div>
            </div>
            <Input
                type="text"
                label="Email Address"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                required
            />
            <Input
                type="password"
                label="Password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleInputChange}
                required
            />
            <Input
                type="password"
                label="Confirm Password"
                name="passwordConfirm"
                id="passwordConfirm"
                value={formData.passwordConfirm}
                onChange={handleInputChange}
                required
            />
            <input className="ml-auto" type="submit" value="Register" />
        </form>
    );
}

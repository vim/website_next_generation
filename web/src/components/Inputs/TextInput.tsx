'use client';
import { useState } from 'react';
import { isRequiredValidator } from '@/helpers/validators';

type InputProps = {
    type: string;
    label?: string;
    id?: string;
    required?: boolean;
    placeholder?: string;
    value: string;
    name: string;
    onChange: (value: string) => void;
};

export default function Input({ type, label, id, required, placeholder, value, name, onChange }: InputProps) {
    const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        onChange(value);
    };

    const handleBlur = () => {
        if (required) {
            const error = isRequiredValidator(value);
            setErrorMessage(error);
        }
    };

    return (
        <div>
            {label && <label htmlFor={id}>{label}</label>}
            <input
                className="border-[3px] border-solid rounded-lg border-gray-1 py-2 px-5 text-white bg-gray-2 outline-none focus:border-secondary focus-visible:border-secondary active:border-secondary"
                type={type}
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={handleChange}
                onBlur={handleBlur}
                required={required}
            />
            {errorMessage && <span>{errorMessage}</span>}
        </div>
    );
}

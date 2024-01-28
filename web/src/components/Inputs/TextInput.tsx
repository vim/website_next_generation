import { CSSProperties, ChangeEvent, useState } from 'react';
import { isRequiredValidator } from '@/helpers/validators';

type InputProps = {
    type: 'text' | 'number' | 'email' | 'password';
    label?: string;
    id: string;
    required?: boolean;
    placeholder?: string;
    value: string;
    name: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({ type, label, id, required, placeholder, value, name, onChange }: InputProps) {
    const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

    const handleBlur = () => {
        if (required) {
            const error = isRequiredValidator(value);
            setErrorMessage(error);
        }
    };

    return (
        <div className="relative flex flex-col">
            {label && (
                <label className={`mb-1 ${errorMessage && 'text-red-800'}`} htmlFor={id}>
                    {`${label}*`}
                </label>
            )}
            <input
                className="border-[3px] border-solid rounded-lg border-gray-1 py-2 px-5 text-white bg-gray-2 outline-none focus:border-secondary focus-visible:border-secondary active:border-secondary"
                style={errorMessage ? ({ borderColor: 'red' } as CSSProperties) : undefined}
                type={type}
                value={value}
                name={name}
                id={id}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={handleBlur}
                required={required}
            />
            <span className="block min-h-[25px] text-red-800">{errorMessage}</span>
        </div>
    );
}

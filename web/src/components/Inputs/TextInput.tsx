type InputProps = {
    type: string;
    label?: string;
    id?: string;
    required?: boolean;
    hasError?: boolean;
    placeholder?: string;
    value: string;
    name: string;
    onChange: (value: string) => void;
};

export default function Input({ type, label, id, required, hasError, placeholder, value, name, onChange }: InputProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        onChange(value);
    };
    return (
        <div>
            {label && <label htmlFor={id}>{label}</label>}
            <input
                className="border-[1px] border-solid border-gray-1"
                type={type}
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={handleChange}
                required={required}
            />
            {hasError}
        </div>
    );
}

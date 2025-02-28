interface InputProps {
    type: string;
    label: string;
    placeholder: string;
    className?: string;
    name?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}

export default function Input({
    type,
    label,
    placeholder,
    className = '',
    name,
    value,
    onChange,
    required
}: InputProps) {
    return (
        <div className="space-y-2">
            <label className="block text-black text-xs tracking-wider">{label}</label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                className={`w-full px-4 py-2 border border-gray-300 rounded-md ${className}`}
                value={value}
                onChange={onChange}
                required={required}
            />
        </div>
    );
} 
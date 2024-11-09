// Input.tsx
import React from 'react';

type InputProps = {
    id: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: 'text' | 'password' | 'email' | 'number';
    className?: string;
    required?: boolean;
};

const Input: React.FC<InputProps> = ({
    id,
    value,
    onChange,
    placeholder = '',
    type = 'text',
    className = '',
    required = false,
}) => {
    return (
        <input
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
            required={required}
        />
    );
};

export default Input;

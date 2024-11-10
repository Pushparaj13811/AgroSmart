// Input.tsx
import React from 'react';

type InputProps = {
    id: string;
    name: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: 'text' | 'password' | 'email' | 'number' | 'date';
    className?: string;
    required?: boolean;
    min?: number | string;
    max?: number | string;
};

const Input: React.FC<InputProps> = ({
    id,
    name,
    value,
    onChange,
    placeholder = '',
    type = 'text',
    className = '',
    required = false,
    min,
    max,
}) => {
    return (
        <input
            id={id}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${className}`}
            required={required}
            min={min}
            max={max}
        />
    );
};

export default Input;

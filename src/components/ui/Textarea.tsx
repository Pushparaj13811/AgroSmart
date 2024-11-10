// Textarea.tsx
import React from 'react';

type TextareaProps = {
    id: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    rows?: number;
    className?: string;
};

const Textarea: React.FC<TextareaProps> = ({
    id,
    name,
    value,
    onChange,
    placeholder = '',
    rows = 4,
    className = '',
}) => {
    return (
        <textarea
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            rows={rows}
            className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${className}`}
        />
    );
};

export default Textarea;

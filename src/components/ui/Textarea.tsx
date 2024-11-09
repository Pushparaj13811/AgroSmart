// Textarea.tsx
import React from 'react';

type TextareaProps = {
    id: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    rows?: number;
    className?: string;
};

const Textarea: React.FC<TextareaProps> = ({
    id,
    value,
    onChange,
    placeholder = '',
    rows = 4,
    className = '',
}) => {
    return (
        <textarea
            id={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            rows={rows}
            className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
        />
    );
};

export default Textarea;

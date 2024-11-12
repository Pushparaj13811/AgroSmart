// Button.tsx
import React from 'react';

type ButtonProps = {
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    onClick?: () => void;
    className?: string;
    children: React.ReactNode;
    variant?: 'default' | 'ghost' | 'outline';
    size?: 'sm' | 'md' | 'lg';
};

const Button: React.FC<ButtonProps> = ({
    type = 'button',
    disabled = false,
    onClick,
    className = '',
    children,
    variant = 'default',
    size = 'md',
}) => {
    let variantClasses = 'bg-blue-500 text-white hover:bg-blue-600';
    if (variant === 'ghost') {
        variantClasses = 'bg-transparent text-blue-500 hover:bg-blue-100';
    } else if (variant === 'outline') {
        variantClasses = 'border border-blue-500 text-blue-500 hover:bg-blue-100';
    }

    let sizeClasses = 'py-2 px-4 text-sm'; // Default size
    if (size === 'md') sizeClasses = 'py-3 px-6 text-base';
    if (size === 'lg') sizeClasses = 'py-4 px-8 text-lg';

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${variantClasses} ${sizeClasses} rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;

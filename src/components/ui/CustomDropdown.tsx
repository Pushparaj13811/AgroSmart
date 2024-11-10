import React, { useState, useRef, useEffect } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';

interface CustomDropdownProps {
    id: string;
    name: string;
    value: string;
    onChange: (value: string) => void;
    options: { value: string; label: string; }[];
    className?: string;
    placeholder?: string;
}

const CustomDropdown = ({
    id,
    name,
    value,
    onChange,
    options,
    className,
    placeholder = "Select an option"
}: CustomDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const selectedOption = options.find(opt => opt.value === value);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "relative w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-left text-sm",
                    "focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500",
                    "hover:bg-gray-50 transition-colors duration-200",
                    "disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                aria-labelledby={id}
            >
                <span className="block truncate">
                    {selectedOption ? selectedOption.label : placeholder}
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronDown
                        className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
                    />
                </span>
            </button>

            {isOpen && (
                <div className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    <div className="flex flex-col">
                        {options.map((option) => (
                            <button
                                key={option.value}
                                name={option.value}
                                type="button"
                                className={cn(
                                    "flex items-center justify-between px-3 py-3",
                                    "hover:bg-green-50 transition-colors duration-200",
                                    option.value === value ? "bg-green-50 text-green-900" : "text-gray-900"
                                )}
                                onClick={() => {
                                    onChange(option.value);
                                    setIsOpen(false);
                                }}
                            >
                                <span className={cn(
                                    "block truncate",
                                    option.value === value ? "font-medium" : "font-normal"
                                )}>
                                    {option.label}
                                </span>
                                {option.value === value && (
                                    <Check className="h-4 w-4 text-green-600" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CustomDropdown;

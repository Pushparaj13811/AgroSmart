const Card: React.FC<{ className?: string; children: React.ReactNode; [key: string]: any }> = ({ className = '', children, ...props }) => {
    return (
        <div
            className={`bg-white rounded-lg border border-gray-200 shadow-sm ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

const CardHeader: React.FC<{ className?: string; children: React.ReactNode; [key: string]: any }> = ({ className = '', children, ...props }) => {
    return (
        <div
            className={`px-6 py-4 ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

const CardContent: React.FC<{ className?: string; children: React.ReactNode; [key: string]: any }> = ({ className = '', children, ...props }) => {
    return (
        <div
            className={`px-6 py-4 ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

const CardTitle: React.FC<{ className?: string; children: React.ReactNode; [key: string]: any }> = ({ className = '', children, ...props }) => {
    return (
        <h3
            className={`text-lg font-semibold text-gray-900 ${className}`}
            {...props}
        >
            {children}
        </h3>
    );
};

const CardDescription: React.FC<{ className?: string; children: React.ReactNode; [key: string]: any }> = ({ className = '', children, ...props }) => {
    return (
        <p
            className={`text-sm text-gray-500 ${className}`}
            {...props}
        >
            {children}
        </p>
    );
};

const CardFooter: React.FC<{ className?: string; children: React.ReactNode; [key: string]: any }> = ({ className = '', children, ...props }) => {
    return (
        <div
            className={`px-6 py-4 bg-gray-50 rounded-b-lg border-t ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

export {
    Card,
    CardHeader,
    CardContent,
    CardTitle,
    CardDescription,
    CardFooter
};
import * as React from "react";
import { cva } from "class-variance-authority";
import { AlertCircle, CheckCircle2, Info, XCircle } from "lucide-react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

const alertVariants = cva(
    "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
    {
        variants: {
            variant: {
                default: "bg-background text-foreground",
                destructive:
                    "border-red-500/50 text-red-600 dark:border-red-500 [&>svg]:text-red-600",
                success:
                    "border-green-500/50 text-green-600 dark:border-green-500 [&>svg]:text-green-600",
                info: "border-blue-500/50 text-blue-600 dark:border-blue-500 [&>svg]:text-blue-600",
                warning:
                    "border-yellow-500/50 text-yellow-600 dark:border-yellow-500 [&>svg]:text-yellow-600",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

const Alert = React.forwardRef<HTMLElement, { className?: string; variant?: string; children: React.ReactNode } & React.RefAttributes<HTMLElement>>(({ className = "", variant, children, ...props }, ref) => {
    const iconMap = {
        default: Info,
        destructive: XCircle,
        success: CheckCircle2,
        info: Info,
        warning: AlertCircle,
    };

    const Icon = iconMap[variant as keyof typeof iconMap || "default"];

    return (
        <div
            ref={ref as React.RefObject<HTMLDivElement>}
            role="alert"
            className={alertVariants({ variant: variant as "destructive" | "default" | "success" | "info" | "warning" | null | undefined || "default", className })}
            {...props}
        >
            <Icon className="h-4 w-4" />
            {children}
        </div>
    );
});
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<HTMLHeadingElement, { className?: string; children?: React.ReactNode } & React.RefAttributes<HTMLHeadingElement>>(({ className = "", children, ...props }, ref) => (
    <h5
        ref={ref}
        className={`mb-1 font-medium leading-none tracking-tight ${className}`}
        {...props}
    >
        {children}
    </h5>
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode } & React.RefAttributes<HTMLDivElement>>(({ className = "", children, ...props }, ref) => (
    <div
        ref={ref}
        className={`text-sm [&_p]:leading-relaxed ${className}`}
        {...props}
    >
        {children}
    </div>
));
AlertDescription.displayName = "AlertDescription";

// AlertDialog Components
const AlertDialog = AlertDialogPrimitive.Root;

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

const AlertDialogPortal = AlertDialogPrimitive.Portal;

const AlertDialogOverlay = React.forwardRef<
    React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
    React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className = "", ...props }, ref) => (
    <AlertDialogPrimitive.Overlay
        className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 ${className}`}
        {...props}
        ref={ref}
    />
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

const AlertDialogContent = React.forwardRef<
    React.ElementRef<typeof AlertDialogPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className = "", ...props }, ref) => (
    <AlertDialogPortal>
        <AlertDialogOverlay />
        <AlertDialogPrimitive.Content
            ref={ref}
            className={`fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg ${className}`}
            {...props}
        />
    </AlertDialogPortal>
));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

const AlertDialogHeader = ({
    className = "",
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={`flex flex-col space-y-2 text-center sm:text-left ${className}`}
        {...props}
    />
);
AlertDialogHeader.displayName = "AlertDialogHeader";

const AlertDialogFooter = ({
    className = "",
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={`flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 ${className}`}
        {...props}
    />
);
AlertDialogFooter.displayName = "AlertDialogFooter";

const AlertDialogTitle = React.forwardRef<
    React.ElementRef<typeof AlertDialogPrimitive.Title>,
    React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className = "", ...props }, ref) => (
    <AlertDialogPrimitive.Title
        ref={ref}
        className={`text-lg font-semibold ${className}`}
        {...props}
    />
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

const AlertDialogDescription = React.forwardRef<
    React.ElementRef<typeof AlertDialogPrimitive.Description>,
    React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className = "", ...props }, ref) => (
    <AlertDialogPrimitive.Description
        ref={ref}
        className={`text-sm text-muted-foreground ${className}`}
        {...props}
    />
));
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;

const AlertDialogAction = React.forwardRef<
    React.ElementRef<typeof AlertDialogPrimitive.Action>,
    React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className = "", ...props }, ref) => (
    <AlertDialogPrimitive.Action
        ref={ref}
        className={`inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${className}`}
        {...props}
    />
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;

const AlertDialogCancel = React.forwardRef<
    React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
    React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className = "", ...props }, ref) => (
    <AlertDialogPrimitive.Cancel
        ref={ref}
        className={`mt-2 inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-semibold ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 sm:mt-0 ${className}`}
        {...props}
    />
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

export {
    Alert,
    AlertTitle,
    AlertDescription,
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogAction,
    AlertDialogCancel,
};
// ProgressBar.tsx
const ProgressBar = ({ value, color = "green" }: { value: number; color?: string }) => (
    <div className="w-full bg-gray-200 rounded-full h-2">
        <div
            className={`bg-${color}-500 h-2 rounded-full transition-all duration-500`}
            style={{ width: `${value}%` }}
        />
    </div>
);

export default ProgressBar;
// TabButton.tsx
import { TabButtonProps } from '../../types/types';

const TabButton = ({ tab, current, icon: Icon, label, onClick }: TabButtonProps & { onClick: (tab: string) => void }) => (
    <button
        onClick={() => onClick(tab)}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${current === tab ? 'bg-green-100 text-green-800 font-medium' : 'hover:bg-green-50 text-gray-600'
            }`}
    >
        <Icon size={18} />
        <span className="hidden md:inline">{label}</span>
    </button>
);
export default TabButton;
import { Camera } from 'lucide-react';

function ProfileHero({ coverImage }: { coverImage: string }) {
    return (
        <div className="relative h-64 md:h-80 bg-gradient-to-r from-green-800 to-green-600">
            <div className="absolute inset-0 overflow-hidden">
                <img
                    src={coverImage}
                    alt="Farm cover"
                    className="w-full h-full object-cover mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <button className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors">
                    <Camera size={20} />
                </button>
            </div>
        </div>
    )
}

export default ProfileHero

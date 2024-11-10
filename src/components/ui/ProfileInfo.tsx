import { Edit2, MapPin, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
function ProfileInfo({ name, bio, location, experience, certifications }: { name: string, bio: string, location: string, experience: string, certifications: string[] }) {
    return (
        <div className="flex-grow">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{name}</h1>
                    <p className="text-green-600 font-medium">{bio}</p>
                    <div className="flex items-center gap-2 text-gray-600 mt-2">
                        <MapPin size={16} />
                        <span>{location}</span>
                        <span className="text-gray-300">|</span>
                        <span>{experience}</span>
                    </div>

                </div>

                <div className="flex flex-wrap gap-2">
                    {certifications.map(cert => (
                        <span key={cert} className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                            <ShieldCheck size={14} className="inline mr-1" />
                            {cert}
                        </span>
                    ))}
                </div>
                <Link to="/update-profile" className="bottom-2 right-2 bg-green-600 hover:bg-green-700 text-white p-2 rounded-full transition-colors shadow-lg">
                    <Edit2 size={16} />
                </Link>
            </div>
        </div>
    )
}

export default ProfileInfo

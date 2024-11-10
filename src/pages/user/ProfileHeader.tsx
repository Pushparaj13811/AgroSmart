import { useState } from 'react';
import { Crop, Edit2, LineChart, Settings, TrendingUp} from "lucide-react"
import TabButton from "../../components/ui/TabButton"
import ProfileInfo from "../../components/ui/ProfileInfo"
import EditProfilePictureModal from "../../components/EditProfilePictureModal"
function ProfileHeader({ name, avatar, bio, location, experience, certifications, activeTab, setActiveTab }: { name: string, avatar: string, bio: string, location: string, experience: string, certifications: string[], activeTab: string, setActiveTab: (tab: string) => void }) {

    const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false);

    const handleEditProfilePicture = () => {
        // Open the modal
        setIsAvatarModalOpen(true);

    }

    return (
        <div className="relative px-4 md:px-8 -mt-32">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Avatar */}
                        <div className="relative flex-shrink-0">
                            <div className="w-32 h-32 rounded-xl border-4 border-white overflow-hidden bg-green-100 shadow-lg">
                                <img
                                    src={avatar}
                                    alt={name}
                                    className="w-full h-full object-cover"
                                />
                                <button onClick={handleEditProfilePicture} className="absolute bottom-2 right-2 bg-green-600 hover:bg-green-700 text-white p-2 rounded-full transition-colors shadow-lg">
                                    <Edit2 size={16} />
                                </button>
                            </div>
                        </div>
                        {/* Profile Info */}
                        <ProfileInfo
                            name={name}
                            bio={bio}
                            location={location}
                            experience={experience}
                            certifications={certifications}
                        />

                    </div>

                    {/* Navigation Tabs */}
                    <div className="flex gap-2 mt-6 border-t pt-4">
                        <TabButton
                            tab="overview"
                            current={activeTab}
                            icon={LineChart}
                            label="Overview"
                            onClick={() => setActiveTab("overview")}
                        />
                        <TabButton
                            tab="crops"
                            current={activeTab}
                            icon={Crop}
                            label="Crops"
                            onClick={() => setActiveTab("crops")}
                        />
                        <TabButton
                            tab="equipment"
                            current={activeTab}
                            icon={Settings}
                            label="Equipment"
                            onClick={() => setActiveTab("equipment")}
                        />
                        <TabButton
                            tab="analytics"
                            current={activeTab}
                            icon={TrendingUp}
                            label="Analytics"
                            onClick={() => setActiveTab("analytics")}
                        />
                    </div>
                </div>
            </div>

            {/* Modals */}
            <EditProfilePictureModal
                isOpen={isAvatarModalOpen}
                onClose={() => setIsAvatarModalOpen(false)}
                type="avatar"
            />
        </div>

    )
}

export default ProfileHeader

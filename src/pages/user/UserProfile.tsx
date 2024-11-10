import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import {
    Crop, Settings, ChevronRight,
    Droplets, Sun, TrendingUp, AlertTriangle,
    Thermometer, ShieldCheck
} from 'lucide-react';
import { Card, CardContent, CardHeader } from '../../components/ui/Card';
import ProgressBar from '../../components/ui/ProgressBar';
import ProfileHero from '../../components/ui/ProfileHero';
import ProfileHeader from './ProfileHeader';
import type { User, UserProfile, UserProfileResponse } from '../../types/types';
import { userActions } from '../../store/userSlice';
import PageTransition from '../../components/ui/PageTransition';
import AnimatedList from '../../components/ui/AnimatedList';


const UserProfile = () => {
    const dispatch = useDispatch<AppDispatch>();
    const user = useSelector((state: RootState) => state.user.user) as User;
    const userDetails = useSelector((state: RootState) => state.user.userProfile?.message) as UserProfileResponse;
    const [activeTab, setActiveTab] = useState('overview');
    const resultAction = async () => {
        if (userActions.getUserProfile.fulfilled.match(resultAction)) {
        }
    }

    useEffect(() => {
        if (!userDetails && user?._id) {
            dispatch(userActions.getUserProfile({ _id: user._id }))
        }
    }, [dispatch, userDetails, user?._id]);

    const profile = {
        name: userDetails?.fullName || "John Doe",
        title: userDetails?.title || "Agricultural Manager",
        location: userDetails?.location || "",
        experience: userDetails?.experience || "",
        email: userDetails?.email || "",
        bio: userDetails?.bio || "I'm a passionate agricultural manager with a love for farming and technology.",
        avatar: userDetails?.avatar || "/api/placeholder/128/128",
        coverimage: userDetails?.coverImage || "/api/placeholder/1400/400",
        farmSize: userDetails?.farmSize || "250 acres",
        primaryCrops: userDetails?.primaryCrops || ["Corn", "Soybeans", "Wheat", "Alfalfa"],
        certifications: userDetails?.certifications,
        lastSoilTest: userDetails?.lastSoilTest || "2024-03-15",
        activeSubscription: userDetails?.activeSubscription || "Premium",
        farmStats: {
            soilHealth: userDetails?.soilHealth || 85,
            waterEfficiency: userDetails?.waterEfficiency || 92,
            yieldForecast: userDetails?.yieldForecast || 78,
            sustainability: userDetails?.sustainability || 88
        },
        recentActivities: userDetails?.recentActivities || [
            { date: "2024-03-20", activity: "Soil pH Analysis", status: "Completed" },
            { date: "2024-03-18", activity: "Irrigation System Maintenance", status: "In Progress" },
            { date: "2024-03-15", activity: "Crop Disease Assessment", status: "Completed" }
        ],
        equipment: userDetails?.equipment || [
            { name: "John Deere Tractor", status: "Active", lastMaintenance: "2024-02-15" },
            { name: "Irrigation System", status: "Active", lastMaintenance: "2024-03-01" },
            { name: "Harvester", status: "Maintenance", lastMaintenance: "2024-03-10" }
        ]
    };

    return (
        <PageTransition>
            <div className="max-w-7xl mx-auto bg-gray-50 min-h-screen">
                {/* Hero Section */}

                <ProfileHero coverImage={typeof profile.coverimage === 'string' ? profile.coverimage : ""} />

                {/* Profile Header */}
                <ProfileHeader
                    name={profile.name}
                    avatar={typeof profile.avatar === 'string' ? profile.avatar : ""}
                    bio={profile.bio}
                    location={profile.location}
                    experience={profile?.experience}
                    certifications={profile?.certifications || []}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />

                {/* Main Content */}
                <div className="px-4 md:px-8 py-6">
                    <div className="max-w-7xl mx-auto">
                        {/* Quick Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                            {Object.entries(profile.farmStats).map(([key, value]) => (
                                <Card key={key} className="bg-white">
                                    <CardContent className="p-4">
                                        <h3 className="text-gray-600 font-medium mb-2 flex items-center gap-2">
                                            {key === 'soilHealth' && <Droplets className="text-blue-500" size={18} />}
                                            {key === 'waterEfficiency' && <Sun className="text-yellow-500" size={18} />}
                                            {key === 'yieldForecast' && <TrendingUp className="text-green-500" size={18} />}
                                            {key === 'sustainability' && <Crop className="text-emerald-500" size={18} />}
                                            {key.replace(/([A-Z])/g, ' $1').trim()}
                                        </h3>
                                        <div className="flex items-end gap-2">
                                            <span className="text-2xl font-bold">{value}%</span>
                                        </div>
                                        <ProgressBar value={value} />
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* Two Column Layout */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Main Content Column */}
                            <div className="lg:col-span-2 space-y-6">
                                {/* Farm Details */}
                                <Card>
                                    <CardHeader className="border-b border-gray-100">
                                        <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                                            <Crop className="text-green-600" size={20} />
                                            Farm Overview
                                        </h2>
                                    </CardHeader>
                                    <CardContent className="p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <p className="text-sm text-gray-600 mb-1">Farm Size</p>
                                            <p className="text-lg font-medium">{profile.farmSize}</p>
                                            <div className="mt-4">
                                                <p className="text-sm text-gray-600 mb-2">Primary Crops</p>
                                                <div className="flex gap-2 flex-wrap">
                                                    {profile.primaryCrops.map(crop => (
                                                        <span key={crop} className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
                                                            {crop}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        {profile.recentActivities.length > 0 && (
                                            <div>
                                                <p className="text-sm text-gray-600 mb-1">Recent Activities</p>
                                                <div className="space-y-3">
                                                    <AnimatedList>
                                                        {profile.recentActivities.map(activity => (
                                                            <div key={activity.date} className="flex items-center gap-3">
                                                                <div className={`w-2 h-2 rounded-full ${activity.status === 'Completed' ? 'bg-green-500' : 'bg-yellow-500'
                                                                    }`} />
                                                                <div>
                                                                    <p className="text-sm font-medium">{activity.activity}</p>
                                                                    <p className="text-xs text-gray-500">{activity.date}</p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </AnimatedList>
                                                </div>
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>

                                {/* Equipment Status */}
                                {profile.equipment.length > 0 && (
                                    <Card>
                                        <CardHeader className="border-b border-gray-100">
                                            <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                                                <Settings className="text-green-600" size={20} />
                                                Equipment Status
                                            </h2>
                                        </CardHeader>
                                        <CardContent className="p-0">
                                            <AnimatedList>
                                                {profile.equipment.map(item => (
                                                    <div key={item.name} className="flex items-center justify-between p-4 hover:bg-gray-50">
                                                        <div className="flex items-center gap-3">
                                                            <div className={`w-3 h-3 rounded-full ${item.status === 'Active' ? 'bg-green-500' : 'bg-yellow-500'
                                                                }`} />
                                                            <div>
                                                                <p className="font-medium">{item.name}</p>
                                                                <p className="text-sm text-gray-500">
                                                                    Last maintained: {item.lastMaintenance}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <ChevronRight className="text-gray-400" />
                                                    </div>
                                                ))}
                                            </AnimatedList>
                                        </CardContent>
                                    </Card>
                                )}
                            </div>

                            {/* Sidebar */}
                            <div className="space-y-6">
                                {/* Weather & Alerts */}
                                <Card className="bg-gradient-to-br from-blue-50 to-green-50">
                                    <CardContent className="p-4">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="font-semibold text-gray-800">Today's Weather</h3>
                                            <Thermometer className="text-blue-500" size={20} />
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between">
                                                <span className="text-gray-600">Temperature</span>
                                                <span className="font-medium">75°F</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-gray-600">Humidity</span>
                                                <span className="font-medium">65%</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-gray-600">Wind Speed</span>
                                                <span className="font-medium">8 mph</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Active Alerts */}
                                <Card>
                                    <CardHeader className="border-b border-gray-100">
                                        <h2 className="font-semibold text-gray-800 flex items-center gap-2">
                                            <AlertTriangle className="text-yellow-500" size={18} />
                                            Active Alerts
                                        </h2>
                                    </CardHeader>
                                    <CardContent className="p-4">
                                        <div className="space-y-3">
                                            <div className="p-3 bg-yellow-50 rounded-lg">
                                                <p className="text-sm font-medium text-yellow-800">Possible frost warning tonight</p>
                                                <p className="text-xs text-yellow-600 mt-1">Take necessary precautions</p>
                                            </div>
                                            <div className="p-3 bg-blue-50 rounded-lg">
                                                <p className="text-sm font-medium text-blue-800">Irrigation schedule update</p>
                                                <p className="text-xs text-blue-600 mt-1">Check system settings</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Subscription Status */}
                                <Card className="bg-gradient-to-br from-green-100 to-emerald-50">
                                    <CardContent className="p-4">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="font-semibold text-gray-800">Premium Member</h3>
                                            <ShieldCheck className="text-green-600" size={20} />
                                        </div>
                                        <p className="text-sm text-gray-600 mb-3">Your subscription is active</p>
                                        <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                                            Manage Subscription
                                        </button>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default UserProfile;

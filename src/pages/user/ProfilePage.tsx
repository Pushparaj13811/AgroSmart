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
import type { User, UserProfileResponse } from '../../types/types';
import { userActions } from '../../store/userSlice';
import PageTransition from '../../components/ui/PageTransition';
import AnimatedList from '../../components/ui/AnimatedList';
import { useTranslation } from 'react-i18next';
import { getContinuousWeatherUpdate, getWeather, stopContinuousWeatherUpdate } from '../../store/weatherSlice';


// Helper function to get stat icon
const getStatIcon = (key: string, size = 18) => {
    switch (key) {
        case 'soilHealth':
            return <Droplets className="text-blue-500" size={size} />;
        case 'waterEfficiency':
            return <Sun className="text-yellow-500" size={size} />;
        case 'yieldForecast':
            return <TrendingUp className="text-green-500" size={size} />;
        case 'sustainability':
            return <Crop className="text-emerald-500" size={size} />;
        default:
            return null;
    }
};

const ProfilePage = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch<AppDispatch>();
    const weather = useSelector((state: RootState) => state.weatherSlice.data);
    const status = useSelector((state: RootState) => state.weatherSlice.status === 'loading');
    // const error = useSelector((state: RootState) => state.weatherSlice.error);

    const user = useSelector((state: RootState) => state.user.user) as User;
    const userDetails = useSelector((state: RootState) => state.user.userProfile?.message) as UserProfileResponse;
    const [activeTab, setActiveTab] = useState('overview');



    useEffect(() => {
        if (!weather && !status) {
            dispatch(getWeather());
        }

        if (!userDetails && user?._id) {
            dispatch(userActions.getUserProfile({ _id: user._id }));
        }
        dispatch(getContinuousWeatherUpdate());

        return () => {
            dispatch(stopContinuousWeatherUpdate());
        };
    }, [dispatch, weather, status, userDetails, user?._id]);

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
            { id: '1', date: "2024-03-20", activity: "Soil pH Analysis", status: "Completed" },
            { id: '2', date: "2024-03-18", activity: "Irrigation System Maintenance", status: "In Progress" },
            { id: '3', date: "2024-03-15", activity: "Crop Disease Assessment", status: "Completed" }
        ],
        equipment: userDetails?.equipment || [
            { id: '1', name: "John Deere Tractor", status: "Active", lastMaintenance: "2024-02-15" },
            { id: '2', name: "Irrigation System", status: "Active", lastMaintenance: "2024-03-01" },
            { id: '3', name: "Harvester", status: "Maintenance", lastMaintenance: "2024-03-10" }
        ]
    };

    return (
        <PageTransition>
            <div className="max-w-7xl mx-auto bg-gray-50 min-h-screen">
                <ProfileHero coverImage={typeof profile.coverimage === 'string' ? profile.coverimage : ""} />

                <ProfileHeader
                    name={profile.name}
                    avatar={typeof profile.avatar === 'string' ? profile.avatar : ""}
                    bio={profile.bio}
                    location={profile.location}
                    experience={profile.experience}
                    certifications={profile.certifications || []}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />

                <div className="px-4 md:px-8 py-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                            {Object.entries(profile.farmStats).map(([key, value]) => (
                                <Card key={`stat-${key}`} className="bg-white">
                                    <CardContent className="p-4">
                                        <h3 className="text-gray-600 font-medium mb-2 flex items-center gap-2">
                                            {getStatIcon(key)}
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

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="lg:col-span-2 space-y-6">
                                <Card>
                                    <CardHeader className="border-b border-gray-100">
                                        <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                                            <Crop className="text-green-600" size={20} />
                                            {t('profile.farm_overview')}
                                        </h2>
                                    </CardHeader>
                                    <CardContent className="p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <p className="text-sm text-gray-600 mb-1">{t('profile.farm_size')}</p>
                                            <p className="text-lg font-medium">{profile.farmSize}</p>
                                            <div className="mt-4">
                                                <p className="text-sm text-gray-600 mb-2">{t('profile.primary_crops')}</p>
                                                <div className="flex gap-2 flex-wrap">
                                                    {profile.primaryCrops.map((crop, index) => (
                                                        <span key={`crop-${index}`} className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
                                                            {crop}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        {profile.recentActivities.length > 0 && (
                                            <div>
                                                <p className="text-sm text-gray-600 mb-1">{t('profile.recent_activities')}</p>
                                                <div className="space-y-3">
                                                    <AnimatedList>
                                                        {profile.recentActivities.map(activity => (
                                                            <div key={`activity-${activity}`} className="flex items-center gap-3">
                                                                <div className={`w-2 h-2 rounded-full ${activity.status === 'Completed' ? 'bg-green-500' : 'bg-yellow-500'}`} />
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

                                {profile.equipment.length > 0 && (
                                    <Card>
                                        <CardHeader className="border-b border-gray-100">
                                            <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                                                <Settings className="text-green-600" size={20} />
                                                {t('profile.equipment_status')}
                                            </h2>
                                        </CardHeader>
                                        <CardContent className="p-0">
                                            <AnimatedList>
                                                {profile.equipment.map(item => (
                                                    <div key={`equipment-${item}`} className="flex items-center justify-between p-4 hover:bg-gray-50">
                                                        <div className="flex items-center gap-3">
                                                            <div className={`w-3 h-3 rounded-full ${item.status === 'Active' ? 'bg-green-500' : 'bg-yellow-500'}`} />
                                                            <div>
                                                                <p className="font-medium">{item.name}</p>
                                                                <p className="text-sm text-gray-500">
                                                                    {t('profile.last_maintained')}: {item.lastMaintenance}
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

                            <div className="space-y-6">
                                <Card className="bg-gradient-to-br from-blue-50 to-green-50">
                                    <CardContent className="p-4">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="font-semibold text-gray-800">{t('profile.todays_weather')}</h3>
                                            <Thermometer className="text-blue-500" size={20} />
                                        </div>
                                        <div className="space-y-3">
                                            {weather ? (

                                                <>
                                                    {console.log(weather.data[0].alerts)}
                                                    <div key="weather-temperature" className="flex items-center justify-between">
                                                        <span className="text-gray-600">Temperature:</span>
                                                        <span className="font-medium">{weather.data[0].temperature}°C</span>
                                                    </div>
                                                    <div key="weather-humidity" className="flex items-center justify-between">
                                                        <span className="text-gray-600">Humidity:</span>
                                                        <span className="font-medium">{weather.data[0].humidity}%</span>
                                                    </div>
                                                    <div key="weather-wind-speed" className="flex items-center justify-between">
                                                        <span className="text-gray-600">Wind Speed:</span>
                                                        <span className="font-medium">{weather.data[0].windSpeed} kph</span>
                                                    </div>
                                                </>
                                            ) : (
                                                <p>No weather data available.</p>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader className="border-b border-gray-100">
                                        <h2 className="font-semibold text-gray-800 flex items-center gap-2">
                                            <AlertTriangle className="text-yellow-500" size={18} />
                                            {t('profile.active_alerts')}
                                        </h2>
                                    </CardHeader>
                                    <CardContent className="p-4">
                                        <div className="space-y-3">
                                            {weather?.data[0]?.alerts ? (
                                                Object.entries(weather.data[0].alerts).map(([key, value]) => {
                                                    // Check if the crop has an alert
                                                    return Object.entries(value).map(([crop, alertMessage]) => (
                                                        alertMessage ? (
                                                            <div
                                                                key={`alert-${key}-${crop}`}
                                                                className={`p-3 rounded-lg ${key === 'heatStress' || key === 'frost' || key === 'windDamage' ? 'bg-yellow-50' : 'bg-blue-50'}`}
                                                            >
                                                                <p className={`text-sm font-medium ${key === 'heatStress' || key === 'frost' || key === 'windDamage' ? 'text-yellow-800' : 'text-blue-800'}`}>
                                                                    {`${crop} - ${key.replace(/([A-Z])/g, ' $1').toLowerCase()} warning: ${alertMessage}`}
                                                                </p>
                                                                <p className={`text-xs mt-1 ${key === 'heatStress' || key === 'frost' || key === 'windDamage' ? 'text-yellow-600' : 'text-blue-600'}`}>
                                                                    Take necessary precautions
                                                                </p>
                                                            </div>
                                                        ) : null
                                                    ));
                                                })
                                            ) : (
                                                <p>No alerts available.</p>
                                            )}
                                        </div>

                                    </CardContent>
                                </Card>

                                <Card className="bg-gradient-to-br from-green-100 to-emerald-50">
                                    <CardContent className="p-4">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="font-semibold text-gray-800">{t('profile.premium_member')}</h3>
                                            <ShieldCheck className="text-green-600" size={20} />
                                        </div>
                                        <p className="text-sm text-gray-600 mb-3">{t('profile.subscription_active')}</p>
                                        <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                                            {t('profile.manage_subscription')}
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

export default ProfilePage;
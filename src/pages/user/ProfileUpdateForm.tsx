import React, { useEffect, useState } from 'react';
import {
    Crop, Settings
} from 'lucide-react';

import { Card, CardContent, CardHeader } from '../../components/ui/Card';
import Input from '../../components/ui/Input';
import Label from '../../components/ui/Label';
import Textarea from '../../components/ui/Textarea';
import Button from '../../components/ui/Button';
import { Alert, AlertDescription } from '../../components/ui/alert';
import { Link } from 'react-router-dom';
import PageTransition from '../../components/ui/PageTransition';
import { userActions } from '../../store/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { AccountData, User, UserProfileResponse } from '../../types/types';
import CustomDropdown from '../../components/ui/CustomDropdown';


interface UserProfileFormData {
    username: string;
    fullName: string;
    title: string;
    location: string;
    experience: string;
    email: string;
    bio: string;
    farmSize: string;
    primaryCrops: string[];
    certifications: string[];
    lastSoilTest: string;
    activeSubscription: string;
    language: string;
    soilHealth: number;
    waterEfficiency: number;
    yieldForecast: number;
    sustainability: number;
    recentActivities: Array<{
        date: string;
        activity: string;
        status: string;
    }>;
    equipment: Array<{
        name: string;
        status: string;
        lastMaintenance: string;
    }>;
}



interface ProfileData {
    title: string;
    location: string;
    experience: string;
    farmSize: string;
    primaryCrops: string[];
    certifications: string[];
    lastSoilTest: string;
    // ... other profile specific fields
}
type Bio = {
    bio: string;
}
type Language = {
    language: string;
}

const SUPPORTED_LANGUAGES = [
    { value: 'english', label: 'English' },
    { value: 'nepali', label: 'Nepali' },
    { value: 'hindi', label: 'हिन्दी' }
];

const ProfileUpdateForm = () => {
    const dispatch = useDispatch<AppDispatch>();
    // const user = useSelector((state: RootState) => state.user.user) as User;
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);
    const [originalData, setOriginalData] = useState<UserProfileFormData | null>(null);

    const [formData, setFormData] = useState<UserProfileFormData>({
        username: '',
        fullName: '',
        title: '',
        location: '',
        experience: '',
        email: '',
        bio: '',
        farmSize: '',
        language: '',
        primaryCrops: [],
        certifications: [],
        lastSoilTest: '',
        activeSubscription: 'Premium',
        soilHealth: 85,
        waterEfficiency: 92,
        yieldForecast: 78,
        sustainability: 88,
        recentActivities: [],
        equipment: []
    });

    useEffect(() => {
        const savedData = localStorage.getItem('userProfile');
        if (savedData) {
            const parsedData = JSON.parse(savedData).message;
            const initialData = {
                username: parsedData.username || '',
                fullName: parsedData.fullName || '',
                title: parsedData.title || '',
                location: parsedData.location || '',
                experience: parsedData.experience || '',
                email: parsedData.email || '',
                bio: parsedData.bio || '',
                farmSize: parsedData.farmSize || '',
                language: parsedData.language || '',
                primaryCrops: parsedData.primaryCrops || [],
                certifications: parsedData.certifications || [],
                lastSoilTest: parsedData.lastSoilTest || '',
                activeSubscription: parsedData.activeSubscription || 'Premium',
                soilHealth: parsedData.soilHealth || 85,
                waterEfficiency: parsedData.waterEfficiency || 92,
                yieldForecast: parsedData.yieldForecast || 78,
                sustainability: parsedData.sustainability || 88,
                recentActivities: parsedData.recentActivities || [],
                equipment: parsedData.equipment || []
            };
            setFormData(initialData);
            setOriginalData(initialData);
        }
    }, []);

    const getChangedFields = () => {
        if (!originalData) return { accountChanged: false, profileChanged: false };

        const accountFields: (keyof AccountData)[] = ['fullName', 'email', 'username'];
        const bioFields: (keyof Bio)[] = ['bio'];
        const languageFields: (keyof Language)[] = ['language'];
        const accountChanges: Partial<AccountData> = {};
        const bioChanges: Partial<Bio> = {};
        const languageChanges: Partial<Language> = {};
        let accountChanged = false;
        let languageChanged = false;
        let bioChanged = false;

        const profileChanges: Partial<ProfileData> = {};
        let profileChanged = false;

        // Check account fields
        accountFields.forEach(field => {
            if (formData[field] !== originalData[field]) {
                accountChanges[field] = formData[field];
                accountChanged = true;
            }
        });

        // Check bio field separately
        if (formData.bio !== originalData.bio) {
            bioChanges.bio = formData.bio;
            bioChanged = true;
        }

        // Check language field separately
        if (formData.language !== originalData.language) {
            languageChanges.language = formData.language;
            languageChanged = true;
        }

        // Check all other fields
        Object.keys(formData).forEach(key => {
            const typedKey = key as keyof UserProfileFormData;
            if (!accountFields.includes(typedKey as keyof AccountData) &&
                typedKey !== 'bio' &&  // Exclude bio from profile changes
                typedKey !== 'language' && // Exclude language from profile changes
                JSON.stringify(formData[typedKey]) !== JSON.stringify(originalData[typedKey])) {
                (profileChanges as any)[typedKey] = formData[typedKey];
                profileChanged = true;
            }
        });

        return {
            accountChanged,
            languageChanged,
            bioChanged,
            profileChanged,
            accountChanges,
            languageChanges,
            bioChanges,
            profileChanges
        };
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleArrayInputChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        field: 'primaryCrops' | 'certifications'
    ) => {
        const values = e.target.value.split(',').map(item => item.trim());
        setFormData(prev => ({ ...prev, [field]: values }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const { accountChanged, languageChanged, bioChanged, profileChanged, accountChanges = {}, languageChanges = {}, bioChanges = {}, profileChanges = {} } = getChangedFields();

        try {
            if (!accountChanged && !profileChanged && !bioChanged && !languageChanged) {
                setSubmitStatus({ type: 'error', message: 'No changes detected' });
                return;
            }

            if (accountChanged) {
                await dispatch(userActions.updateAccount(accountChanges));
            }

            if (languageChanged && languageChanges.language) {
                await dispatch(userActions.updateLanguage(languageChanges.language));
            }

            if (bioChanged && bioChanges.bio) {
                await dispatch(userActions.updateBio(bioChanges.bio));
            }

            if (profileChanged && profileChanges) {
                const updateProfileResult = await dispatch(userActions.updateProfile(profileChanges as UserProfileResponse));

                if (userActions.updateProfile.fulfilled.match(updateProfileResult)) {
                    const freshData = updateProfileResult.payload?.message;

                    if (freshData) {
                        const updatedData: UserProfileFormData = {
                            username: freshData.username || '',
                            fullName: freshData.fullName || '',
                            title: freshData.title || '',
                            location: freshData.location || '',
                            experience: freshData.experience || '',
                            email: freshData.email || '',
                            bio: freshData.bio || '',
                            farmSize: freshData.farmSize || '',
                            language: freshData.language || '',
                            primaryCrops: freshData.primaryCrops || [],
                            certifications: freshData.certifications || [],
                            lastSoilTest: freshData.lastSoilTest || '',
                            activeSubscription: freshData.activeSubscription || 'Premium',
                            soilHealth: freshData.soilHealth || 85,
                            waterEfficiency: freshData.waterEfficiency || 92,
                            yieldForecast: freshData.yieldForecast || 78,
                            sustainability: freshData.sustainability || 88,
                            recentActivities: freshData.recentActivities || [],
                            equipment: freshData.equipment || []
                        };

                        setFormData(updatedData);
                        setOriginalData(updatedData);
                    }
                }
            }

            setSubmitStatus({ type: 'success', message: 'Profile updated successfully!' });

        } catch (error) {
            console.error('Update error:', error);
            setSubmitStatus({
                type: 'error',
                message: 'Failed to update profile. Please try again.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <PageTransition>
            <div className="max-w-7xl mx-auto bg-gray-50 min-h-screen">
                <div className="px-4 md:px-8 py-6">
                    <div className="max-w-7xl mx-auto">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Basic Information */}
                            <Card>
                                <CardHeader>
                                    <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                                        <Crop className="text-green-600" size={20} />
                                        Basic Information
                                    </h2>
                                </CardHeader>
                                <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="username">Username</Label>
                                        <Input
                                            id="username"
                                            name="username"
                                            value={formData.username}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="fullName">Full Name</Label>
                                        <Input
                                            id="fullName"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="title">Title</Label>
                                        <Input
                                            id="title"
                                            name="title"
                                            value={formData.title}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="location">Location</Label>
                                        <Input
                                            id="location"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="language">Language</Label>
                                        <CustomDropdown
                                            id="language"
                                            name="language"
                                            value={formData.language}
                                            onChange={(value) => setFormData(prev => ({ ...prev, language: value }))}
                                            options={SUPPORTED_LANGUAGES}
                                            placeholder="Select language"
                                        />
                                    </div>
                                    <div className="md:col-span-2 space-y-2">
                                        <Label htmlFor="bio">Bio</Label>
                                        <Textarea
                                            id="bio"
                                            name="bio"
                                            value={formData.bio}
                                            onChange={handleInputChange}
                                            className="h-24"
                                        />
                                    </div>


                                </CardContent>
                            </Card>

                            {/* Farm Details */}
                            <Card>
                                <CardHeader>
                                    <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                                        <Settings className="text-green-600" size={20} />
                                        Farm Details
                                    </h2>
                                </CardHeader>
                                <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="farmSize">Farm Size</Label>
                                        <Input
                                            id="farmSize"
                                            name="farmSize"
                                            value={formData.farmSize}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="primaryCrops">Primary Crops (comma-separated)</Label>
                                        <Input
                                            id="primaryCrops"
                                            name="primaryCrops"
                                            value={formData.primaryCrops.join(', ')}
                                            onChange={(e) => handleArrayInputChange(e, 'primaryCrops')}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="certifications">Certifications (comma-separated)</Label>
                                        <Input
                                            id="certifications"
                                            name="certifications"
                                            value={formData.certifications.join(', ')}
                                            onChange={(e) => handleArrayInputChange(e, 'certifications')}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lastSoilTest">Last Soil Test Date</Label>
                                        <Input
                                            id="lastSoilTest"
                                            name="lastSoilTest"
                                            type="date"
                                            value={formData.lastSoilTest}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </CardContent>
                            </Card>

                            {submitStatus && (
                                <Alert variant={submitStatus.type === 'success' ? 'default' : 'destructive'}>
                                    <AlertDescription>{submitStatus.message}</AlertDescription>
                                </Alert>
                            )}

                            <div className="flex justify-end space-x-4">
                                <Link to="/">
                                    <Button type="button" variant="outline" className="px-4 py-2.5 text-green-800 border-green-800 hover:bg-green-100" >
                                        Cancel
                                    </Button>
                                </Link>
                                <Button type="submit" disabled={isSubmitting} className="bg-green-700 text-white hover:bg-green-600">
                                    {isSubmitting ? 'Updating...' : 'Update Profile'}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};
export default ProfileUpdateForm;
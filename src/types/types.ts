import * as LucideIcons from 'lucide-react';
import { ReactNode } from 'react';


type LucideIconName = keyof typeof LucideIcons;

type ValidateAccessTokenResponse = {
    isValid: boolean;
    message: string;
};

interface Feature {
    icon: LucideIconName;
    title: string;
    description: string;
}

interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    image: string;
    author: string;
    date: string;
    category: string;

}
interface Video {
    _id?: string;
    thumbnail: string;
    title: string;
    videoUrl: string;
    description: string;
    duration: string;
    category: string;
}

interface DetectionResultData {
    disease: string;
    confidence: number;
    description: string;
    treatment: string;
    preventiveMeasures: string[];
}

interface Post {
    id: string;
    title: string;
    content: string;
    author: string;
    date: string;
    category: string;
    image: string;
    likes: number;
    comments: Comment[];
}

// ... existing code ...

export interface RegisterFormData {
    username: string;
    email: string;
    password: string;
    fullName: string;
    role: string;
    language: string;
    bio: string;
    avatar: File;
    coverImage: File | "";
}

interface User {
    _id?: string;
    username: string;
    email: string;
    password?: string;
    fullName: string;
    role: string | "user";
    language: string;
    bio: string;
    avatar: string | File;
    coverImage?: string | File;
}

interface UserState {
    user: User | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

interface Crop {
    id?: string;
    name: string;
    description: string;
    image: File;
    climate: string;
    soil: string;
    irrigation: string;
    fertilization: string;
    harvesting: string;
}

interface CropState {
    crops: Crop[];
    selectedCrop: Crop | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}
interface Response {
    message: string;
}

interface Article {
    id?: string;
    title: string;
    content: string;
    image: File;
    category: string;
}

interface VideoData {
    id?: string;
    video: File;
    thumbnail: File;
    title: string;
    description: string;
    duration: string;
    category: string;
}

interface ArticleState {
    articles: Article[];
    selectedArticle: Article | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

interface VideoState {
    videos: Video[];
    selectedVideo: Video | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

interface ProtectedRouteProps {
    children: ReactNode;
    adminOnly?: boolean;
}

interface FlowerSpinnerProps {
    size?: number;
    color?: string;
}

type TabButtonProps = {
    tab: string;
    current: string;
    icon: React.ComponentType<{ size?: string | number }>;
    label: string;
};

type FormDataType = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    fullName: string;
    role: string;
    language: string;
    bio: string;
    [key: string]: string;
};

interface Blog {
    title: string;
    content: string;
}


declare module 'lucide-react' {
    export type Camera = any;
    export type MapPin = any;
    export type Crop = any;
    export type Settings = any;
    export type ChevronRight = any;
    export type Edit2 = any;
    export type Droplets = any;
    export type Sun = any;
    export type TrendingUp = any;
    export type AlertTriangle = any;
    export type LineChart = any;
    export type Thermometer = any;
    export type ShieldCheck = any;
}

export type {
    LucideIconName,
    ValidateAccessTokenResponse,
    Feature,
    BlogPost,
    Video,
    DetectionResultData,
    Post,
    User,
    UserState,
    Crop,
    CropState,
    Response,
    Article,
    VideoData,
    ArticleState,
    VideoState,
    ProtectedRouteProps,
    FlowerSpinnerProps,
    TabButtonProps,
    FormDataType,
    Blog
};

import * as LucideIcons from 'lucide-react';
import { ReactNode } from 'react';


type LucideIconName = keyof typeof LucideIcons;

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
interface User {
    _id?: string;
    username: string;
    email: string;
    password?: string;
    fullName: string;
    role: string | "user";
    language: string;
    bio: string;
    avatar: string;
    coverImage: string;

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

export type {
    LucideIconName,
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
    FlowerSpinnerProps
};
import * as LucideIcons from 'lucide-react';

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
    id: string;
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
    username: string;
    email: string;
    password: string;
    fullName: string;
    role: string | "user";
    language: string;
    bio: string;
    avatar: File;
    coverImage: File;

}

interface UserState {
    user: User | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

interface Crop {
    id: string;
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
    id: string;
    title: string;
    content: string;
}

interface VideoData {
    video: File;
    thumbnail: File;
    title: string;
    description: string;
    duration: string;
    category: string;
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
    VideoData
};
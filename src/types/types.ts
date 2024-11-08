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

export type { LucideIconName, Feature, BlogPost, Video, DetectionResultData, Post };
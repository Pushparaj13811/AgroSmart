import * as LucideIcons from 'lucide-react';

export type LucideIconName = keyof typeof LucideIcons;

export interface Feature {
    icon: LucideIconName;
    title: string;
    description: string;
}

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    image: string;
    author: string;
    date: string;
    category: string;

}
export interface Video {
    id: string;
    thumbnail: string;
    title: string;
    videoUrl: string;
    description: string;
    duration: string;
    category: string;
}

export interface DetectionResultData {
    disease: string;
    confidence: number;
    description: string;
    treatment: string;
    preventiveMeasures: string[];
}
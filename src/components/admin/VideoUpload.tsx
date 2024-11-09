import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Upload, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Label from '../ui/Label';
import Textarea from '../ui/Textarea';


const VideoUpload: React.FC = () => {
    const [videoTitle, setVideoTitle] = useState<string>('');
    const [videoDescription, setVideoDescription] = useState<string>('');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string>('');

    const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;
        if (file && file.type.startsWith('video/')) {
            setSelectedFile(file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Handle video upload logic here
        console.log({
            title: videoTitle,
            description: videoDescription,
            file: selectedFile
        });
    };

    const clearSelection = () => {
        setSelectedFile(null);
        setPreviewUrl('');
    };

    return (
        <div className="p-6">
            <Card>
                <CardHeader>
                    <CardTitle>Upload Video</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="title">Video Title</Label>
                            <Input
                                id="title"
                                value={videoTitle}
                                onChange={(e) => setVideoTitle(e.target.value)}
                                placeholder="Enter video title"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                                id="description"
                                value={videoDescription}
                                onChange={(e) => setVideoDescription(e.target.value)}
                                placeholder="Enter video description"
                                rows={4}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="video-upload">Video File</Label>
                            <div className="border-2 border-dashed rounded-lg p-6 text-center">
                                {!selectedFile ? (
                                    <>
                                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                                        <div className="mt-2">
                                            <label htmlFor="video-upload" className="cursor-pointer text-blue-600 hover:text-blue-500">
                                                Upload a video
                                            </label>
                                            <input
                                                id="video-upload"
                                                type="file"
                                                className="hidden"
                                                accept="video/*"
                                                onChange={handleFileSelect}
                                            />
                                        </div>
                                        <p className="text-sm text-gray-500">MP4, WebM, or Ogg</p>
                                    </>
                                ) : (
                                    <div className="space-y-2">
                                        {previewUrl && (
                                            <video className="mx-auto max-h-48" controls>
                                                <source src={previewUrl} type={selectedFile.type} />
                                            </video>
                                        )}
                                        <div className="flex items-center justify-center gap-2">
                                            <span className="text-sm">{selectedFile.name}</span>
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="sm"
                                                onClick={clearSelection}
                                            >
                                                <X className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <Button type="submit" className="w-full">
                            Upload Video
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default VideoUpload;

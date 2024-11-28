import React, { useState } from 'react';
import { Upload, AlertCircle, CheckCircle2 } from 'lucide-react';
import VideoUpload from '../../components/admin/VideoUpload';
import { Alert, AlertDescription, AlertTitle } from '../../components/ui/alert';
import PageTransition from '../../components/ui/PageTransition';
import { videoActions, VideoStateWithUploadProgress } from '../../store/videoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store/store';

const VideoUploadPage: React.FC = () => {
    const [uploadStatus, setUploadStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const uploadProgress = useSelector((state: { videos: VideoStateWithUploadProgress }) => state.videos.uploadProgress);
    const dispatch = useDispatch<AppDispatch>();


    const handleVideoUpload = async (videoData: {
        title: string;
        description: string;
        videoFile: File;
        thumbnailFile: File | null;
    }) => {
        try {
            setUploadStatus('idle');
            if (!videoData.title || !videoData.description || !videoData.videoFile) {
                throw new Error('Missing required video data');
            }

            const formData = new FormData();
            formData.append("title", videoData.title);
            formData.append("description", videoData.description);
            formData.append("videoFile", videoData.videoFile);
            if (videoData.thumbnailFile) {
                formData.append("thumbnailFile", videoData.thumbnailFile);
            }
            const response = dispatch(videoActions.createVideo({ videoData: formData }));
            if (videoActions.createVideo.fulfilled.match(response)) {
                const result = response.payload;
                console.log('Video upload result:', result);
                setUploadStatus('success');
            }

        } catch (error) {
            console.error('Error uploading video:', error);
            setUploadStatus('error');
        }
    };

    return (
        <PageTransition>
            <div className="min-h-screen bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Header Section */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-4xl font-bold text-gray-900 mb-2">Upload Video</h1>
                                <p className="text-lg text-gray-600">
                                    Share your content with your audience
                                </p>
                            </div>
                            <div className="hidden sm:block">
                                <Upload className="w-16 h-16 text-green-600" />
                            </div>
                        </div>
                    </div>

                    {/* Status Messages */}
                    {uploadStatus === 'success' && (
                        <Alert className="mb-6 bg-green-50 border-green-200">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            <AlertTitle className="text-green-800">Upload Successful!</AlertTitle>
                            <AlertDescription className="text-green-700">
                                Your video has been uploaded and is being processed. You'll be notified when it's ready.
                            </AlertDescription>
                        </Alert>
                    )}

                    {uploadStatus === 'error' && (
                        <Alert className="mb-6 bg-red-50 border-red-200">
                            <AlertCircle className="h-4 w-4 text-red-600" />
                            <AlertTitle className="text-red-800">Upload Failed</AlertTitle>
                            <AlertDescription className="text-red-700">
                                There was an error uploading your video. Please try again.
                            </AlertDescription>
                        </Alert>
                    )}

                    {/* Upload Progress Bar */}
                    {uploadProgress > 0 && uploadProgress < 100 && (
                        <div className="mb-6">
                            <div className="flex justify-between mb-2">
                                <span className="text-sm font-medium text-gray-700">Uploading...</span>
                                <span className="text-sm font-medium text-gray-700">{uploadProgress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div
                                    className="bg-green-600 h-2.5 rounded-full transition-all duration-300"
                                    style={{ width: `${uploadProgress}%` }}
                                />
                            </div>
                        </div>
                    )}

                    {/* Main Upload Section */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                        <div className="p-1">
                            {/* Pass `handleVideoUpload` as a prop */}
                            <VideoUpload onUpload={handleVideoUpload} />
                        </div>
                    </div>

                    {/* Help Section */}
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Video Requirements</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Maximum file size: 100MB</li>
                                <li>• Supported formats: MP4, MOV, AVI</li>
                                <li>• Maximum length: 30 minutes</li>
                            </ul>
                        </div>

                        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Thumbnail Tips</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Recommended size: 1280x720</li>
                                <li>• Max file size: 2MB</li>
                                <li>• Format: JPG, PNG</li>
                            </ul>
                        </div>

                        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Best Practices</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Use clear, descriptive titles</li>
                                <li>• Add detailed descriptions</li>
                                <li>• Choose engaging thumbnails</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default VideoUploadPage;

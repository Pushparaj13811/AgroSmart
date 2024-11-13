import { useState } from 'react';
import {
    Pencil,
    Trash2,
    Search,
    X,
    CheckCircle2,
    AlertCircle
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "../../components/ui/alert";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle
} from '../../components/ui/alert';
import videoData from './video';

interface Video {
    id: string;
    title: string;
    description: string;
    thumbnailUrl: string;
    uploadDate: string;
    views: number;
    duration: string;
}

const VideoManagement = () => {
    const [videos, setVideos] = useState<Video[]>(videoData as Video[]);
    const [searchQuery, setSearchQuery] = useState('');
    const [editingVideo, setEditingVideo] = useState<Video | null>(null);
    const [deletingVideo, setDeletingVideo] = useState<Video | null>(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [statusMessage, setStatusMessage] = useState<{
        type: 'success' | 'error';
        message: string;
    } | null>(null);

    // Edit form state
    const [editForm, setEditForm] = useState({
        title: '',
        description: ''
    });

    // Filter videos based on search query
    const filteredVideos = videos.filter(video =>
        video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleEditClick = (video: Video) => {
        setEditingVideo(video);
        setEditForm({
            title: video.title,
            description: video.description
        });
        setIsEditModalOpen(true);
    };

    const handleSaveEdit = () => {
        if (editingVideo) {
            setVideos(videos.map(video =>
                video.id === editingVideo.id
                    ? { ...video, ...editForm }
                    : video
            ));
            setStatusMessage({
                type: 'success',
                message: 'Video details updated successfully!'
            });
            setIsEditModalOpen(false);

            // Clear status message after 3 seconds
            setTimeout(() => setStatusMessage(null), 3000);
        }
    };

    const handleDelete = () => {
        if (deletingVideo) {
            setVideos(videos.filter(video => video.id !== deletingVideo.id));
            setStatusMessage({
                type: 'success',
                message: 'Video deleted successfully!'
            });
            setDeletingVideo(null);

            // Clear status message after 3 seconds
            setTimeout(() => setStatusMessage(null), 3000);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Video Management</h1>
                    <p className="mt-2 text-gray-600">Manage your uploaded videos</p>
                </div>

                {/* Status Message */}
                {statusMessage && (
                    <Alert className={`mb-6 ${statusMessage.type === 'success' ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
                        }`}>
                        {statusMessage.type === 'success' ? (
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                        ) : (
                            <AlertCircle className="h-4 w-4 text-red-600" />
                        )}
                        <AlertTitle className={`${statusMessage.type === 'success' ? 'text-green-800' : 'text-red-800'
                            }`}>
                            {statusMessage.type === 'success' ? 'Success' : 'Error'}
                        </AlertTitle>
                        <AlertDescription className={`${statusMessage.type === 'success' ? 'text-green-700' : 'text-red-700'
                            }`}>
                            {statusMessage.message}
                        </AlertDescription>
                    </Alert>
                )}

                {/* Search Bar */}
                <div className="mb-6">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <input
                            type="text"
                            placeholder="Search videos..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                {/* Videos Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredVideos.map(video => (
                        <div key={video.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                            {/* Thumbnail */}
                            <div className="relative">
                                <img
                                    src={video.thumbnailUrl}
                                    alt={video.title}
                                    className="w-full aspect-video object-cover"
                                />
                                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-sm px-2 py-1 rounded">
                                    {video.duration}
                                </div>
                            </div>

                            {/* Video Info */}
                            <div className="p-4">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                                        {video.title}
                                    </h3>
                                    <div className="flex space-x-2">
                                        <button
                                            onClick={() => handleEditClick(video)}
                                            className="p-1 hover:bg-gray-100 rounded-full"
                                        >
                                            <Pencil className="h-4 w-4 text-gray-600" />
                                        </button>
                                        <button
                                            onClick={() => setDeletingVideo(video)}
                                            className="p-1 hover:bg-gray-100 rounded-full"
                                        >
                                            <Trash2 className="h-4 w-4 text-gray-600" />
                                        </button>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                                    {video.description}
                                </p>
                                <div className="flex justify-between text-sm text-gray-500">
                                    <span>{new Date(video.uploadDate).toLocaleDateString()}</span>
                                    <span>{video.views.toLocaleString()} views</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Edit Modal */}
                {isEditModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-lg max-w-md w-full p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-semibold">Edit Video</h2>
                                <button
                                    onClick={() => setIsEditModalOpen(false)}
                                    className="p-1 hover:bg-gray-100 rounded-full"
                                >
                                    <X className="h-5 w-5 text-gray-500" />
                                </button>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        value={editForm.title}
                                        onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Description
                                    </label>
                                    <textarea
                                        value={editForm.description}
                                        onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                                        rows={4}
                                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-end space-x-3 mt-6">
                                <button
                                    onClick={() => setIsEditModalOpen(false)}
                                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleSaveEdit}
                                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Delete Confirmation Dialog */}
                <AlertDialog open={!!deletingVideo} onOpenChange={() => setDeletingVideo(null)}>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Delete Video</AlertDialogTitle>
                            <AlertDialogDescription>
                                Are you sure you want to delete this video? This action cannot be undone.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                                onClick={handleDelete}
                                className="bg-red-600 hover:bg-red-700"
                            >
                                Delete
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>

                {/* No Results Message */}
                {filteredVideos.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500">No videos found matching your search.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VideoManagement;
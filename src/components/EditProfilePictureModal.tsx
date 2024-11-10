import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { userActions } from '../store/userSlice';
import { X } from 'lucide-react';
import Button from './ui/Button';

interface EditProfilePictureModalProps {
    isOpen: boolean;
    onClose: () => void;
    type: 'avatar' | 'cover';
}

const EditProfilePictureModal = ({ isOpen, onClose, type }: EditProfilePictureModalProps) => {
    const dispatch = useDispatch<AppDispatch>();
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [isUploading, setIsUploading] = useState(false);

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleUpload = async () => {
        if (!selectedFile) return;

        setIsUploading(true);
        try {
            if (type === 'avatar') {
                await dispatch(userActions.updateAvatar(selectedFile));
            } else {
                await dispatch(userActions.updateCoverImage(selectedFile));
            }
            onClose();
        } catch (error) {
            console.error('Upload failed:', error);
        } finally {
            setIsUploading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                    <X size={24} />
                </button>

                <h2 className="text-xl font-semibold mb-4">
                    Update {type === 'avatar' ? 'Profile Picture' : 'Cover Image'}
                </h2>

                <div className="space-y-4">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                        {previewUrl ? (
                            <div className="relative">
                                <img
                                    src={previewUrl}
                                    alt="Preview"
                                    className={`mx-auto ${type === 'avatar' ? 'rounded-full w-32 h-32' : 'rounded-lg w-full h-48 object-cover'}`}
                                />
                                <button
                                    onClick={() => {
                                        setSelectedFile(null);
                                        setPreviewUrl(null);
                                    }}
                                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                                >
                                    <X size={16} />
                                </button>
                            </div>
                        ) : (
                            <div>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileSelect}
                                    className="hidden"
                                    id="file-upload"
                                />
                                <label
                                    htmlFor="file-upload"
                                    className="cursor-pointer text-green-600 hover:text-green-700"
                                >
                                    Click to upload or drag and drop
                                </label>
                            </div>
                        )}
                    </div>

                    <div className="flex justify-end space-x-3">
                        <Button
                            onClick={onClose}
                            variant="outline"
                            className="px-4 py-2 text-green-800 border-green-800 hover:bg-green-100"
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={handleUpload}
                            disabled={!selectedFile || isUploading}
                            className="bg-green-700 text-white hover:bg-green-600 px-4 py-2"
                        >
                            {isUploading ? 'Uploading...' : 'Upload'}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProfilePictureModal;

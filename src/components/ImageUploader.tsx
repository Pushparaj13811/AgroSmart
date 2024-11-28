import React, { useCallback } from 'react';
import { Image as ImageIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ImageUploaderProps {
  onUpload: (file: File) => void;
  isLoading: boolean;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onUpload, isLoading }) => {
  const { t } = useTranslation();
  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file && file.type.startsWith('image/')) {
        onUpload(file);
      }
    },
    [onUpload]
  );

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onUpload(file);
    }
  };

  return (
    <div
      className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-green-500 transition-colors"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <input
        type="file"
        id="file-upload"
        className="hidden"
        accept="image/*"
        onChange={handleFileInput}
        disabled={isLoading}
      />
      <label
        htmlFor="file-upload"
        className="cursor-pointer"
      >
        <div className="mx-auto w-24 h-24 mb-4">
          {isLoading ? (
            <div className="animate-spin rounded-full h-24 w-24 border-b-2 border-green-500" />
          ) : (
            <ImageIcon className="w-24 h-24 text-gray-400" />
          )}
        </div>
        <p className="text-xl font-medium text-gray-700 mb-2">
          {isLoading ? t('diseaseDetection.ImageUpload.analyzing_image') : t('diseaseDetection.ImageUpload.drop_your_image_here')}
        </p>
        <p className="text-gray-500">
          {isLoading ? t('diseaseDetection.ImageUpload.please_wait') : t('diseaseDetection.ImageUpload.or_click_to_upload')}
        </p>
      </label>
    </div>
  );
};

export default ImageUploader;
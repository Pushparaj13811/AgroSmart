import React, { useState, ChangeEvent, useRef } from 'react';
import { Upload, Image as ImageIcon } from 'lucide-react';

interface VideoUploadProps {
  onUpload: (videoData: { 
    title: string; 
    description: string; 
    videoFile: File; 
    thumbnailFile: File | null 
  }) => void;
}

const VideoUpload: React.FC<VideoUploadProps> = ({ onUpload }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
  const [videoPreview, setVideoPreview] = useState<string | null>(null);
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  
  const videoInputRef = useRef<HTMLInputElement>(null);
  const thumbnailInputRef = useRef<HTMLInputElement>(null);

  const handleVideoChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setVideoFile(file);
      setVideoPreview(URL.createObjectURL(file));
    }
  };

  const handleThumbnailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setThumbnailFile(file);
      setThumbnailPreview(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('video/')) {
      setVideoFile(file);
      setVideoPreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = () => {
    if (videoFile && title) {
      onUpload({ title, description, videoFile, thumbnailFile });
      setTitle('');
      setDescription('');
      setVideoFile(null);
      setThumbnailFile(null);
      setVideoPreview(null);
      setThumbnailPreview(null);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Upload video</h1>
      
      {!videoFile ? (
        <div
          className={`border-2 border-dashed rounded-lg p-8 mb-6 text-center cursor-pointer transition-colors
            ${isDragging ? 'border-green-600 bg-green-50' : 'border-gray-300 hover:border-green-600'}`}
          onClick={() => videoInputRef.current?.click()}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <Upload className="w-12 h-12 mx-auto mb-4 text-green-600" />
          <p className="text-lg mb-2">Drag and drop video files to upload</p>
          <p className="text-sm text-gray-500 mb-4">Your videos will be private until you publish them</p>
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
            SELECT FILES
          </button>
          <input
            ref={videoInputRef}
            type="file"
            accept="video/*"
            onChange={handleVideoChange}
            className="hidden"
          />
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex gap-6">
            <div className="w-2/3">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title (required)
                </label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="Add a title that describes your video"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  rows={4}
                  placeholder="Tell viewers about your video"
                />
              </div>
            </div>
            
            <div className="w-1/3">
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="aspect-video mb-4 bg-black rounded-lg overflow-hidden">
                  {videoPreview && (
                    <video 
                      className="w-full h-full object-contain" 
                      src={videoPreview} 
                      controls
                    />
                  )}
                </div>
                
                <div 
                  className="border-2 border-dashed border-gray-300 p-4 rounded-lg text-center cursor-pointer hover:border-green-600"
                  onClick={() => thumbnailInputRef.current?.click()}
                >
                  {thumbnailPreview ? (
                    <img 
                      src={thumbnailPreview} 
                      alt="Thumbnail" 
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  ) : (
                    <>
                      <ImageIcon className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                      <p className="text-sm text-gray-600">Upload thumbnail</p>
                    </>
                  )}
                  <input
                    ref={thumbnailInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleThumbnailChange}
                    className="hidden"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end gap-4">
            <button
              onClick={() => {
                setVideoFile(null);
                setVideoPreview(null);
              }}
              className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleUpload}
              disabled={!videoFile || !title}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Upload
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoUpload;
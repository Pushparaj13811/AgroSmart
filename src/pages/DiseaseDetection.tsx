import { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import ImageUploader from '../components/ImageUploader';
import DetectionResult from '../components/DetectionResult';
import { DetectionResultData } from '../types/types';

const DiseaseDetection = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<DetectionResultData | null>(null);

  const handleImageUpload = async (file: File) => {
    setIsAnalyzing(true);
    console.log('Uploading image:', file);
    // Simulated API call
    setTimeout(() => {
      setResult({
        disease: "Late Blight",
        confidence: 95.8,
        description: "A serious disease of potatoes and tomatoes caused by the fungus Phytophthora infestans.",
        treatment: "Apply fungicide containing chlorothalonil or copper-based solutions. Remove infected plants to prevent spread.",
        preventiveMeasures: [
          "Maintain good air circulation",
          "Avoid overhead irrigation",
          "Plant resistant varieties",
          "Regular monitoring"
        ]
      });
      setIsAnalyzing(false);
    }, 10000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Crop Disease Detection
        </h1>
        <p className="text-xl text-gray-600">
          Upload an image of your crop to detect diseases and get treatment recommendations
        </p>
      </div>

      {!result && (
        <ImageUploader
          onUpload={handleImageUpload}
          isLoading={isAnalyzing}
        />
      )}

      {result && (
        <DetectionResult
          result={result}
          onReset={() => setResult(null)}
        />
      )}

      <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-start">
          <AlertCircle className="h-6 w-6 text-blue-500 mt-1 mr-3" />
          <div>
            <h3 className="font-semibold text-blue-900">Tips for better results:</h3>
            <ul className="mt-2 text-blue-800 space-y-2">
              <li>• Ensure good lighting when taking photos</li>
              <li>• Focus on the affected area of the plant</li>
              <li>• Include both healthy and diseased parts for comparison</li>
              <li>• Take multiple photos from different angles</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiseaseDetection;
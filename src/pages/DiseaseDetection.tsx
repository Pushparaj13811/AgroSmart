import { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import ImageUploader from '../components/ImageUploader';
import DetectionResult from '../components/DetectionResult';
import { DetectionResultData } from '../types/types';
import { useTranslation } from 'react-i18next';
import PageTransition from '../components/ui/PageTransition';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { aiActions } from '../store/aiSlice';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const DiseaseDetection = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<DetectionResultData | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const { t } = useTranslation();
  const navigate = useNavigate();  // Initialize navigate hook

  const handleImageUpload = async (file: File) => {
    setIsAnalyzing(true);
    try {
      const response = await dispatch(aiActions.diagnoseCrop(file));

      if (aiActions.diagnoseCrop.fulfilled.match(response)) {
        const result = response.payload;
        setResult(result as DetectionResultData);
      }
    } catch (error) {
      console.error('Error diagnosing crop:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleViewHistory = () => {
    navigate('/history');  // Navigate to history page
  };

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {t('diseaseDetection.crop_disease_detection.title')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('diseaseDetection.crop_disease_detection.description')}
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
            result={result.data}
            onReset={() => setResult(null)}
          />
        )}

        {/* Button to view detection history */}
        <button
          onClick={handleViewHistory}
          className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          {t('diseaseDetection.crop_disease_detection.view_history')}
        </button>

        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-start">
            <AlertCircle className="h-6 w-6 text-green-500 mt-1 mr-3" />
            <div>
              <h3 className="font-semibold text-green-900">{t('diseaseDetection.crop_disease_detection.tips.heading')}</h3>
              <ul className="mt-2 text-green-800 space-y-2">
                <li>• {t('diseaseDetection.crop_disease_detection.tips.tip1')}</li>
                <li>• {t('diseaseDetection.crop_disease_detection.tips.tip2')}</li>
                <li>• {t('diseaseDetection.crop_disease_detection.tips.tip3')}</li>
                <li>• {t('diseaseDetection.crop_disease_detection.tips.tip4')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default DiseaseDetection;

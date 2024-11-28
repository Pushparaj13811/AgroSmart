import React from 'react';
import { AlertTriangle, CheckCircle, RefreshCw } from 'lucide-react';

interface DetectionResultProps {
  result: {
    imageUrl: string;
    message: string;
    prediction: {
      predicted_class: string;
      predicted_crop: string;
      isHealthy: string;
      predicted_diseases: string;
      confidence_percentage: number;
    };
    recommendations: {
      curative_measures?: string[]; // Make these optional
      organic_treatment?: string[];
      pesticides?: string[];
      preventive_measures?: string[];
    };
  };
  onReset: () => void;
}

const DetectionResult: React.FC<DetectionResultProps> = ({ result, onReset }) => {
  const isHighConfidence = result.prediction.confidence_percentage > 90;

  // Fallback to empty arrays if undefined
  const curativeMeasures = result.recommendations?.curative_measures || [];
  const organicTreatment = result.recommendations?.organic_treatment || [];
  const pesticides = result.recommendations?.pesticides || [];
  const preventiveMeasures = result.recommendations?.preventive_measures || [];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          {isHighConfidence ? (
            <CheckCircle className="h-8 w-8 text-green-500 mr-3" />
          ) : (
            <AlertTriangle className="h-8 w-8 text-yellow-500 mr-3" />
          )}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {result.prediction.predicted_class} ({result.prediction.predicted_crop})
            </h2>
            <p className="text-gray-600">
              Confidence: {result.prediction.confidence_percentage}%
            </p>
          </div>
        </div>
        <button
          onClick={onReset}
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <RefreshCw className="h-5 w-5 mr-1" />
          New Scan
        </button>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Prediction</h3>
          <p className="text-gray-700">Disease: {result.prediction.predicted_diseases}</p>
          <p className="text-gray-700">Health Status: {result.prediction.isHealthy}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Image</h3>
          <img
            src={result.imageUrl}
            alt="Crop diagnosis"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Curative Measures</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {curativeMeasures.map((measure, index) => (
              <li key={index}>{measure}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Organic Treatment</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {organicTreatment.map((treatment, index) => (
              <li key={index}>{treatment}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Pesticides</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {pesticides.map((pesticide, index) => (
              <li key={index}>{pesticide}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Preventive Measures</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {preventiveMeasures.map((measure, index) => (
              <li key={index}>{measure}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetectionResult;

import React from 'react';
import { AlertTriangle, CheckCircle, RefreshCw } from 'lucide-react';

interface DetectionResultProps {
  result: {
    disease: string;
    confidence: number;
    description: string;
    treatment: string;
    preventiveMeasures: string[];
  };
  onReset: () => void;
}

const DetectionResult: React.FC<DetectionResultProps> = ({ result, onReset }) => {
  const isHighConfidence = result.confidence > 90;

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
              {result.disease}
            </h2>
            <p className="text-gray-600">
              Confidence: {result.confidence}%
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
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Description
          </h3>
          <p className="text-gray-700">{result.description}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Recommended Treatment
          </h3>
          <p className="text-gray-700">{result.treatment}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Preventive Measures
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {result.preventiveMeasures.map((measure, index) => (
              <li key={index}>{measure}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetectionResult;
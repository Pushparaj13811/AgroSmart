import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
    ArrowLeft,
    Calendar,
    Scan,
    Sparkles,
    Shield,
    Microscope
} from 'lucide-react';

import { Badge } from '../components/ui/Badge';
import { Card, CardContent, CardHeader } from '../components/ui/Card';
import PageTransition from '../components/ui/PageTransition';
import { aiActions } from '../store/aiSlice';
import { AppDispatch } from '../store/store';
import { useDispatch } from 'react-redux';
import { HistoryItem } from '../types/types';


const HistoryDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const [historyItem, setHistoryItem] = useState<HistoryItem | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        const fetchHistoryItem = async () => {
            try {
                setIsLoading(true);
                if (!id) {
                    throw new Error('No history item ID provided');
                }
                const response = await dispatch(aiActions.historyDetail(id));
                if (aiActions.historyDetail.fulfilled.match(response)) {
                    setHistoryItem(response.payload.data.cropImage);
                }
            } catch (error) {
                console.error('Error fetching history item:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchHistoryItem();
    }, [id, dispatch]);


    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const getConfidenceColor = (confidence: number) => {
        if (confidence > 80) return 'success';
        if (confidence > 50) return 'warning';
        return 'error';
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500"></div>
            </div>
        );
    }

    if (!historyItem) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen text-center">
                <Microscope className="w-24 h-24 text-gray-400 mb-4" />
                <h2 className="text-2xl font-bold text-gray-700">No History Item Found</h2>
                <Link
                    to="/history"
                    className="mt-4 px-6 py-2 bg-green-700 text-white rounded-full hover:bg-green-700 transition-colors"
                >
                    Back to History
                </Link>
            </div>
        );
    }

    return (
        <PageTransition>
            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <Link
                    to="/history"
                    className="inline-flex items-center mb-6 text-green-600 hover:green-blue-800 transition-colors"
                >
                    <ArrowLeft className="mr-2" /> Back to History
                </Link>

                <Card className="shadow-xl">
                    <CardHeader className="bg-gray-50 p-6 border-b">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-3xl font-bold flex items-center gap-3">
                                    <Scan className="text-green-600" />
                                    {historyItem.prediction.predicted_crop}
                                </h1>
                                <p className="text-gray-600 mt-2">
                                    Disease Detection Report
                                </p>
                            </div>
                            <Badge
                                variant={getConfidenceColor(historyItem.prediction.confidence_percentage)}
                                className="text-base px-4 py-2"
                            >
                                {historyItem.prediction.confidence_percentage}% Confidence
                            </Badge>
                        </div>
                    </CardHeader>
                    <CardContent className="p-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <img
                                    src={historyItem.image || '/default-image.jpg'}
                                    alt="Crop Disease"
                                    className="w-full h-64 object-cover rounded-lg shadow-md"
                                />
                            </div>
                            <div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <Sparkles className="text-green-600" />
                                        <div>
                                            <h3 className="font-semibold text-gray-800">Detected Disease</h3>
                                            <p className="text-gray-600">
                                                {historyItem.prediction.predicted_diseases}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Calendar className="text-green-600" />
                                        <div>
                                            <h3 className="font-semibold text-gray-800">Detection Date</h3>
                                            <p className="text-gray-600">
                                                {formatDate(historyItem.createdAt)}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Shield className="text-green-600" />
                                        <div>
                                            <h3 className="font-semibold text-gray-800">Reliability</h3>
                                            <div className="flex items-center gap-2">
                                                <div
                                                    className={`h-2 w-2 rounded-full ${historyItem.prediction.confidence_percentage > 80
                                                        ? 'bg-green-500'
                                                        : historyItem.prediction.confidence_percentage > 50
                                                            ? 'bg-yellow-500'
                                                            : 'bg-red-500'
                                                        }`}
                                                />
                                                <span className="text-gray-600">
                                                    {historyItem.prediction.confidence_percentage > 80
                                                        ? 'High Reliability'
                                                        : historyItem.prediction.confidence_percentage > 50
                                                            ? 'Medium Reliability'
                                                            : 'Low Reliability'}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Recommendations Section */}
                                    <div className="mt-6">
                                        <h3 className="font-semibold text-gray-800 mb-2">Recommendations</h3>

                                        {/* Curative Measures */}
                                        {historyItem.recommendations?.curative_measures && (
                                            <div className="mb-4">
                                                <h4 className="font-medium text-gray-700">Curative Measures</h4>
                                                <ul className="list-disc pl-5">
                                                    {historyItem.recommendations.curative_measures.map((item, index) => (
                                                        <li key={index} className="text-gray-600">{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Organic Treatment */}
                                        {historyItem.recommendations?.organic_treatment && (
                                            <div className="mb-4">
                                                <h4 className="font-medium text-gray-700">Organic Treatment</h4>
                                                <ul className="list-disc pl-5">
                                                    {historyItem.recommendations.organic_treatment.map((item, index) => (
                                                        <li key={index} className="text-gray-600">{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Pesticides */}
                                        {historyItem.recommendations?.pesticides && (
                                            <div className="mb-4">
                                                <h4 className="font-medium text-gray-700">Pesticides</h4>
                                                <ul className="list-disc pl-5">
                                                    {historyItem.recommendations.pesticides.map((item, index) => (
                                                        <li key={index} className="text-gray-600">{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                        {/* Preventive Measures */}
                                        {historyItem.recommendations?.preventive_measures && (
                                            <div>
                                                <h4 className="font-medium text-gray-700">Preventive Measures</h4>
                                                <ul className="list-disc pl-5">
                                                    {historyItem.recommendations.preventive_measures.map((item, index) => (
                                                        <li key={index} className="text-gray-600">{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </PageTransition>
    );
};

export default HistoryDetailPage;

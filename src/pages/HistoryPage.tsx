import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Calendar, Scan, Sparkles } from 'lucide-react';

import PageTransition from '../components/ui/PageTransition';
import { AppDispatch } from '../store/store';
import { aiActions } from '../store/aiSlice';
import { Card, CardContent, CardFooter } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

const HistoryPage = () => {
    const { t } = useTranslation();
    const [history, setHistory] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                setIsLoading(true);
                const response = await dispatch(aiActions.history());
                const historyData = response.payload.data.cropImages;

                if (Array.isArray(historyData)) {
                    setHistory(historyData);
                } else {
                    console.error('History data is not an array:', historyData);
                }
            } catch (error) {
                console.error('Error fetching history:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchHistory();
    }, [dispatch]);

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
        if (confidence > 80) return 'bg-green-100 text-green-800';
        if (confidence > 50) return 'bg-yellow-100 text-yellow-800';
        return 'bg-red-100 text-red-800';
    };

    if (isLoading) {
        return (
            <PageTransition>
                <div className="flex justify-center items-center min-h-screen">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500"></div>
                </div>
            </PageTransition>
        );
    }

    return (
        <PageTransition>
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4 flex justify-center items-center gap-3">
                        <Scan className="w-10 h-10 text-green-600" />
                        {t('diseaseDetection.history.title')}
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        {t('diseaseDetection.history.description')}
                    </p>
                </div>

                {history.length === 0 ? (
                    <div className="text-center py-16 bg-gray-50 rounded-lg">
                        <Sparkles className="mx-auto w-16 h-16 text-gray-400 mb-4" />
                        <p className="text-xl text-gray-600">
                            {t('diseaseDetection.history.no_history')}
                        </p>
                        <Link
                            to="/detect"
                            className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                        >
                            Start First Detection
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {history.map((item: any, index: number) => {
                            const prediction = item.prediction;
                            return (
                                <Link key={index} to={`/history/${item._id}`}>
                                    <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                        <div className="relative overflow-hidden rounded-t-lg">
                                            <img
                                                src={item.image || '/default-image.jpg'}
                                                alt="Crop Disease"
                                                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                                            />
                                        </div>
                                        <CardContent className="p-4">
                                            {prediction ? (
                                                <>
                                                    <div className="mb-2">
                                                        <h3 className="text-lg font-bold text-gray-900">
                                                            {prediction.predicted_crop}
                                                        </h3>
                                                        <Badge
                                                            variant="secondary"
                                                            className={`${getConfidenceColor(prediction.confidence_percentage)} mt-1`}
                                                        >
                                                            {prediction.confidence_percentage}% Confidence
                                                        </Badge>
                                                    </div>
                                                    <div className="text-sm text-gray-600 flex items-center gap-2 mt-2">
                                                        <Sparkles className="w-4 h-4" />
                                                        {prediction.predicted_diseases}
                                                    </div>
                                                </>
                                            ) : (
                                                <p className="text-gray-600">No prediction data available</p>
                                            )}
                                        </CardContent>
                                        <CardFooter className="flex items-center justify-between p-4 border-t">
                                            <div className="flex items-center gap-2 text-gray-500">
                                                <Calendar className="w-4 h-4" />
                                                <span className="text-xs">
                                                    {formatDate(item.createdAt)}
                                                </span>
                                            </div>
                                        </CardFooter>
                                    </Card>
                                </Link>
                            );
                        })}
                    </div>
                )}

                <div className="mt-12 text-center">
                    <Link
                        to="/detect"
                        className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors inline-flex items-center gap-2"
                    >
                        <Scan className="w-5 h-5" />
                        {t('diseaseDetection.history.back_to_detection')}
                    </Link>
                </div>
            </div>
        </PageTransition>
    );
};

export default HistoryPage;
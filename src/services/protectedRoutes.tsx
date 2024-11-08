import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store/store';
import LoadingSpinner from '../components/LoadingSpinner';
import { ProtectedRouteProps } from '../types/types';

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, adminOnly = false }) => {
    const navigate = useNavigate();
    const { user, status } = useSelector((state: RootState) => state.user);

    useEffect(() => {
        if (status === 'loading') return;

        if (!user) {
            navigate('/login', { replace: true });
        } else if (adminOnly && user.role !== 'admin') {
            navigate('/', { replace: true });
        }
    }, [user, status, adminOnly, navigate]);


    if (status === 'loading') {
        return <LoadingSpinner />;
    }

    if (!user || (adminOnly && user.role !== 'admin')) {
        return null;
    }

    return <>{children}</>;
};

export default ProtectedRoute;

import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch, RootState } from '../store/store';
import LoadingSpinner from '../components/LoadingSpinner';
import { ProtectedRouteProps } from '../types/types';
import { userActions } from '../store/userSlice';
import FlowerSpinner from '../components/FlowerSpinner';

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, adminOnly = false }) => {
    const navigate = useNavigate();
    const { user, status } = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch<AppDispatch>();
    const [isTokenValid, setIsTokenValid] = useState<boolean | null>(null);

    const isValidToken = useCallback(async () => {
        try {
            const response = await dispatch(userActions.validateAccessToken());
            if (userActions.validateAccessToken.fulfilled.match(response)) {
                return response.payload.isValid;
            } else {
                return false;
            }
        } catch (error) {
            return false;
        }
    }, [dispatch]);

    useEffect(() => {
        async () => {
            const valid = await isValidToken();
            setIsTokenValid(valid);
        };

        if (status === 'loading') return;

        if (!user || !isValidToken) {
            navigate('/login', { replace: true });
        } else if (adminOnly && user.role !== 'admin') {
            navigate('/profile', { replace: true });
        }
    }, [user, status, isTokenValid, adminOnly, navigate, isValidToken]);

    if (status === 'loading') {
        return <FlowerSpinner />;
    }

    if (!user || (adminOnly && user.role !== 'admin')) {
        return null;
    }

    return <>{children}</>;
};

export default ProtectedRoute;

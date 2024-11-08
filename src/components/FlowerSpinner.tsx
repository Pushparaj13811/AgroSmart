import React from 'react';
import { FlowerSpinnerProps } from '../types/types';

const FlowerSpinner: React.FC<FlowerSpinnerProps> = ({
    size = 40,
    color = '#4ade80'
}) => {
    return (
        <div className='h-32 flex items-center justify-center'>
            <div
                className="relative"
                style={{
                    width: size,
                    height: size
                }}
            >
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-3/12 h-2/6 origin-bottom"
                        style={{
                            left: '50%',
                            top: '50%',
                            transform: `translate(-50%, -100%) rotate(${i * 45}deg)`,
                        }}
                    >
                        <div
                            className="w-full h-full rounded-full animate-pulse"
                            style={{
                                backgroundColor: color,
                                animation: `flowerPetal 1.5s ease-in-out infinite`,
                                animationDelay: `${i * 0.1}s`,
                            }}
                        />
                    </div>
                ))}
                <div
                    className="absolute rounded-full animate-spin"
                    style={{
                        width: size * 0.2,
                        height: size * 0.2,
                        backgroundColor: '#fbbf24',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                />
            </div>
        </div>
    );
};

export default FlowerSpinner;
import React from 'react';

const LoadingBanner = ({ isLoading }) => {
    return (
        <>
            {isLoading && (
                <div className="fixed top-0 left-0 w-full bg-blue-500 text-white text-center py-2">
                    Submitting...
                </div>
            )}
        </>
    );
};

export default LoadingBanner;

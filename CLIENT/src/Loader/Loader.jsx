import React from 'react';
import './Loader.css'

const Loader = () => (
    <div className="flex justify-center items-center h-screen bg-main">
        <div className="spinner-border text-sky-500" role="status">
            <div className="loader">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

        </div>
    </div>
);

export default Loader;

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Step1_Home from './Step1_Home';
import Step2_Data from './Step2_Data';
import Step4_Review from './Step4_Review';
import Step5_Success from './Step5_Success';
import './PQRS.css';

const PQRSFlow = () => {
    return (
        <div className="pqrs-module">
            <Routes>
                <Route index element={<Step1_Home />} />
                <Route path="datos" element={<Step2_Data />} />
                <Route path="revision" element={<Step4_Review />} />
                <Route path="confirmacion" element={<Step5_Success />} />
                <Route path="*" element={<Navigate to="." replace />} />
            </Routes>
        </div>
    );
};

export default PQRSFlow;

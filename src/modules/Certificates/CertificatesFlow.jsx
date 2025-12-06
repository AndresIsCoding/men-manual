import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Step1_Home from './Step1_Home';
import Step2_Data from './Step2_Data';
import Step3_Details from './Step3_Details';
import Step4_Review from './Step4_Review';
import Step5_Success from './Step5_Success';
import './Certificates.css';

const CertificatesFlow = () => {
    return (
        <div className="certificates-module">
            <Routes>
                <Route index element={<Step1_Home />} />
                <Route path="datos" element={<Step2_Data />} />
                <Route path="detalles" element={<Step3_Details />} />
                <Route path="revision" element={<Step4_Review />} />
                <Route path="confirmacion" element={<Step5_Success />} />
                <Route path="*" element={<Navigate to="." replace />} />
            </Routes>
        </div>
    );
};

export default CertificatesFlow;

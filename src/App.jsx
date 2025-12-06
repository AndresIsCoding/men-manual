import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './modules/Home/Home';
import CertificatesFlow from './modules/Certificates/CertificatesFlow';
import PQRSFlow from './modules/PQRS/PQRSFlow';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="certificados/*" element={<CertificatesFlow />} />
        <Route path="pqrs/*" element={<PQRSFlow />} />
      </Route>
    </Routes>
  );
}

export default App;

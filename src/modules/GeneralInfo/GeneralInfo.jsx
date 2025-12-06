import React, { useState } from 'react';
import { generalInfoData } from './GeneralInfoData';
import './GeneralInfo.css';

const GeneralInfo = () => {
    const [activeSection, setActiveSection] = useState(null);

    const toggleSection = (id) => {
        if (activeSection === id) {
            setActiveSection(null);
        } else {
            setActiveSection(id);
        }
    };

    return (
        <div className="general-info-container">
            <h1 className="general-info-title">Información General</h1>
            <p className="general-info-subtitle">Manual de Usuario – Solicitud de Certificados Estudiantiles</p>

            <div className="info-list">
                {generalInfoData.map((item) => (
                    <div key={item.id} className={`info-item ${activeSection === item.id ? 'active' : ''}`}>
                        <div
                            className="info-header"
                            onClick={() => toggleSection(item.id)}
                        >
                            <h2>{item.title}</h2>
                            <span className="toggle-icon">{activeSection === item.id ? '−' : '+'}</span>
                        </div>
                        {activeSection === item.id && (
                            <div className="info-content" dangerouslySetInnerHTML={{ __html: item.content }} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GeneralInfo;

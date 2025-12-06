import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, User, Users, ShieldCheck } from 'lucide-react';
import Button from '../../components/Button';
import Card from '../../components/Card';
import InteractionHint from '../../components/InteractionHint';

const Step1_Home = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('estudiante');

    const handleStartProcess = () => {
        navigate('datos');
    };

    return (
        <div className="container">
            <div className="cert-header">
                <div className="text-sm text-light mb-md">
                    Atención y servicio {'>'} Estudiante {'>'} Certificados
                </div>
                <h1 className="cert-title">Certificados para estudiantes</h1>
                <p className="cert-subtitle">
                    Consulta y genera certificados relacionados con tus estudios y trámites del sector educativo.
                </p>
            </div>

            <div className="flex gap-sm mb-lg">
                <Button
                    variant={activeTab === 'estudiante' ? 'primary' : 'ghost'}
                    onClick={() => setActiveTab('estudiante')}
                    icon={User}
                >
                    Estudiante
                </Button>
                <Button
                    variant={activeTab === 'ciudadano' ? 'primary' : 'ghost'}
                    onClick={() => setActiveTab('ciudadano')}
                    icon={Users}
                >
                    Ciudadano
                </Button>
                <Button
                    variant={activeTab === 'funcionario' ? 'primary' : 'ghost'}
                    onClick={() => setActiveTab('funcionario')}
                    icon={ShieldCheck}
                >
                    Funcionario
                </Button>
            </div>

            <div className="mb-xl">
                <h2 className="text-xl font-bold mb-md">Trámites de certificados disponibles</h2>
                <div className="flex flex-col gap-md">

                    {/* Certificate Item 1 */}
                    <Card className="flex justify-between items-center">
                        <div className="flex gap-md">
                            <div style={{ width: 60, height: 60, background: '#E6F0FF', borderRadius: 8 }}></div>
                            <div>
                                <h3 className="font-bold text-lg mb-xs">
                                    Certificado de estudios <span className="text-sm font-medium" style={{ background: '#F3F4F6', padding: '2px 8px', borderRadius: 4 }}>En línea</span>
                                </h3>
                                <p className="text-light text-sm mb-xs">
                                    Obtén un certificado que acredita tus estudios cursados en instituciones educativas oficiales o reconocidas.
                                </p>
                                <div className="text-xs text-light">
                                    Tiempo estimado: Inmediato • Costo: sin costo ante el Ministerio
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-sm items-end relative">
                            <InteractionHint message="Haz clic aquí para iniciar" position="right" />
                            <Button onClick={handleStartProcess}>Iniciar trámite</Button>
                            <Button variant="ghost" size="small">Ver requisitos</Button>
                        </div>
                    </Card>

                    {/* Certificate Item 2 */}
                    <Card className="flex justify-between items-center">
                        <div className="flex gap-md">
                            <div style={{ width: 60, height: 60, background: '#E6F0FF', borderRadius: 8 }}></div>
                            <div>
                                <h3 className="font-bold text-lg mb-xs">
                                    Certificado de notas <span className="text-sm font-medium" style={{ background: '#F3F4F6', padding: '2px 8px', borderRadius: 4 }}>Con institución</span>
                                </h3>
                                <p className="text-light text-sm mb-xs">
                                    Consulta la información sobre cómo solicitar certificados de calificaciones en tu institución educativa.
                                </p>
                                <div className="text-xs text-light">
                                    Tiempo estimado: depende de la institución
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-sm items-end">
                            <Button variant="secondary">Ver guía</Button>
                            <Button variant="ghost" size="small">Preguntas frecuentes</Button>
                        </div>
                    </Card>

                </div>
            </div>

            <Card className="bg-gray-50 flex gap-lg items-center">
                <div className="flex-1">
                    <h3 className="font-bold mb-sm">¿Necesitas ayuda con un certificado?</h3>
                    <p className="text-sm text-light mb-md">
                        Comunícate con nosotros si tienes dudas sobre requisitos, tiempos o el estado de tu trámite.
                    </p>
                    <div className="flex flex-col gap-sm">
                        <div className="flex gap-sm items-center bg-white p-sm rounded shadow-sm">
                            <div style={{ width: 40, height: 40, background: '#004884', borderRadius: 4 }}></div>
                            <div>
                                <div className="font-bold text-sm">Chatea con un asesor</div>
                                <div className="text-xs text-light">Atención en línea en horario laboral.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Step1_Home;

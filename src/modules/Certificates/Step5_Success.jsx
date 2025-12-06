import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Download, Search, ArrowLeft } from 'lucide-react';
import Button from '../../components/Button';
import Card from '../../components/Card';

const Step5_Success = () => {
    return (
        <div className="container">
            <div className="cert-header">
                <div className="text-sm text-light mb-md">
                    Atención y servicio {'>'} Estudiante {'>'} Certificados {'>'} Iniciar trámite {'>'} Confirmación
                </div>
                <h1 className="cert-title">Solicitud enviada correctamente</h1>
                <p className="cert-subtitle">
                    Hemos generado el número de radicado para tu trámite de certificado. Guarda esta información para hacer seguimiento o descargar el documento cuando esté disponible.
                </p>
            </div>

            <div className="grid gap-xl" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
                <div>
                    <div className="flex gap-md items-start mb-xl">
                        <CheckCircle size={48} color="var(--color-success)" />
                        <div>
                            <h2 className="text-xl font-bold mb-xs">Número de radicado generado</h2>
                            <p className="text-light mb-lg">
                                Con este número podrás consultar el estado de tu solicitud y acceder al certificado cuando haya sido emitido.
                            </p>

                            <div className="text-3xl font-bold mb-xs">2025-123456-789</div>

                            <div className="grid grid-cols-2 gap-y-sm text-sm mt-lg" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', rowGap: '0.5rem' }}>
                                <span className="text-light">Fecha y hora de radicación</span>
                                <span className="text-right font-medium">05 de diciembre de 2025 • 10:32 a. m.</span>
                                <span className="text-light">Canal de respuesta</span>
                                <span className="text-right font-medium">Correo electrónico • correo@ejemplo.com</span>
                                <span className="text-light">Tiempo estimado de respuesta</span>
                                <span className="text-right font-medium">Hasta 5 días hábiles</span>
                            </div>
                        </div>
                    </div>

                    <div className="mb-xl">
                        <h3 className="font-bold mb-md">¿Qué puedes hacer a continuación?</h3>
                        <ul className="list-disc pl-lg text-sm text-light space-y-sm" style={{ lineHeight: '1.6' }}>
                            <li>Haz seguimiento al estado de tu trámite usando el número de radicado en la sección Consulta de trámites del portal.</li>
                            <li>Revisa tu correo electrónico. Te enviaremos la confirmación de radicación y, posteriormente, el enlace para descargar el certificado en PDF.</li>
                            <li>Si detectas un error en la información enviada, comunícate con nuestras líneas de atención para recibir orientación.</li>
                        </ul>
                    </div>

                    <div className="flex gap-md mt-xl">
                        <Button icon={Download}>Descargar comprobante</Button>
                        <Button variant="secondary" icon={Search}>Ir a seguimiento de trámites</Button>
                    </div>

                    <div className="mt-lg">
                        <Link to="/certificados" className="flex items-center gap-sm text-primary font-medium text-sm">
                            <ArrowLeft size={16} /> Volver a Atención y servicio
                        </Link>
                    </div>
                </div>

                <div>
                    <Card className="bg-gray-50 mb-md">
                        <h3 className="font-bold mb-sm">Resumen del trámite</h3>
                        <div className="text-sm mb-xs flex justify-between">
                            <span className="text-light">Tipo de trámite</span>
                            <span className="font-medium">Certificado de estudios</span>
                        </div>
                        <div className="text-sm mb-xs flex justify-between">
                            <span className="text-light">Certificado solicitado</span>
                            <span className="font-medium">Estudios aprobados</span>
                        </div>
                        <div className="text-sm mb-xs flex justify-between">
                            <span className="text-light">Estado</span>
                            <span className="font-medium text-success">Radicado</span>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Step5_Success;

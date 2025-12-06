import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Download, Search, ArrowLeft, Copy } from 'lucide-react';
import Button from '../../components/Button';
import Card from '../../components/Card';

const Step5_Success = () => {
    return (
        <div className="container">
            <div className="pqrs-header">
                <div className="text-sm text-light mb-md">
                    Atención y servicio {'>'} Ciudadano {'>'} Peticiones (PQRD) {'>'} Confirmación de envío
                </div>
                <h1 className="pqrs-title">Tu PQRD fue enviada correctamente</h1>
                <p className="pqrs-subtitle">
                    Hemos generado el número de radicado de tu solicitud. A partir de este momento el Ministerio de Educación Nacional realizará el análisis y te enviará la respuesta por el medio de contacto registrado.
                </p>
            </div>

            <div className="grid gap-xl" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
                <div>
                    <div className="flex gap-md items-start mb-xl">
                        <CheckCircle size={48} color="var(--color-success)" />
                        <div>
                            <h2 className="text-xl font-bold mb-xs">Radicado generado y en trámite</h2>
                            <p className="text-light mb-lg">
                                Conserva este número para consultar el estado de tu solicitud o aportar información adicional si es necesario.
                            </p>

                            <div className="text-3xl font-bold mb-xs flex items-center gap-sm">
                                2025-123456-PQRD
                            </div>
                            <div className="flex gap-sm mb-lg">
                                <span className="text-xs font-bold bg-blue-100 text-blue-800 px-2 py-1 rounded" style={{ backgroundColor: '#DBEAFE', color: '#1E40AF' }}>Estado: Recibida</span>
                                <span className="text-xs text-light">Fecha y hora: 06/12/2025 • 10:34 a. m.</span>
                            </div>

                            <div className="flex gap-md mb-xl">
                                <Button icon={Download}>Descargar comprobante (PDF)</Button>
                                <Button variant="secondary" icon={Search}>Consultar estado del radicado</Button>
                                <Button variant="ghost" icon={Copy}>Copiar número</Button>
                            </div>
                        </div>
                    </div>

                    <div className="mb-xl">
                        <div className="grid grid-cols-2 gap-xl" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            <div>
                                <h3 className="font-bold mb-sm">¿Cuándo recibirás respuesta?</h3>
                                <ul className="list-disc pl-lg text-sm text-light space-y-sm" style={{ lineHeight: '1.6' }}>
                                    <li><strong>Plazo estimado:</strong> hasta 15 días hábiles, según la normatividad vigente.</li>
                                    <li>La respuesta se enviará a tu <strong>correo electrónico</strong> o medio preferido.</li>
                                    <li>En algunos casos podríamos contactarte para solicitar información adicional.</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold mb-sm">¿Cómo hacer seguimiento?</h3>
                                <ul className="list-disc pl-lg text-sm text-light space-y-sm" style={{ lineHeight: '1.6' }}>
                                    <li>Usa la opción <strong>"Consultar estado del radicado"</strong> o el módulo de consulta de trámites.</li>
                                    <li>Ten a la mano el número de radicado y tu número de documento.</li>
                                    <li>Si no recibes respuesta en el plazo indicado, puedes presentar un seguimiento o queja.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-xl pt-xl border-t" style={{ borderColor: 'var(--color-border)' }}>
                        <h3 className="font-bold mb-md">¿Qué quieres hacer ahora?</h3>
                        <p className="text-sm text-light mb-md">Elige una de las siguientes opciones para continuar en el portal.</p>
                        <div className="flex gap-md">
                            <Link to="/">
                                <Button variant="secondary">Volver a Atención y servicio</Button>
                            </Link>
                            <Link to="/pqrs">
                                <Button variant="secondary">Radicar otra PQRD</Button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div>
                    <Card className="bg-gray-50 mb-md">
                        <h3 className="font-bold mb-sm">Resumen del trámite</h3>
                        <div className="text-sm mb-xs flex justify-between">
                            <span className="text-light">Tipo de canal</span>
                            <span className="font-medium">Peticiones (PQRD) en línea</span>
                        </div>
                        <div className="text-sm mb-xs flex justify-between">
                            <span className="text-light">Estado del trámite</span>
                            <span className="font-medium">Recibida • En análisis</span>
                        </div>
                        <div className="text-sm mb-xs flex justify-between">
                            <span className="text-light">Radicado</span>
                            <span className="font-medium">2025-123456-PQRD</span>
                        </div>
                        <div className="text-sm mb-xs flex justify-between">
                            <span className="text-light">Fecha de radicación</span>
                            <span className="font-medium">06/12/2025</span>
                        </div>
                        <div className="text-sm mb-xs flex justify-between">
                            <span className="text-light">Tiempo estimado de respuesta</span>
                            <span className="font-medium text-right">Hasta 15 días hábiles</span>
                        </div>
                        <div className="mt-md text-xs text-light">
                            Con este número podrás consultar el estado de tu PQRD, adjuntar documentos adicionales o presentar recursos relacionados.
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Step5_Success;

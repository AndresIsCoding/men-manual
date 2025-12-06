import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Card from '../../components/Card';

const Step4_Review = () => {
    const navigate = useNavigate();
    const [agreed, setAgreed] = useState(false);

    const handleSubmit = () => {
        if (agreed) {
            navigate('/certificados/confirmacion');
        }
    };

    const handleBack = () => {
        navigate('/certificados/detalles');
    };

    return (
        <div className="container">
            <div className="cert-header">
                <div className="text-sm text-light mb-md">
                    Atención y servicio {'>'} Estudiante {'>'} Certificados {'>'} Iniciar trámite {'>'} Revisión
                </div>
                <h1 className="cert-title">Revisión y envío del trámite</h1>
                <p className="cert-subtitle">
                    Verifica que todos los datos de tu solicitud sean correctos antes de generar el número de radicado y enviarla para su gestión.
                </p>
            </div>

            <div className="cert-steps">
                <div className="cert-step cert-step--active">
                    <div className="cert-step__number">1</div>
                    <span>Tus datos</span>
                </div>
                <div className="cert-step cert-step--active">
                    <div className="cert-step__number">2</div>
                    <span>Detalles del certificado</span>
                </div>
                <div className="cert-step cert-step--active">
                    <div className="cert-step__number">3</div>
                    <span>Revisión y envío</span>
                </div>
            </div>

            <div className="grid gap-xl" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
                <div>
                    <h2 className="text-lg font-bold mb-md">Resumen de la información registrada</h2>
                    <p className="text-sm text-light mb-lg">Si necesitas corregir algo, utiliza los enlaces de editar en cada bloque antes de enviar tu trámite.</p>

                    <div className="mb-xl border-b pb-lg" style={{ borderColor: 'var(--color-border)' }}>
                        <div className="flex justify-between items-center mb-md">
                            <h3 className="font-bold">1. Datos del solicitante</h3>
                            <Button variant="ghost" size="small">Editar datos</Button>
                        </div>
                        <div className="grid grid-cols-2 gap-y-sm text-sm" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', rowGap: '0.5rem' }}>
                            <span className="text-light">Nombre completo</span>
                            <span className="text-right font-medium">Nombre del estudiante</span>
                            <span className="text-light">Tipo y número de documento</span>
                            <span className="text-right font-medium">CC • 1.234.567.890</span>
                            <span className="text-light">Correo electrónico</span>
                            <span className="text-right font-medium">correo@ejemplo.com</span>
                            <span className="text-light">Teléfono de contacto</span>
                            <span className="text-right font-medium">+57 300 000 0000</span>
                        </div>
                    </div>

                    <div className="mb-xl border-b pb-lg" style={{ borderColor: 'var(--color-border)' }}>
                        <div className="flex justify-between items-center mb-md">
                            <h3 className="font-bold">2. Detalles del certificado</h3>
                            <Button variant="ghost" size="small">Editar certificado</Button>
                        </div>
                        <div className="grid grid-cols-2 gap-y-sm text-sm" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', rowGap: '0.5rem' }}>
                            <span className="text-light">Certificado solicitado</span>
                            <span className="text-right font-medium">Certificado de estudios aprobados</span>
                            <span className="text-light">Nivel educativo</span>
                            <span className="text-right font-medium">Por definir</span>
                            <span className="text-light">Años / grados a incluir</span>
                            <span className="text-right font-medium">Grado 11 • 2019 - 2021</span>
                            <span className="text-light">Idioma del certificado</span>
                            <span className="text-right font-medium">Español</span>
                        </div>
                    </div>

                    <div className="mb-xl">
                        <h3 className="font-bold mb-md">Confirmación antes de enviar</h3>
                        <p className="text-sm text-light mb-md">Lee con atención y marca la casilla de autorización para poder generar el número de radicado.</p>

                        <div className="flex gap-sm items-start p-md bg-gray-50 rounded" style={{ backgroundColor: '#F9FAFB' }}>
                            <input
                                type="checkbox"
                                id="terms"
                                className="mt-1"
                                checked={agreed}
                                onChange={(e) => setAgreed(e.target.checked)}
                            />
                            <label htmlFor="terms" className="text-sm">
                                Declaro que la información suministrada es verídica y autorizo el tratamiento de mis datos personales de acuerdo con la política de tratamiento de datos del Ministerio de Educación Nacional.
                            </label>
                        </div>

                        <div className="mt-md p-sm rounded text-sm" style={{ backgroundColor: '#FFF8E1', color: '#B45309' }}>
                            Al enviar tu solicitud se generará un número de radicado y recibirás un correo de confirmación con el resumen del trámite y los tiempos estimados de respuesta.
                        </div>
                    </div>

                    <div className="flex justify-end gap-md mt-xl">
                        <Button variant="secondary" onClick={handleBack}>Volver</Button>
                        <Button onClick={handleSubmit} disabled={!agreed} className={!agreed ? 'opacity-50 cursor-not-allowed' : ''}>Enviar</Button>
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
                            <span className="text-light">Certificado seleccionado</span>
                            <span className="font-medium">Estudios aprobados</span>
                        </div>
                        <div className="text-sm mb-xs flex justify-between">
                            <span className="text-light">Tiempo estimado</span>
                            <span className="font-medium">Hasta 5 días hábiles</span>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Step4_Review;

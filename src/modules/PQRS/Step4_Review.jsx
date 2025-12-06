import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Card from '../../components/Card';

const Step4_Review = () => {
    const navigate = useNavigate();
    const [agreed, setAgreed] = useState(false);

    const handleSubmit = () => {
        if (agreed) {
            navigate('/pqrs/confirmacion');
        }
    };

    const handleBack = () => {
        navigate('/pqrs/datos');
    };

    return (
        <div className="container">
            <div className="pqrs-header">
                <div className="text-sm text-light mb-md">
                    Atención y servicio {'>'} Ciudadano {'>'} Peticiones (PQRD) {'>'} Revisión y envío
                </div>
                <h1 className="pqrs-title">Revisa y confirma tu PQRD</h1>
                <p className="pqrs-subtitle">
                    Verifica que la información registrada sobre tu solicitud y tus datos de contacto esté correcta antes de generar el número de radicado y enviarla al Ministerio.
                </p>
            </div>

            <div className="pqrs-steps">
                <div className="pqrs-step pqrs-step--active">
                    <div className="pqrs-step__number">1</div>
                    <span>Tipo de solicitud</span>
                </div>
                <div className="pqrs-step pqrs-step--active">
                    <div className="pqrs-step__number">2</div>
                    <span>Datos del solicitante</span>
                </div>
                <div className="pqrs-step pqrs-step--active">
                    <div className="pqrs-step__number">3</div>
                    <span>Revisión y envío</span>
                </div>
            </div>

            <div className="grid gap-xl" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
                <div>
                    <h2 className="text-lg font-bold mb-md">Resumen de la solicitud</h2>
                    <p className="text-sm text-light mb-lg">Confirma que el tipo de solicitud, los temas seleccionados y la descripción de tu PQRD sean correctos.</p>

                    <div className="mb-xl border-b pb-lg" style={{ borderColor: 'var(--color-border)' }}>
                        <div className="flex justify-between items-center mb-md">
                            <h3 className="font-bold">1. Detalles de la PQRD</h3>
                            <Button variant="ghost" size="small">Editar tipo de solicitud</Button>
                        </div>
                        <div className="grid grid-cols-2 gap-y-sm text-sm" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', rowGap: '0.5rem' }}>
                            <span className="text-light">Tipo de solicitud</span>
                            <span className="text-right font-medium">Petición</span>
                            <span className="text-light">Tema principal</span>
                            <span className="text-right font-medium">Educación básica y media</span>
                            <span className="text-light">Canal de radicación</span>
                            <span className="text-right font-medium">Formulario web ciudadano</span>
                        </div>
                        <div className="mt-md">
                            <span className="text-light text-sm block mb-xs">Resumen de la descripción:</span>
                            <p className="text-sm font-medium">Solicito información detallada sobre los lineamientos para la matrícula de estudiantes desplazados y acceso a apoyos complementarios.</p>
                        </div>
                    </div>

                    <div className="mb-xl border-b pb-lg" style={{ borderColor: 'var(--color-border)' }}>
                        <div className="flex justify-between items-center mb-md">
                            <h3 className="font-bold">2. Datos del solicitante</h3>
                            <Button variant="ghost" size="small">Editar datos de contacto</Button>
                        </div>
                        <div className="grid grid-cols-2 gap-y-sm text-sm" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', rowGap: '0.5rem' }}>
                            <span className="text-light">Nombre completo</span>
                            <span className="text-right font-medium">Nombre del ciudadano registrado</span>
                            <span className="text-light">Tipo y número de documento</span>
                            <span className="text-right font-medium">C.C. 1.234.567.890</span>
                            <span className="text-light">País y ciudad</span>
                            <span className="text-right font-medium">Colombia, Bogotá D.C.</span>
                            <span className="text-light">Correo electrónico</span>
                            <span className="text-right font-medium">nombre@ejemplo.com</span>
                            <span className="text-light">Celular</span>
                            <span className="text-right font-medium">(+57) 300 000 0000</span>
                            <span className="text-light">Medio preferido</span>
                            <span className="text-right font-medium">Correo electrónico</span>
                        </div>
                    </div>

                    <div className="mb-xl">
                        <h3 className="font-bold mb-md">Autorización de tratamiento de datos</h3>

                        <div className="flex gap-sm items-start p-md bg-gray-50 rounded" style={{ backgroundColor: '#F9FAFB' }}>
                            <input
                                type="checkbox"
                                id="terms"
                                className="mt-1"
                                checked={agreed}
                                onChange={(e) => setAgreed(e.target.checked)}
                            />
                            <label htmlFor="terms" className="text-sm">
                                Declaro que la información suministrada es veraz y autorizo el tratamiento de mis datos personales conforme a la política de protección de datos del Ministerio de Educación Nacional.
                            </label>
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
                            <span className="text-light">Tipo de canal</span>
                            <span className="font-medium">Peticiones (PQRD) en línea</span>
                        </div>
                        <div className="text-sm mb-xs flex justify-between">
                            <span className="text-light">Estado actual</span>
                            <span className="font-medium">Listo para enviar</span>
                        </div>
                        <div className="text-sm mb-xs flex justify-between">
                            <span className="text-light">Paso</span>
                            <span className="font-medium">3 de 3 • Revisión y envío</span>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Step4_Review;

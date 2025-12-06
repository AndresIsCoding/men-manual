import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Input from '../../components/Input';
import InteractionHint from '../../components/InteractionHint';

const Step2_Data = () => {
    const navigate = useNavigate();

    const handleContinue = () => {
        navigate('/pqrs/revision');
    };

    const handleBack = () => {
        navigate('/pqrs');
    };

    return (
        <div className="container">
            <div className="pqrs-header">
                <div className="text-sm text-light mb-md">
                    Atención y servicio {'>'} Ciudadano {'>'} Peticiones (PQRD) {'>'} Datos del solicitante
                </div>
                <h1 className="pqrs-title">Ingresa tus datos de contacto</h1>
                <p className="pqrs-subtitle">
                    Registra la información del solicitante para que el Ministerio pueda identificarte y enviarte la respuesta oficial de tu PQRD.
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
                <div className="pqrs-step">
                    <div className="pqrs-step__number">3</div>
                    <span>Revisión y envío</span>
                </div>
            </div>

            <div className="grid gap-xl" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
                <div>
                    <section className="mb-xl">
                        <h2 className="text-lg font-bold mb-md">1. Identificación del solicitante</h2>
                        <p className="text-sm text-light mb-md">Estos datos se usarán únicamente para la gestión de la solicitud y el envío de la respuesta.</p>

                        <div className="flex gap-md mb-lg">
                            <Button variant="primary">Persona natural</Button>
                            <Button variant="secondary">Persona jurídica</Button>
                            <Button variant="secondary">Anónimo / reservado</Button>
                        </div>

                        <Input label="Nombres y apellidos" placeholder="Escribe tu nombre completo tal como aparece en tu documento" />

                        <div className="grid grid-cols-2 gap-md" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div>
                                <label className="block text-sm font-medium mb-xs">Tipo de documento</label>
                                <select className="w-full p-sm border rounded" style={{ width: '100%', padding: '0.5rem', borderColor: 'var(--color-border)', borderRadius: 'var(--radius-md)' }}>
                                    <option>Selecciona el tipo de documento</option>
                                </select>
                            </div>
                            <Input label="Número de documento" placeholder="Solo números, sin puntos ni guiones" />
                        </div>

                        <Input label="País y ciudad de residencia" placeholder="Escribe el país y la ciudad donde resides" helperText="Ejemplo: Colombia, Bogotá D.C." />
                    </section>

                    <section className="mb-xl">
                        <h2 className="text-lg font-bold mb-md">2. Datos de contacto</h2>
                        <p className="text-sm text-light mb-md">Indica cómo prefieres que el Ministerio te contacte para notificar la respuesta de tu PQRD.</p>

                        <Input label="Correo electrónico" placeholder="nombre@ejemplo.com" helperText="A este correo llegará la notificación oficial" />
                        <Input label="Número de celular" placeholder="(+57) 300 000 0000" helperText="Incluye indicativo de país si estás fuera de Colombia" />

                        <div className="mt-md mb-md">
                            <label className="block text-sm font-medium mb-xs">Medio preferido de notificación</label>
                            <div className="flex gap-md">
                                <Button variant="primary" size="small">Correo electrónico</Button>
                                <Button variant="ghost" size="small">Llamada telefónica</Button>
                                <Button variant="ghost" size="small">Mensaje SMS</Button>
                            </div>
                        </div>

                        <Input label="Dirección de notificación (opcional)" placeholder="Escribe la dirección completa..." helperText="Solo si deseas respuesta física" />
                    </section>

                    <div className="flex justify-end gap-md mt-xl">
                        <Button variant="secondary" onClick={handleBack}>Volver</Button>
                        <div style={{ position: 'relative' }}>
                            <InteractionHint message="Clic en 'Continuar'" position="right" />
                            <Button onClick={handleContinue}>Continuar</Button>
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
                            <span className="text-light">Estado actual</span>
                            <span className="font-medium">En diligenciamiento</span>
                        </div>
                        <div className="text-sm mb-xs flex justify-between">
                            <span className="text-light">Paso</span>
                            <span className="font-medium">2 de 3 • Datos del solicitante</span>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Step2_Data;

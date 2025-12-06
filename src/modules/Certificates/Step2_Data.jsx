import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Input from '../../components/Input';
import InteractionHint from '../../components/InteractionHint';

const Step2_Data = () => {
    const navigate = useNavigate();

    const handleContinue = () => {
        navigate('/certificados/detalles');
    };

    const handleBack = () => {
        navigate('/certificados');
    };

    return (
        <div className="container">
            <div className="cert-header">
                <div className="text-sm text-light mb-md">
                    Atención y servicio {'>'} Estudiante {'>'} Certificados {'>'} Iniciar trámite
                </div>
                <h1 className="cert-title">Iniciar trámite: Certificado de estudios</h1>
                <p className="cert-subtitle">
                    Completa la información básica para solicitar tu certificado de estudios. Este primer paso no genera aún el certificado.
                </p>
                <div className="mt-sm">
                    <span className="text-sm text-light">Perfil seleccionado: </span>
                    <span className="text-sm font-bold text-white bg-primary px-2 py-1 rounded" style={{ backgroundColor: 'var(--color-primary)', padding: '2px 8px', borderRadius: '4px' }}>Estudiante</span>
                </div>
            </div>

            <div className="cert-steps">
                <div className="cert-step cert-step--active">
                    <div className="cert-step__number">1</div>
                    <span>Tus datos</span>
                </div>
                <div className="cert-step">
                    <div className="cert-step__number">2</div>
                    <span>Detalles del certificado</span>
                </div>
                <div className="cert-step">
                    <div className="cert-step__number">3</div>
                    <span>Revisión y envío</span>
                </div>
            </div>

            <div className="grid gap-xl" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
                <div>
                    <section className="mb-xl">
                        <h2 className="text-lg font-bold mb-md">Información del solicitante</h2>
                        <p className="text-sm text-light mb-md">Verifica que tus datos estén correctos. Se usarán para identificarte durante el trámite.</p>

                        <div className="grid grid-cols-2 gap-md" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <Input label="Tipo de documento" value="Cédula de ciudadanía" readOnly />
                            <Input label="Número de documento" placeholder="Ingresa tu número de documento" />
                        </div>
                        <Input label="Nombres y apellidos" placeholder="Tal como aparece en tus documentos oficiales" />
                        <Input label="Correo electrónico de contacto" placeholder="ejemplo@correo.com" helperText="Usaremos este correo para enviarte notificaciones sobre el estado del trámite." />

                        <div className="grid grid-cols-2 gap-md" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <Input label="Número de celular" placeholder="Ingresa un número activo" />
                            <Input label="Departamento de residencia" placeholder="Selecciona un departamento" />
                        </div>
                    </section>

                    <section className="mb-xl">
                        <h2 className="text-lg font-bold mb-md">Información académica</h2>
                        <p className="text-sm text-light mb-md">Dinos dónde estudiaste para ubicar tu información.</p>

                        <div className="grid grid-cols-2 gap-md" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <Input label="Nivel educativo" placeholder="Básica / Media / Superior" />
                            <Input label="Año de finalización (aprox.)" placeholder="Selecciona o escribe un año" />
                        </div>
                        <Input label="Institución educativa" placeholder="Nombre completo de la institución" helperText="Si no recuerdas el nombre exacto, escribe al menos la ciudad y parte del nombre." />

                        <div className="grid grid-cols-2 gap-md" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <Input label="Municipio" placeholder="Municipio donde se encuentra la institución" />
                            <Input label="Sector" placeholder="Oficial / Privado" />
                        </div>
                    </section>

                    <section className="mb-xl">
                        <h2 className="text-lg font-bold mb-md">Entrega del certificado</h2>
                        <p className="text-sm text-light mb-md">Elige cómo deseas recibir tu certificado.</p>
                        <Input label="Medio de entrega" value="Recibir por correo electrónico (PDF)" readOnly />
                        <Input label="Comentarios adicionales (opcional)" placeholder="Escribe aquí si tienes alguna observación específica sobre tu solicitud." />
                    </section>

                    <div className="flex justify-end gap-md mt-xl">
                        <Button variant="secondary" onClick={handleBack}>Cancelar</Button>
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
                            <span className="text-light">Tipo de trámite</span>
                            <span className="font-medium">Certificado de estudios</span>
                        </div>
                        <div className="text-sm mb-xs flex justify-between">
                            <span className="text-light">Canal</span>
                            <span className="font-medium">En línea <span className="text-xs bg-white px-1 rounded border">Sin costo</span></span>
                        </div>
                        <div className="text-sm mb-xs flex justify-between">
                            <span className="text-light">Perfil</span>
                            <span className="font-medium">Estudiante</span>
                        </div>
                        <div className="mt-md text-xs text-light">
                            Recibirás un número de radicado al finalizar el formulario. Conserva este número para hacer seguimiento a tu solicitud.
                        </div>
                    </Card>

                    <Card className="bg-gray-50">
                        <h3 className="font-bold mb-sm">¿Necesitas ayuda con este formulario?</h3>
                        <p className="text-sm text-light mb-md">
                            Si tienes dudas sobre cómo diligenciar la información o qué datos son obligatorios, podemos orientarte.
                        </p>
                        {/* Help items similar to Step 1 */}
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Step2_Data;

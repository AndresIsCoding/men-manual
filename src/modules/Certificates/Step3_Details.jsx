import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Input from '../../components/Input';

const Step3_Details = () => {
    const navigate = useNavigate();

    const handleContinue = () => {
        navigate('/certificados/revision');
    };

    const handleBack = () => {
        navigate('/certificados/datos');
    };

    return (
        <div className="container">
            <div className="cert-header">
                <div className="text-sm text-light mb-md">
                    Atención y servicio {'>'} Estudiante {'>'} Certificados {'>'} Iniciar trámite {'>'} Detalles
                </div>
                <h1 className="cert-title">Detalles del certificado</h1>
                <p className="cert-subtitle">
                    Indica el tipo de certificado que requieres y para qué lo necesitas. Esta información nos ayuda a generar el documento correctamente.
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
                <div className="cert-step">
                    <div className="cert-step__number">3</div>
                    <span>Revisión y envío</span>
                </div>
            </div>

            <div className="grid gap-xl" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
                <div>
                    <section className="mb-xl">
                        <h2 className="text-lg font-bold mb-md">Tipo de certificado</h2>
                        <p className="text-sm text-light mb-md">Selecciona el certificado que necesitas. Puedes elegir más de una opción si aplica.</p>

                        <div className="flex gap-md mb-lg">
                            <Button variant="primary">Certificado de estudios aprobado</Button>
                            <Button variant="secondary">Certificado de matrícula</Button>
                            <Button variant="secondary">Certificación de tiempo de estudio</Button>
                        </div>

                        <Input label="Nivel educativo a certificar" placeholder="Básica primaria, secundaria, media, superior..." helperText="Selecciona el nivel académico que debe aparecer en el certificado." />

                        <div className="grid grid-cols-2 gap-md" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <Input label="Años o grados a incluir" placeholder="Ej. Grado 11 / Años 2019 - 2021" />
                            <Input label="Idioma del certificado" value="Español" readOnly />
                        </div>
                    </section>

                    <section className="mb-xl">
                        <h2 className="text-lg font-bold mb-md">Finalidad del certificado</h2>
                        <p className="text-sm text-light mb-md">Cuéntanos para qué usarás el certificado. Esto permite ajustar el contenido cuando aplica.</p>

                        <div className="flex flex-col gap-sm mb-md">
                            {/* Radio buttons simulation */}
                            <div className="flex gap-sm items-center">
                                <div style={{ width: 16, height: 16, borderRadius: '50%', border: '4px solid var(--color-primary)' }}></div>
                                <span className="font-medium">Ingreso a otra institución educativa</span>
                            </div>
                            <p className="text-sm text-light ml-lg pl-xs">Para traslados entre colegios, universidades u otras entidades de educación.</p>
                        </div>

                        <Input label="Entidad a la que presentas el certificado (opcional)" placeholder="Nombre de institución, empresa u organismo" />
                        <Input label="Observaciones para la entidad emisora (opcional)" placeholder="Escribe aquí si necesitas que se incluya alguna leyenda o información específica." />
                    </section>

                    <div className="flex justify-end gap-md mt-xl">
                        <Button variant="secondary" onClick={handleBack}>Volver</Button>
                        <Button onClick={handleContinue}>Continuar</Button>
                    </div>
                </div>

                <div>
                    <Card className="bg-gray-50 mb-md">
                        <h3 className="font-bold mb-sm">Resumen del trámite</h3>
                        {/* Summary items */}
                        <div className="text-sm mb-xs flex justify-between">
                            <span className="text-light">Tipo de trámite</span>
                            <span className="font-medium">Certificado de estudios</span>
                        </div>
                        <div className="text-sm mb-xs flex justify-between">
                            <span className="text-light">Certificado seleccionado</span>
                            <span className="font-medium">Estudios aprobados</span>
                        </div>
                        <div className="text-sm mb-xs flex justify-between">
                            <span className="text-light">Nivel educativo</span>
                            <span className="font-medium">Por definir</span>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Step3_Details;

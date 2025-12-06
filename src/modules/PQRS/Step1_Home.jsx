import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageSquare, AlertCircle, HelpCircle, FileText } from 'lucide-react';
import Button from '../../components/Button';
import Card from '../../components/Card';

const Step1_Home = () => {
    const navigate = useNavigate();

    const handleStartProcess = () => {
        navigate('detalles'); // In PQRS flow, we define type first (Step 3 in Certs, but Step 1 here logically, though images show "1. Define el tipo" then "2. Datos")
        // Wait, looking at the images:
        // Image 1: "Registra tu petición..." -> Step 1: Define el tipo de PQRD (Type selection)
        // Image 2: "Ingresa tus datos de contacto" -> Step 2: Contact Data
        // Image 3: "Revisa y confirma" -> Step 3: Review
        // Image 4: "Tu PQRD fue enviada" -> Step 4: Success

        // The user request said:
        // Screen 1: Start (Explanation + Categories)
        // Screen 2: Applicant Data
        // Screen 3: Details (Type + Description)
        // Screen 4: Review
        // Screen 5: Confirmation

        // BUT the images provided show a slightly different flow:
        // Image 1 (Step 1): "1. Define el tipo de PQRD" AND "2. Describe tu solicitud" are on the SAME page?
        // Let's look closely at `uploaded_image_1_1764992786239.png`.
        // It says "1. Define el tipo de PQRD" and "2. Describe tu solicitud". It seems to be a combined step.
        // And there is a stepper at the top: "1. Tipo de solicitud", "2. Datos del solicitante", "3. Revisión y envío".

        // So the flow is:
        // Step 1: Type & Description
        // Step 2: Applicant Data
        // Step 3: Review
        // Step 4: Success

        // I will follow the visual evidence (Images) over the initial text request as it's more accurate to the "real flow".
        navigate('detalles');
    };

    return (
        <div className="container">
            <div className="pqrs-header">
                <div className="text-sm text-light mb-md">
                    Atención y servicio {'>'} Ciudadano {'>'} Peticiones (PQRD)
                </div>
                <h1 className="pqrs-title">Registra tu petición, queja, reclamo o denuncia</h1>
                <p className="pqrs-subtitle">
                    Diligencia la información básica de tu PQRD para que el Ministerio pueda gestionarla de manera clara y oportuna.
                </p>
            </div>

            <div className="pqrs-steps">
                <div className="pqrs-step pqrs-step--active">
                    <div className="pqrs-step__number">1</div>
                    <span>Tipo de solicitud</span>
                </div>
                <div className="pqrs-step">
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
                        <h2 className="text-lg font-bold mb-md">1. Define el tipo de PQRD</h2>
                        <p className="text-sm text-light mb-md">Indica qué tipo de solicitud deseas presentar y el tema principal para dirigirla al equipo adecuado.</p>

                        <div className="flex gap-md mb-lg flex-wrap">
                            <Button variant="primary">Petición</Button>
                            <Button variant="secondary">Queja</Button>
                            <Button variant="secondary">Reclamo</Button>
                            <Button variant="secondary">Sugerencia</Button>
                            <Button variant="secondary">Denuncia</Button>
                        </div>

                        <div className="grid grid-cols-2 gap-md" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div>
                                <label className="block text-sm font-medium mb-xs">Tema principal</label>
                                <select className="w-full p-sm border rounded" style={{ width: '100%', padding: '0.5rem', borderColor: 'var(--color-border)', borderRadius: 'var(--radius-md)' }}>
                                    <option>Selecciona el tema de tu solicitud</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-xs">Entidad o institución involucrada</label>
                                <input type="text" className="w-full p-sm border rounded" placeholder="Escribe el nombre..." style={{ width: '100%', padding: '0.5rem', borderColor: 'var(--color-border)', borderRadius: 'var(--radius-md)' }} />
                            </div>
                        </div>

                        <div className="mt-md">
                            <label className="block text-sm font-medium mb-xs">Canal de respuesta preferido</label>
                            <div className="flex gap-md">
                                <Button variant="primary" size="small">Correo electrónico</Button>
                                <Button variant="ghost" size="small">Llamada telefónica</Button>
                                <Button variant="ghost" size="small">Mensaje SMS</Button>
                            </div>
                        </div>
                    </section>

                    <section className="mb-xl">
                        <h2 className="text-lg font-bold mb-md">2. Describe tu solicitud</h2>
                        <p className="text-sm text-light mb-md">Explica de forma clara y concreta qué necesitas o qué deseas reportar.</p>

                        <div className="mb-md">
                            <label className="block text-sm font-medium mb-xs">Asunto de la solicitud</label>
                            <input type="text" className="w-full p-sm border rounded" placeholder="Ejemplo: Solicitud de información..." style={{ width: '100%', padding: '0.5rem', borderColor: 'var(--color-border)', borderRadius: 'var(--radius-md)' }} />
                        </div>

                        <div className="mb-md">
                            <label className="block text-sm font-medium mb-xs">Descripción detallada</label>
                            <textarea className="w-full p-sm border rounded" rows="4" placeholder="Escribe aquí de manera clara..." style={{ width: '100%', padding: '0.5rem', borderColor: 'var(--color-border)', borderRadius: 'var(--radius-md)', fontFamily: 'inherit' }}></textarea>
                        </div>

                        <div className="mb-md">
                            <label className="block text-sm font-medium mb-xs">Adjuntos (opcional)</label>
                            <div className="border border-dashed p-md rounded text-center text-light" style={{ borderColor: 'var(--color-border)' }}>
                                Agregar archivos como soportes de tu solicitud
                            </div>
                        </div>
                    </section>

                    <div className="flex justify-end gap-md mt-xl">
                        <Button variant="secondary" onClick={() => navigate('/')}>Volver</Button>
                        <Button onClick={() => navigate('datos')}>Continuar</Button>
                    </div>
                </div>

                <div>
                    <Card className="bg-gray-50 mb-md">
                        <h3 className="font-bold mb-sm">Guía rápida de PQRD</h3>
                        <div className="text-sm mb-xs flex justify-between">
                            <span className="text-light">Tiempo estimado</span>
                            <span className="font-medium">Hasta 15 días</span>
                        </div>
                        <div className="text-sm mb-xs flex justify-between">
                            <span className="text-light">Estado del trámite</span>
                            <span className="font-medium">Borrador</span>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Step1_Home;

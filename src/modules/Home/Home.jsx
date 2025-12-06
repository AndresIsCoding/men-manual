import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, MessageSquare, Info } from 'lucide-react';
import Card from '../../components/Card';
import Button from '../../components/Button';
import './Home.css';

const Home = () => {
    return (
        <div className="container">
            <div className="home__hero">
                <h1 className="home__title">Bienvenido al Manual Interactivo</h1>
                <p className="home__subtitle">
                    Selecciona una de las funcionalidades para explorar el flujo de usuario.
                </p>
            </div>

            <div className="home__grid">
                <Card className="home__card">
                    <div className="home__icon-wrapper">
                        <FileText size={48} color="var(--color-primary)" />
                    </div>
                    <h2 className="home__card-title">Flujo: Solicitud de Certificados</h2>
                    <p className="home__card-desc">
                        Simulación del proceso de solicitud de certificados estudiantiles para diferentes perfiles.
                    </p>
                    <Link to="/certificados">
                        <Button fullWidth>Iniciar Recorrido</Button>
                    </Link>
                </Card>

                <Card className="home__card">
                    <div className="home__icon-wrapper">
                        <Info size={48} color="var(--color-primary)" />
                    </div>
                    <h2 className="home__card-title">Información General</h2>
                    <p className="home__card-desc">
                        Consulta la introducción, objetivos, alcance y guías de uso del manual.
                    </p>
                    <Link to="/general-info">
                        <Button fullWidth>Ver Información</Button>
                    </Link>
                </Card>

                <Card className="home__card">
                    <div className="home__icon-wrapper">
                        <MessageSquare size={48} color="var(--color-primary)" />
                    </div>
                    <h2 className="home__card-title">Flujo: Generación de PQRS</h2>
                    <p className="home__card-desc">
                        Simulación del proceso de radicación de Peticiones, Quejas, Reclamos y Denuncias.
                    </p>
                    <Link to="/pqrs">
                        <Button fullWidth>Iniciar Recorrido</Button>
                    </Link>
                </Card>
            </div>
        </div>
    );
};

export default Home;

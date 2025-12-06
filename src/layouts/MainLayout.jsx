import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Search, Menu } from 'lucide-react';
import './MainLayout.css';

const MainLayout = () => {
    return (
        <div className="layout">
            <header className="header">
                <div className="container header__content">
                    <div className="header__logo">
                        <Link to="/" className="header__title">
                            Atención y Servicio a la Ciudadanía
                        </Link>
                    </div>
                    <nav className="header__nav">
                        <button className="btn btn--ghost">
                            <Search size={20} />
                        </button>
                        <button className="btn btn--ghost">
                            <Menu size={20} />
                        </button>
                    </nav>
                </div>
            </header>

            <main className="main-content">
                <Outlet />
            </main>

            <footer className="footer">
                <div className="container">
                    <div className="footer__content">
                        <div className="footer__section">
                            <h4 className="footer__title">Ministerio de Educación Nacional</h4>
                            <p>Calle 43 No. 57 - 14. CAN. Bogotá, Colombia.</p>
                            <p>Código postal: 111321</p>
                        </div>
                        <div className="footer__section">
                            <h4 className="footer__title">Contacto</h4>
                            <p>Línea gratuita: 01 8000 910 122</p>
                            <p>Línea Bogotá: +57 (601) 3078079</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default MainLayout;

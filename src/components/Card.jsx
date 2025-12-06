import React from 'react';
import './Card.css';

const Card = ({ children, className = '', padding = 'medium' }) => {
    return (
        <div className={`card card--padding-${padding} ${className}`}>
            {children}
        </div>
    );
};

export default Card;

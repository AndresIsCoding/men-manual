import React from 'react';
import './Button.css';

const Button = ({
    children,
    variant = 'primary',
    size = 'medium',
    className = '',
    onClick,
    type = 'button',
    fullWidth = false,
    icon: Icon
}) => {
    return (
        <button
            type={type}
            className={`btn btn--${variant} btn--${size} ${fullWidth ? 'btn--full' : ''} ${className}`}
            onClick={onClick}
        >
            {Icon && <Icon size={18} className="btn__icon" />}
            {children}
        </button>
    );
};

export default Button;

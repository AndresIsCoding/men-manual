import React from 'react';
import './Input.css';

const Input = ({
    label,
    type = 'text',
    placeholder,
    value,
    onChange,
    name,
    error,
    helperText,
    required = false
}) => {
    return (
        <div className="input-group">
            {label && (
                <label className="input-label">
                    {label} {required && <span className="input-required">*</span>}
                </label>
            )}
            <input
                type={type}
                name={name}
                className={`input-field ${error ? 'input-field--error' : ''}`}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {helperText && !error && <span className="input-helper">{helperText}</span>}
            {error && <span className="input-error">{error}</span>}
        </div>
    );
};

export default Input;

import React from 'react';
import './InteractionHint.css';

const InteractionHint = ({ message, position = 'top' }) => {
    return (
        <div className={`interaction-hint ${position}`}>
            <div className="hint-pulse"></div>
            {message && <div className="hint-message">{message}</div>}
        </div>
    );
};

export default InteractionHint;

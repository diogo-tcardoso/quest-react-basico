import React from 'react';
import './text.css';

const TextUppercase = ({ text, color }) => {
    const style = {
        color: color,
        textTransform: 'uppercase'
    };

    return (
        <p className='text' style={style}>{text}</p>
    );
};

TextUppercase.defaultProps = {
    color: "blue"
};

export default TextUppercase;
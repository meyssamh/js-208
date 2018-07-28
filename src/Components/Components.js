import React from 'react';

export const Row = (props) => {
    const Class = 'row' +(props.className !== undefined ? ` ${props.className}` : '');
    return <div {...props} className={Class} >{props.children}</div>
};

export const Container = (props) => {
    const Class = 'container' +(props.className !== undefined ? ` ${props.className}` : '');
    return <div {...props} className={Class} >{props.children}</div>
};

export const Col = (props) => {
    const {size, ...other} = props;
    const Class = (size !== undefined ? `col-${size}` : 'col');
    return <div {...other} className={Class} >{props.children}</div>
};

export const Button = (props) => {
    const {type, ...other} = props;
    const Class = (type !== undefined ? `btn btn-${type}` : 'btn btn-light');
    return <button {...other} className={Class} >{props.children}</button>
};
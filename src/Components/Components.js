import React from 'react';

export const Row = (props) => {
    const Class = 'row' +(props.className !== undefined ? `${props.className}` : '');
    return <div {...props} className={Class} >{props.children}</div>
};

export const Container = (props) => {
    const Class = 'container' +(props.className !== undefined ? `${props.className}` : '');
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

export const Header = (props) => {
    const Class = 'navbar navbar-' +(props.className !== undefined ? `${props.className}` : 'navbar navbar-dark');
    return <nav {...props} className={Class} >{props.children}</nav>
};

export const Icon = (props) => {
    const {type, size, ...other} = props;
    const Class = (type !== undefined ? `fa fa-${type}` : '');
    const Style = (size !== undefined ? {fontSize : size} : {fontSize : 18});
    return <i {...other} className={Class} style={Style}></i>
};
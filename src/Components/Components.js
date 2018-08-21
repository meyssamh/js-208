// Vendor
import React from 'react';
import {Link} from 'react-router-dom';

export const MyRow = (props) => {
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
    const {type, children, ...other} = props;
    const Class = (type !== undefined ? `btn btn-${type}` : 'btn btn-light');
    return <button {...other} style={{borderRadius : 0}} className={Class} children={children}/>
};

export const Button1 = (props) => {
    const {typeBtn, children, ...other} = props;
    const Class = (typeBtn !== undefined ? `btn btn-${typeBtn}` : 'btn btn-light');
    return <button {...other} style={{borderRadius : 0 , boxShadow : '3px 3px lightblue'}} className={Class}
                   children={children}/>
};

export const Header = (props) => {
    const Class = 'navbar navbar-' +(props.className !== undefined ? `${props.className}` : 'navbar navbar-dark');
    return <nav {...props} className={Class} >{props.children}</nav>
};

export const Icon = (props) => {
    const {type, size, ...other} = props;
    const Class = (type !== undefined ? `fa fa-${type}` : '');
    const Style = (size !== undefined ? {fontSize : size} : {fontSize : 18});
    return <i {...other} className={Class} style={Style}/>
};

export const Info = (props) => {
    const {inputType, iconType, iconSize, id, place, ...other} = props;
    return  <div className={'form-group input-group'}>
                <div className={'input-group-prepend'}>
                    <span className={'input-group-text'} style={{borderRadius : 0, boxShadow : '3px 3px #eeeeee'}}>
                        <Icon type={iconType} size={iconSize}/>
                    </span>
                </div>
                <input type={inputType} {...other} id={id} className={'form-control'} placeholder={place}
                       required={true} style={{borderRadius : 0, boxShadow : '3px 3px #eeeeee'}}/>
            </div>
};

export const Nav = (props) => {
    const {darkNav, src, button1Type, button2Type, hidButton1, hidButton2, hidLink, hidLogo, ...other} = props;
    return  <Header {...other} className={darkNav} >
                <Container>
                    <Link to={'/'} hidden={hidLink}>
                        <img src={src} style={{height: 40}} className={'App-logo'} alt={'logo'}/>
                    </Link>
                    <img src={src} style={{height: 40}} className={'App-logo'} alt={'logo'} hidden={hidLogo}/>
                    <div>
                        <ul className={'navbar-nav'}>
                            <li className={'nav-item'}>
                                <Link to={'/SignIn'}>
                                    <Button type={button1Type} children={'Log in'} hidden={hidButton1}/>
                                </Link>
                                &nbsp;
                                <Link to={'/SignUp'}>
                                    <Button type={button2Type} children={'Sign up'} hidden={hidButton2}/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </Container>
            </Header>
};
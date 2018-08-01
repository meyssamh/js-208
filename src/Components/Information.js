import React from 'react';
import {Icon} from "./Components";

export const Mail = () => {

    return  <div className={'form-group input-group'}>
                <div className={'input-group-prepend'}>
                    <span className={'input-group-text'}>
                        <Icon type={'envelope'} size={13}/>
                    </span>
                </div>
                <input type={'email'} id={'inputEmail'} className={'form-control'} placeholder={'Email'} required/>
            </div>
};

export const Username = () => {

    return  <div className={'form-group input-group'}>
                <div className={'input-group-prepend'}>
                    <span className={'input-group-text'}>
                        <Icon type={'user'} size={18}/>
                    </span>
                </div>
                <input type={'text'} id={'inputUsername'} className={'form-control'}
                           placeholder={'Username'} required/>
            </div>
};

export const Password = () => {

    return  <div className={'form-group input-group'}>
                <div className={'input-group-prepend'}>
                    <span className={'input-group-text'}>
                        <Icon type={'lock'} size={20}/>
                    </span>
                </div>
                <input type={'password'} id={'InputPassword1'} className={'form-control'}
                           placeholder={'Password'} required/>
            </div>
};

export const Password2 = () => {

    return  <div className={'form-group input-group'}>
                <div className={'input-group-prepend'}>
                    <span className={'input-group-text'}>
                        <Icon type={'lock'} size={20}/>
                    </span>
                </div>
                <input type={'password'} id={'InputPassword2'} className={'form-control'}
                           placeholder={'Confirmation Password'} required/>
            </div>
};
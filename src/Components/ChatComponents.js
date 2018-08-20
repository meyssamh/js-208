// Vendor
import React from 'react';
import {Row, Avatar, Title, Subtitle, Message, Bubble, MessageText, MessageList} from '@livechat/ui-kit';
import {Dropdown, DropdownMenu, DropdownToggle} from 'reactstrap';

// Components
import {MyRow} from './Components';

// Component-Assets
import Chatlogo from './Chatlogo';
import More from './More';
import Myself from './Myself';
import Expand from './Expand';
import Send from './Send';
import Clear from './Clear';
import Robot from './Robot';
import Albert from './AlbertEinstein';
import Bill from './BillGates';


export const Img = (props) => {
    const {imgSrc, alternate, title, ...other} = props;
    return  <img src={imgSrc} style={{height : 20, margin : 15, marginTop : 20, cursor : 'pointer'}} alt={alternate}
                 title={title} {...other}/>
};

export const MainUser = (props) => {
    const {rowClick, titleChild, chatClick, isOpen, isToggle, backColor, signout, ...other} = props;
    return <div style={{display : 'flex', flexWrap : 'wrap', fontSize : 18, fontWeight : 'bold'}}>
                <div style={{width : 343, padding :'0.5 em'}}>
                    <Row onClick={rowClick} style={{cursor : 'pointer'}}>
                        <Avatar isOwn={true} {...other} imgUrl={Myself} size={'50px'}
                                style={{margin : 10, marginTop : 5}}/>
                        <Title children={titleChild} style={{margin : 18}}/>
                    </Row>
                </div>
                <div style={{width : 100, boxAlign : 'left'}}>
                    <MyRow style={{paddingLeft : 15}}>
                        <Img imgSrc={Chatlogo} alternate={'new Chat'} title={'new Chat'} onClick={chatClick}/>
                        <Dropdown isOpen={isOpen} toggle={isToggle} style={{margin : 15}}>
                            <DropdownToggle tag={'span'} onClick={isToggle} data-toggle={'dropdown'}
                                            aria-expanded={isOpen}>
                                <Img imgSrc={More} alternate={'expand'} title={'expand'}
                                     style={{height : 20, cursor : 'pointer'}}/>
                            </DropdownToggle>
                            <DropdownMenu style={{borderRadius : 0}}>
                                <div id={'back'} onClick={backColor} style={{fontWeight : 'normal',
                                    cursor : 'pointer', marginBottom : 10}}>
                                    &nbsp;&nbsp;Background Color</div>
                                <div id={'signout'} onClick={signout}
                                     style={{fontWeight : 'normal', cursor : 'pointer'}}>
                                    &nbsp;&nbsp;Sign out</div>
                            </DropdownMenu>
                        </Dropdown>
                    </MyRow>
                </div>
            </div>
};

export const Chater = (props) => {
    const {titleChild, avatar, ...other} = props;
    return <div>
                <div style={{width : 343, padding :'0.5 em'}}>
                    <Row>
                        <Avatar {...other} imgUrl={avatar} size={'50px'}
                                style={{margin : 10, marginTop : 5}}/>
                        <Title children={titleChild} style={{margin : 18}}/>
                    </Row>
                </div>
            </div>
};

export const User = (props) => {
    const {id, chatHistory, img, children, subtitle, isOpen, isToggle, profile, ...other} = props;
    return  <React.Fragment>
                <div id={id}>
                    <div style={{display : 'flex', flexWrap : 'wrap', fontSize : 18, fontWeight : 'bold'}}>
                        <div style={{width : 383, padding :'0.5 em'}}>
                            <Row onClick={chatHistory} style={{cursor: 'pointer'}}>
                                <Avatar {...other} imgUrl={img} size={'50px'} style={{margin : 10, marginTop : 15}}/>
                                <ul style={{listStyleType : 'none', paddingLeft : 17}}>
                                    <li>
                                    <Title children={children} style={{marginTop : 15}}/>
                                    </li>
                                    <li>
                                    <Subtitle style={{fontSize : 12, maxHeight : 18, maxWidth : 200,
                                        textOverflow : 'ellipsis', overflow : 'hidden', whiteSpace : 'nowrap'}}
                                              children={subtitle}/>
                                    </li>
                                </ul>
                            </Row>
                        </div>
                        <div style={{width : 60.66}}>
                            <Dropdown isOpen={isOpen} toggle={isToggle} style={{marginLeft : 20, marginTop : 20}}>
                                <DropdownToggle tag={'span'} onClick={isToggle} data-toggle={'dropdown'}
                                    aria-expanded={isOpen}>
                                    <Img imgSrc={Expand} alternate={'expand'} title={'expand'}
                                         style={{height : 30, cursor : 'pointer'}}/>
                                </DropdownToggle>
                                <DropdownMenu className={'profile'} style={{borderRadius : 0}}>
                                    <div className={'profile'} onClick={profile} style={{fontWeight : 'normal', cursor : 'pointer'}}>
                                        &nbsp;&nbsp;Profile</div>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
                <div className={'separator'}/>
            </React.Fragment>
};

export const User2 = (props) => {
    const {id, chatHistory, img, children, subtitle, ...other} = props;
    return  <React.Fragment>
        <div id={id}>
            <div style={{display : 'flex', flexWrap : 'wrap', fontSize : 18, fontWeight : 'bold', cursor: 'pointer'}}
                 onClick={chatHistory}>
                <div style={{width : 383, padding :'0.5 em'}}>
                    <Row>
                        <Avatar {...other} imgUrl={img} size={'50px'} style={{margin : 10, marginTop : 15}}/>
                        <ul style={{listStyleType : 'none', paddingLeft : 17}}>
                            <li>
                                <Title children={children} style={{marginTop : 15}}/>
                            </li>
                            <li>
                                <Subtitle style={{fontSize : 12, maxHeight : 18, maxWidth : 200,
                                    textOverflow : 'ellipsis', overflow : 'hidden', whiteSpace : 'nowrap'}}
                                          children={subtitle}/>
                            </li>
                        </ul>
                    </Row>
                </div>
            </div>
        </div>
        <div className={'separator'}/>
    </React.Fragment>
};

export const Messagenew = (props) => {
    const {click, change, name, value, ...other} = props;
    return  <form >
                <div className='form-group' style={{margin : 0}}>
                        <MyRow style={{maxWidth : 900, margin : 0}}>
                            <input onChange={change} type={'text'} name={name} value={value} {...other} id={'message'}
                                   className={'form-control'} placeholder={'Write a message ...'}
                                   style={{maxWidth : 830, maxHeight : 40, borderRadius : 0,
                                       borderColor : 'white', marginTop : 3, marginLeft : 3, marginRight : 3}}/>
                            <button type={'submit'} className={'btn'} title={'Send'}
                                    style={{maxHeight : 35, margin : '4px 2px', backgroundColor : 'white',
                                        borderColor : 'white'}} onClick={click}>
                                <Img imgSrc={Send}
                                     style={{margin : 0, height : 25, align : 'center', marginBottom : 5}}/>
                            </button>
                        </MyRow>
                </div>
            </form>
};

export const Read = (props) => {
    const {children, ...other} = props;
    return  <Message isOwn={true}>
                <Bubble radiusType={'single'}>
                    <MessageText children={children} {...other} style={{maxWidth : 400}}/>
                </Bubble>
            </Message>
};

export const Readother = (props) => {
    const {children, ...other} = props;
    return  <Message>
                <Bubble radiusType={'single'}>
                    <MessageText children={children} {...other} style={{maxWidth : 400}}/>
                </Bubble>
            </Message>
};

export const View = (props) => {
    const {title, avatar, hidden, change, name, value, click, ...other} = props;
    return  <div hidden={hidden}>
                <header style={{backgroundColor : '#eeeeee', height : 65}}>
                        <Chater titleChild={title} avatar={avatar}/>
                </header>
                <div style={{height : 597}}>
                    <div style={{height : 553, borderBottom : 'solid 1px #e4e6e6'}}>
                        <MessageList active {...other}/>
                    </div>
                    <div>
                        <Messagenew change={change} name={name} value={value} click={click}/>
                    </div>
                </div>
            </div>
};

export const UserProfile = (props) => {
    const {avatar, click, username, title, ...other} = props;
    return  <div className={'maincol4'} {...other}>
                <div style={{width : 444, height : 400, backgroundColor : '#e4e6e6'}}>
                    <Row>
                        <Avatar imgUrl={avatar} size={'350px'} style={{marginLeft : 47, marginTop : 25}}/>
                        <Img imgSrc={Clear} title={'Close'} onClick={click}/>
                    </Row>
                </div>
                <div style={{textAlign : 'center'}}>
                    <p style={{marginTop : 10}}>Username:</p>
                    <h4 children={username}/>
                    <p>Status:</p>
                    <h6 children={title}/>
                </div>
            </div>
};

export const Profile = (props) => {
    const {avatar, click, username, title, email, ...other} = props;
    return  <div className={'maincol4'} {...other}>
                <div style={{width : 444, height : 400, backgroundColor : '#e4e6e6'}}>
                    <Row>
                        <Avatar imgUrl={avatar} size={'350px'} style={{marginLeft : 47, marginTop : 25}}/>
                        <Img imgSrc={Clear} title={'Close'} onClick={click}/>
                    </Row>
                </div>
                <div style={{textAlign : 'center'}}>
                    <p style={{marginTop : 10}}>Username:</p>
                    <h4 children={username}/>
                    <p>Status:</p>
                    <h6 children={title}/>
                    <p>E-mail:</p>
                    <p children={email}/>
                </div>
            </div>
};

export const BackColor = (props) => {
    const {click, white, lightgreen, lightblue, lightyellow, ...other} = props;
    return  <div className={'maincol4'} {...other}>
                <div style={{width : 444, height : 100, backgroundColor : '#e4e6e6'}}>
                    <Row>
                        <h4 style={{marginTop : 33, marginLeft : 107, marginRight : 90}}>
                            Background Color
                        </h4>
                        <Img imgSrc={Clear} title={'Close'} onClick={click}/>
                    </Row>
                </div>
                <div>
                    <div className={'color'} id={'white'} title={'White'} onClick={white}/>
                    <div className={'color'} id={'lightgreen'} title={'Light Green'} onClick={lightgreen}/>
                    <div className={'color'} id={'lightblue'} title={'Light Blue'} onClick={lightblue}/>
                    <div className={'color'} id={'lightyellow'} title={'Light Yellow'} onClick={lightyellow}/>
                </div>
            </div>
};

export const Newchat = (props) => {
    const {click, showChat1, showChat2, showChat3, ...other} = props;
    return  <div className={'maincol4'} {...other}>
                <div style={{width : 444, height : 100, backgroundColor : '#e4e6e6'}}>
                    <Row>
                        <h4 style={{marginTop : 33, marginLeft : 170, marginRight : 115}}>
                            New Chat
                        </h4>
                        <Img imgSrc={Clear} title={'Close'} onClick={click}/>
                    </Row>
                </div>
                <div>
                    <User2 img={Bill} children={'Bill Gates'} subtitle={'... money money money money ...'} id={'user1'}
                           chatHistory={showChat1}/>
                    <User2 img={Albert} children={'Albert Einstein'} subtitle={'E = MC-Albert'} id={'user2'}
                           chatHistory={showChat2}/>
                    <User2 img={Robot} children={'Terminator'} subtitle={'Hasta la vista, baby'} id={'user3'}
                           chatHistory={showChat3}/>
                </div>
            </div>
};
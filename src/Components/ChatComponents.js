import React from 'react';
import {Row, Avatar, Title, Subtitle, Message, Bubble, MessageText, MessageList} from "@livechat/ui-kit";
import Chatlogo from './Chatlogo';
import More from './More';
import Myself from './Myself';
import Expand from "./Expand";
import {MyRow} from "./Components";
import Send from "./Send";


export const Img = (props) => {
    const {imgSrc, alternate, title, ...other} = props;
    return  <img src={imgSrc} style={{height : 20, margin : 15, marginTop : 20, cursor : 'pointer'}} alt={alternate}
                 title={title} {...other}/>
};

export const MainUser = (props) => {
    const {rowClick, titleChild, chatClick, moreClick, ...other} = props;
    return <div style={{display : 'flex', flexWrap : 'wrap', fontSize : 18, fontWeight : 'bold'}}>
                <div style={{width : 343, padding :'0.5 em'}}>
                    <Row onClick={rowClick} style={{cursor : 'pointer'}}>
                        <Avatar isOwn={true} {...other} imgUrl={Myself} size={'50px'}
                                style={{margin : 10, marginTop : 5}}/>
                        <Title children={titleChild} style={{margin : 18}}/>
                    </Row>
                </div>
                <div style={{width : 100, boxAlign : 'left'}}>
                    <Img imgSrc={Chatlogo} alternate={'new Chat'} title={'new Chat'} onClick={chatClick}/>
                    <Img imgSrc={More} alternate={'more'} title={'more'} onClick={moreClick}/>
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
    const {id, chatHistory, img, children, subtitle, dropdownShow, expandClick, aria, menuShow, ...other} = props;
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
                        <div style={{width : 60.66, boxAlign : 'left'}}>
                            <div className={dropdownShow}>
                                <Img imgSrc={Expand} alternate={'expand'} title={'expand'} onClick={expandClick}
                                     className={'dropdown-toggle'} id={'dropdownMenuButton'} data-toggle={'dropdown'}
                                     aria-haspopup={'true'} aria-expanded={aria}
                                     style={{height : 30, marginLeft : 20, marginTop : 20, cursor : 'pointer'}}/>
                                <div className={menuShow} aria-labelledby={'dropdownMenuButton'}>
                                    <p className={'dropdown-item'}>Profile</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'separator'}/>
            </React.Fragment>
};

export const Messagenew = (props) => {
    const {click, change, name, value, ...other} = props;
    return  <form >
                <div className="form-group" style={{margin : 0}}>
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
    const {title, avatar, children, change, name, value, click, ...other} = props;
    return  <div {...other}>
                <header style={{backgroundColor : '#eeeeee', height : 60}}>
                        <Chater titleChild={title} avatar={avatar}/>
                </header>
                <div style={{height : 602}}>
                    <div style={{height : 558, borderBottom : 'solid 1px #e4e6e6'}}>
                        <MessageList active children={children}/>
                    </div>
                    <div>
                        <Messagenew change={change} name={name} value={value} click={click}/>
                    </div>
                </div>
            </div>
};
import React from 'react';
import {SendButton, TextComposer, TextInput, Row, Avatar, Title, Subtitle, MessageGroup, Message, Bubble, MessageText}
from "@livechat/ui-kit";
import Chat from './Chat';
import More from './More';
import Myself from './Myself';
import Expand from "./Expand";


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
                    <Img imgSrc={Chat} alternate={'new Chat'} title={'new Chat'} onClick={chatClick}/>
                    <Img imgSrc={More} alternate={'more'} title={'more'} onClick={moreClick}/>
                </div>
            </div>
};

export const Chater = (props) => {
    const {titleChild, avatar, ...other} = props;
    return <div style={{display : 'flex', flexWrap : 'wrap', fontSize : 18, fontWeight : 'bold'}}>
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
    const {chatHistory, img, children, dropdownShow, expandClick, aria, menuShow, ...other} = props;
    return  <React.Fragment>
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
                                    textOverflow : 'ellipsis', overflow : 'hidden', whiteSpace : 'nowrap'}}>
                                    {'Hello, how can I help you? We have a lot to talk about'}
                                </Subtitle>
                                </li>
                            </ul>
                        </Row>
                    </div>
                    <div style={{width : 40, boxAlign : 'left'}}>
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
                <div className={'separator'}/>
            </React.Fragment>
};

export const Newmessage = (props) => {
    const {click, ...other} = props;
    return <TextComposer>
                <Row align="center">
                    <TextInput style={{maxHeight : 30}}/>
                    <SendButton onClick={click} {...other}/>
                </Row>
            </TextComposer>
};

export const Read = (props) => {
    const {text, change, ...other} = props;
    return  <MessageGroup>
                <Message isOwn={true}>
                    <Bubble radiusType={'single'}>
                        <MessageText children={text} onChange={change} {...other}/>
                    </Bubble>
                </Message>
            </MessageGroup>
};
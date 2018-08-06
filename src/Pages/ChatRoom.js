import React from "react";
import {Col, Row1} from "../Components/Components";
import {SendButton, TextComposer, TextInput, Row, Avatar, Title} from "@livechat/ui-kit";
import Chat from '../Components/Chat';
import More from '../Components/More'

class ChatRoom extends React.Component {
    constructor(){
        super();
        this.state = {
            username    : localStorage.getItem('username'),
            message     : ''
        }
    }

    render() {
        return  <React.Fragment>
                    <Row1 style={{maxWidth : 1381}}>
                        <Col size={4} style={{paddingRight : 0, borderRight : 'solid 1px #e4e6e6'}}>
                            <header style={{backgroundColor : '#eeeeee', height : 60}}>
                                <div style={{display: 'flex', flexWrap: 'wrap', fontSize: 18, fontWeight : 'bold'}}>
                                    <div style={{width : 343, padding :'0.5 em'}}>
                                        <Row>
                                            <Avatar isOwn={true} letter={this.state.username.charAt(0)} size={'40px'}
                                                    style={{margin : 10}}/>
                                            <Title children={this.state.username} style={{margin : 18}}/>
                                        </Row>
                                    </div>
                                    <div style={{width : 100, boxAlign : 'left'}}>
                                        <img src={Chat} style={{height : 20, margin : 15, marginTop : 20}}
                                             alt={'new chat'} title={'new Chat'} />
                                        <img src={More} style={{height : 20, margin : 15, marginTop : 20}}
                                             alt={'more'} title={'more'}/>
                                    </div>
                                </div>
                            </header>
                            <div style={{height : 602, borderBottom : 'solid 1px #e4e6e6'}}>brambum</div>
                        </Col>
                        <Col size={8} style={{paddingLeft : 0, paddingRight : 0}}>
                            <header style={{backgroundColor : '#eeeeee', height : 60}}>
                                rr
                            </header>
                            <div style={{height : 602}}>
                                <div style={{height : 542}}>

                                </div>
                                <div>
                                    <TextComposer>
                                        <Row align="center">
                                            <TextInput/>
                                            <SendButton/>
                                        </Row>
                                    </TextComposer>
                                </div>
                            </div>
                        </Col>
                    </Row1>
                </React.Fragment>
            ;
    }
}

export default ChatRoom;
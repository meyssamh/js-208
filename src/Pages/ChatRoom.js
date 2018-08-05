import React from "react";
import {Col, Row} from "../Components/Components";
import {AgentBar, Avatar, Column, Title} from '@livechat/ui-kit';

class ChatRoom extends React.Component {
    constructor(){
        super();
        this.state = {
            username : localStorage.getItem('username')
        }
    }
    render() {
        return  <React.Fragment>
                    <Row>
                        <Col size={4}>
                            <AgentBar>
                                <Avatar imgUrl="https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg" />
                                <Column>
                                    <Title>{this.state.username}</Title>
                                </Column>
                            </AgentBar>
                        </Col>
                        <Col size={8}> hi 2</Col>
                    </Row>
                </React.Fragment>
            ;
    }
}

export default ChatRoom;
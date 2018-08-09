import React from 'react';
import {MessageGroup, MessageText, Message, Bubble} from "@livechat/ui-kit";

export const M1 = () => {
    return  <React.Fragment>
                <MessageGroup>
                    <Message>
                        <Bubble radiusType={'single'}>
                        <MessageText style={{maxWidth : 400}}>
                            The fastest way to help your customers - start chatting with visitors
                        </MessageText>
                        </Bubble>
                    </Message>
                    <Message>
                        <Bubble radiusType={'single'}>
                        <MessageText style={{maxWidth : 400}}>
                            The fastest way to help your customers - start chatting with visitors who need your help
                            using a free 30-day trial.
                        </MessageText>
                        </Bubble>
                    </Message>
                    <Message>
                        <Bubble radiusType={'single'}>
                        <MessageText style={{maxWidth : 400}}>Hi! I would like to buy those shoes</MessageText>
                        </Bubble>
                    </Message>
                </MessageGroup>
                <MessageGroup>
                    <Message isOwn={true}>
                        <Bubble radiusType={'single'}>
                            <MessageText style={{maxWidth : 400}}>
                                I love them so much!
                            </MessageText>
                        </Bubble>
                    </Message>
                    <Message isOwn={true}>
                        <Bubble radiusType={'single'}>
                        <MessageText style={{maxWidth : 400}}>This helps me a lot</MessageText>
                        </Bubble>
                    </Message>
                </MessageGroup>
                <MessageGroup>
                    <Message>
                        <Bubble radiusType={'single'}>
                        <MessageText style={{maxWidth : 400}}>No problem!</MessageText>
                        </Bubble>
                        <Bubble radiusType={'single'}>
                        <MessageText style={{maxWidth : 400}}>
                            The fastest way to help your customers - start chatting with visitors who need your help
                            using a free 30-day trial.
                        </MessageText>
                        </Bubble>
                    </Message>
                </MessageGroup>
            </React.Fragment>
};
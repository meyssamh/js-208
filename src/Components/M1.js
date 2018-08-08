import React from 'react';
import {MessageGroup, MessageList, MessageText, Message, Bubble} from "@livechat/ui-kit";

export const M1 = () => {
    return  <MessageList active>
                <MessageGroup>
                    <Message>
                        <Bubble radiusType={'single'}>
                        <MessageText>
                            The fastest way to help your customers - start chatting with visitors
                        </MessageText>
                        </Bubble>
                    </Message>
                    <Message>
                        <Bubble radiusType={'single'}>
                        <MessageText>
                            The fastest way to help your customers - start chatting with visitors who need your help
                            using a free 30-day trial.
                        </MessageText>
                        </Bubble>
                    </Message>
                    <Message>
                        <Bubble radiusType={'single'}>
                        <MessageText>Hi! I would like to buy those shoes</MessageText>
                        </Bubble>
                    </Message>
                </MessageGroup>
                <MessageGroup>
                    <Message isOwn={true}>
                        <Bubble radiusType={'single'}>
                            <MessageText>
                                I love them so much!
                            </MessageText>
                        </Bubble>
                    </Message>
                    <Message isOwn={true}>
                        <Bubble radiusType={'single'}>
                        <MessageText>This helps me a lot</MessageText>
                        </Bubble>
                    </Message>
                </MessageGroup>
                <MessageGroup>
                    <Message>
                        <Bubble radiusType={'single'}>
                        <MessageText>No problem!</MessageText>
                        </Bubble>
                        <Bubble radiusType={'single'}>
                        <MessageText>
                            The fastest way to help your customers - start chatting with visitors who need your help
                            using a free 30-day trial.
                        </MessageText>
                        </Bubble>
                    </Message>
                </MessageGroup>
            </MessageList>
};
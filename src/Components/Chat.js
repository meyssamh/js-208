import React from 'react';
import {Read, Readother} from "./ChatComponents";

export const BillChat = () => {
    return  <React.Fragment>
                <Read children={'Hello'}/>
                <Readother children={'Hi'}/>
                <Read children={'How are you?'}/>
                <Readother children={'Thanks'}/>
                <Readother children={'Can I help you?'}/>
                <Read children={'Are you in the mood to make a Startup company with me?'}/>
                <Readother children={"Nah, I've got no time for that."}/>
                <Read children={'Really! what do you do?'}/>
                <Readother children={'Chilling'}/>
                <Readother children={'Ask Richard Branson, he is still into business and money.'}/>
            </React.Fragment>
};

export const AlbertChat = () => {
    return  <React.Fragment>
                <Readother children={'Hi there'}/>
                <Read children={'Hi'}/>
                <Readother children={'How are you?'}/>
                <Read children={'Not so good. and you?'}/>
                <Readother children={"I'm dead, so ... not bad."}/>
                <Read children={'Do not try to start small talk!'}/>
                <Readother children={'Ok.'}/>
            </React.Fragment>
};

export const RobotChat = () => {
    return  <React.Fragment>
                <Readother children={'WHERE IS JOHN CONNOR?'}/>
                <Read children={'Wait, Why are you yelling?'}/>
                <Readother children={'I am a T-800 Robot and I came from future to save humans from T-1000.'}/>
                <Read children={'soooo, i think you forgot to take your medicine.'}/>
                <Readother children={'What is medicine?'}/>
                <Read children={'bye'}/>
            </React.Fragment>
};
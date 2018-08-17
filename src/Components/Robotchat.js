import React from 'react';
import {Read, Readother} from './ChatComponents';

class Robotchat extends React.Component {
    render() {
        return  <React.Fragment>
                    <Readother children={'WHERE IS JOHN CONNOR?'}/>
                    <Read children={'Wait, Why are you yelling?'}/>
                    <Readother children={'I am a T-800 Robot and I came from future to save humans from T-1000.'}/>
                    <Read children={'soooo, i think you forgot to take your medicine.'}/>
                    <Readother children={'What is medicine?'}/>
                    <Read children={'bye'}/>
                    {this.props.children}
                </React.Fragment>
    }
}

export default Robotchat;
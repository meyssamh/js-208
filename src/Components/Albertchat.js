import React from 'react';
import {Read, Readother} from './ChatComponents';

class Albertchat extends React.Component {
    render() {
        return  <React.Fragment>
                    <Readother children={'Hi there'}/>
                    <Read children={'Hi'}/>
                    <Readother children={'How are you?'}/>
                    <Read children={'Not so good. and you?'}/>
                    <Readother children={"I'm dead, so ... not bad."}/>
                    <Read children={'Do not try to start small talk!'}/>
                    <Readother children={'Ok.'}/>
                    {this.props.children}
                </React.Fragment>
    }
}

export default Albertchat;
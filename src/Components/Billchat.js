import React from 'react';
import {Read, Readother} from './ChatComponents';

class Billchat extends React.Component {
    render() {
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
                    {this.props.children}
                </React.Fragment>
    }
}

export default Billchat;
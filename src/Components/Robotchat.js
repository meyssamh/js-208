import React from "react";
import {RobotChat} from "./Chat";

class Robotchat extends React.Component {
    render() {
        return  <div>
                    <RobotChat/>
                    {this.props.children}
                </div>
    }
}

export default Robotchat;
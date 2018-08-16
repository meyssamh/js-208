import React from "react";
import {AlbertChat} from "./Chat";

class Albertchat extends React.Component {
    render() {
        return  <div>
                    <AlbertChat/>
                    {this.props.children}
                </div>
    }
}

export default Albertchat;
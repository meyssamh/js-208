import React from "react";
import {BillChat} from "./Chat";

class Billchat extends React.Component {
    render() {
        return  <div>
                    <BillChat/>
                    {this.props.children}
                </div>
    }
}

export default Billchat;
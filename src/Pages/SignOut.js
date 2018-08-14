import React from 'react';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import Expand from "../Components/Expand";
import {Img} from "../Components/ChatComponents";

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle1 = this.toggle1.bind(this);
        this.state = {
            dropdownOpen1 : false
        };
    }

    toggle1() {
        this.setState({
            dropdownOpen1 : !this.state.dropdownOpen1
        });
    }

    render() {
        return (
            <Dropdown isOpen={this.state.dropdownOpen1} toggle={this.toggle1}>
                <DropdownToggle
                    tag="span"
                    onClick={this.toggle1}
                    data-toggle="dropdown"
                    aria-expanded={this.state.dropdownOpen1}
                >
                    <Img imgSrc={Expand} alternate={'expand'} title={'expand'}
                         style={{height : 30,cursor : 'pointer'}}/>
                </DropdownToggle>
                <DropdownMenu>
                    <div onClick={this.toggle1}>Profile</div>
                </DropdownMenu>
            </Dropdown>
        );
    }
}
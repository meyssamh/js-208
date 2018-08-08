import React from "react";
import {Col, MyRow} from "../Components/Components";
import {MainUser, Newmessage, User} from "../Components/ChatComponents";
import './Main.css';
import Bill from '../Components/BillGates';
import Albert from '../Components/AlbertEinstein';
import Robot from '../Components/Robot';
import {M1} from "../Components/M1";
// import {M1} from "../Components/M1";


class ChatRoom extends React.Component {
    constructor(){
        super();
        this.state = {
            username    : localStorage.getItem('username'),
            aria1       : false,
            class1      : 'dropdown',
            menu1       : 'dropdown-menu',
            aria2       : false,
            class2      : 'dropdown',
            menu2       : 'dropdown-menu',
            aria3       : false,
            class3      : 'dropdown',
            menu3       : 'dropdown-menu',
            message     : ''
        };
        this.drop1      = this.drop1.bind(this);
        this.drop2      = this.drop2.bind(this);
        this.drop3      = this.drop3.bind(this);
        this.closeMenu  = this.closeMenu.bind(this);
    };

    drop1 = () => {
        this.setState({
            aria1   : true,
            class1  : 'dropdown show',
            menu1   : 'dropdown-menu show'
        }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    };

    drop2 = () => {
        this.setState({
            aria2   : true,
            class2  : 'dropdown show',
            menu2   : 'dropdown-menu show'
        }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    };

    drop3 = () => {
        this.setState({
            aria3   : true,
            class3  : 'dropdown show',
            menu3   : 'dropdown-menu show'
        }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    };

    closeMenu() {
        this.setState({
            aria1   : false,
            class1  : 'dropdown',
            menu1   : 'dropdown-menu',
            aria2   : false,
            class2  : 'dropdown',
            menu2   : 'dropdown-menu',
            aria3   : false,
            class3  : 'dropdown',
            menu3   : 'dropdown-menu',
        }, () => {
            document.removeEventListener('click', this.closeMenu);
        });
    };

    render() {
        return  <React.Fragment>
                    <MyRow style={{maxWidth : 1381}}>
                        <Col size={4} style={{paddingRight : 0, borderRight : 'solid 1px #e4e6e6'}}>
                            <header style={{backgroundColor : '#eeeeee', height : 60}}>
                                <MainUser titleChild={this.state.username}/>
                            </header>
                            <div style={{height : 602, borderBottom : 'solid 1px #e4e6e6'}}>
                                <User img={Bill} children={'Bill Gates'} aria={this.state.aria1}
                                      dropdownShow={this.state.class1} menuShow={this.state.menu1}
                                      expandClick={this.drop1}/>
                                <User img={Albert} children={'Albert Einstein'}
                                      aria={this.state.aria3} dropdownShow={this.state.class2}
                                      menuShow={this.state.menu2} expandClick={this.drop2}/>
                                <User img={Robot} children={'Terminator'} aria={this.state.aria3}
                                      dropdownShow={this.state.class3} menuShow={this.state.menu3}
                                      expandClick={this.drop3}/>
                            </div>
                        </Col>
                        <Col size={8} style={{paddingLeft : 0, paddingRight : 0}}>
                            <header style={{backgroundColor : '#eeeeee', height : 60}}>
                                rr
                            </header>
                            <div style={{height : 602}}>
                                <div style={{height : 550}}>
                                    <M1/>
                                </div>
                                <div>
                                    <Newmessage/>
                                </div>
                            </div>
                        </Col>
                    </MyRow>
                </React.Fragment>;
    }
}

export default ChatRoom;
import React from 'react';
import {Col, MyRow} from '../Components/Components';
import {MainUser, Read, User, View} from '../Components/ChatComponents';
import './Main.css';
import Bill from '../Components/BillGates';
import Albert from '../Components/AlbertEinstein';
import Robot from '../Components/Robot';
import {BillChat, AlbertChat, RobotChat} from '../Components/Chat';



class ChatRoom extends React.Component {
    constructor(){
        super();
        this.state = {
            username        : localStorage.getItem('username'),
            mainchat        : true,
            billchat        : false,
            albertchat      : true,
            robotchat       : true,
            mainpart        : false,
            userpro         : true,
            billpro         : true,
            albertpro       : true,
            robotpro        : true,
            backcolor       : true,
            aria1           : false,
            class1          : 'dropdown',
            menu1           : 'dropdown-menu',
            aria2           : false,
            class2          : 'dropdown',
            menu2           : 'dropdown-menu',
            aria3           : false,
            class3          : 'dropdown',
            menu3           : 'dropdown-menu',
            messagebill     : '',
            messagealbert   : '',
            messagerobot    : '',
            newmessage      : '',
            messages        : {}
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

    handleChange = (e) => {
        this.setState({
            messagebill : e.target.value
        });
    };

    add = (e) =>{
        e.preventDefault();
        const NextMessage = Object.keys(this.state.messages).length;
        let clone = {...this.state.messages, [NextMessage] : this.state.messagebill};
        this.setState({
            messages        : clone,
            messagebill     : ''
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
                                <User img={Bill} children={'Bill Gates'} subtitle={'... money money money money ...'}
                                      aria={this.state.aria1} dropdownShow={this.state.class1} id={'user1'}
                                      menuShow={this.state.menu1} expandClick={this.drop1}/>
                                <User img={Albert} children={'Albert Einstein'} subtitle={'E = MC-Albert'}
                                      aria={this.state.aria3} dropdownShow={this.state.class2} id={'user2'}
                                      menuShow={this.state.menu2} expandClick={this.drop2}/>
                                <User img={Robot} children={'Terminator'} subtitle={'Hasta la vista, baby'}
                                      aria={this.state.aria3} dropdownShow={this.state.class3} id={'user3'}
                                      menuShow={this.state.menu3} expandClick={this.drop3}/>
                            </div>
                        </Col>
                        <Col size={8} style={{paddingLeft : 0, paddingRight : 0}}>
                            <div id={'maincol'} style={{width : 919.33, height : 662}} hidden={this.state.mainchat}>
                            <h2 className={'welcome'}>Welcome to Dialogue Chatroom!</h2>
                            </div>
                            <View title={'Bill Gates'} avatar={Bill} change={this.handleChange} click={this.add}
                                  value={this.state.messagebill} name={'Bill'} children={<BillChat/>}
                                  hidden={this.state.billchat}/>
                            <View title={'Albert Einstein'} avatar={Albert} change={this.handleChange} click={this.add}
                                  value={this.state.messagealbert} name={'Albert'} children={<AlbertChat/>}
                                  hidden={this.state.albertchat}/>
                            <View title={'Robot'} avatar={Robot} change={this.handleChange} click={this.add}
                                  value={this.state.messagerobot} name={'Robot'} children={<RobotChat/>}
                                  hidden={this.state.robotchat}/>
                        </Col>
                    </MyRow>
                </React.Fragment>;
    }
}

export default ChatRoom;

// export const Bc = () => {
//     <BillChat/>
//     {
//         Object.keys(this.state.messages).map((Index) => {
//             return  <Read key={Index} children={this.state.messages[Index]}/>
//         })
//     }
// };
//
// export const Ac = () => {
//     <AlbertChat/>
//     {
//         Object.keys(this.state.messages).map((Index) => {
//             return  <Read key={Index} children={this.state.messages[Index]}/>
//         })
//     }
// };
//
// export const Rc = () => {
//     <RobotChat/>
//     {
//         Object.keys(this.state.messages).map((Index) => {
//             return  <Read key={Index} children={this.state.messages[Index]}/>
//         })
//     }
// };
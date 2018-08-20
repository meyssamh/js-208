// Vendor
import React from 'react';

// Components
import {Col, MyRow} from '../Components/Components';
import {BackColor, MainUser, Newchat, Profile, Read, User, UserProfile, View} from '../Components/ChatComponents';
import Billchat from '../Components/Billchat';
import Albertchat from '../Components/Albertchat';
import Robotchat from '../Components/Robotchat';

// Css
import './Main.css';

// Component-Assets
import Bill from '../Components/BillGates';
import Albert from '../Components/AlbertEinstein';
import Robot from '../Components/Robot';
import Myself from '../Components/Myself';


class ChatRoom extends React.Component {
    constructor(props){
        super(props);
        this.username = localStorage.getItem('username') !== null ?
            localStorage.getItem('username') : localStorage.setItem('username', 'username');
        this.color = localStorage.getItem('BackColor') !== null ?
            localStorage.getItem('BackColor') : localStorage.setItem('BackColor', 'white');
        this.chat1 = localStorage.getItem('bill') !== null ? JSON.parse(localStorage.getItem('bill')) : [];
        this.chat2 = localStorage.getItem('albert') !== null ? JSON.parse(localStorage.getItem('albert')) : [];
        this.chat3 = localStorage.getItem('robot') !== null ? JSON.parse(localStorage.getItem('robot')) : [];
        this.toggle1 = this.toggle1.bind(this);
        this.toggle2 = this.toggle2.bind(this);
        this.toggle3 = this.toggle3.bind(this);
        this.toggle4 = this.toggle4.bind(this);
        this.state = {
            username        : this.username,
            mainchat        : false,
            billchat        : true,
            albertchat      : true,
            robotchat       : true,
            mainpart        : false,
            userpro         : true,
            billpro         : true,
            albertpro       : true,
            robotpro        : true,
            backcolor       : true,
            newchat         : true,
            backgroundColor : this.color,
            dropdownopen1   : false,
            dropdownopen2   : false,
            dropdownopen3   : false,
            dropdownopen4   : false,
            messagebill     : '',
            messagealbert   : '',
            messagerobot    : '',
            messagesbill    : this.chat1,
            messagesalbert  : this.chat2,
            messagesrobot   : this.chat3
        }
    };

    toggle1() {
        this.setState({
            dropdownopen1 : !this.state.dropdownopen1
        });
    };

    toggle2() {
        this.setState({
            dropdownopen2 : !this.state.dropdownopen2
        });
    };

    toggle3() {
        this.setState({
            dropdownopen3 : !this.state.dropdownopen3
        });
    };

    toggle4() {
        this.setState({
            dropdownopen4 : !this.state.dropdownopen4
        });
    };

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name] : value
        });
    };

    addbill = (e) => {
        e.preventDefault();
        const {messagebill} = this.state;
        let Data = this.state.messagesbill;
        Data.push({
            messagebill
        });
        localStorage.setItem('bill', JSON.stringify(Data));
        this.setState({
            messagesbill    : Data,
            messagebill     : ''
        });
    };

    addalbert = (e) => {
        e.preventDefault();
        const {messagealbert} = this.state;
        let Data = this.state.messagesalbert;
        Data.push({
            messagealbert
        });
        localStorage.setItem('albert', JSON.stringify(Data));
        this.setState({
            messagesalbert    : Data,
            messagealbert     : ''
        });
    };

    addrobot = (e) => {
        e.preventDefault();
        const {messagerobot} = this.state;
        let Data = this.state.messagesrobot;
        Data.push({
            messagerobot
        });
        localStorage.setItem('robot', JSON.stringify(Data));
        this.setState({
            messagesrobot    : Data,
            messagerobot     : ''
        });
    };

    open = () => {
        this.setState(prevState => {
            return {
                mainpart    : !prevState.mainpart,
                backcolor   : !prevState.backcolor
            }
        });
    };

    open2 = () => {
        this.setState(prevState => {
            return {
                mainpart    : !prevState.mainpart,
                userpro     : !prevState.userpro
            }
        });
    };

    open3 = () => {
        this.setState(prevState => {
            return {
                mainpart    : !prevState.mainpart,
                billpro     : !prevState.billpro
            }
        });
    };

    open4 = () => {
        this.setState(prevState => {
            return {
                mainpart    : !prevState.mainpart,
                albertpro   : !prevState.albertpro
            }
        });
    };

    open5 = () => {
        this.setState(prevState => {
            return {
                mainpart    : !prevState.mainpart,
                robotpro    : !prevState.robotpro
            }
        });
    };

    open6 = () => {
        this.setState(prevState => {
            return {
                mainpart    : !prevState.mainpart,
                newchat     : !prevState.newchat
            }
        });
    };

    bill = () => {
        this.setState({
            mainchat    : true,
            billchat    : false,
            albertchat  : true,
            robotchat   : true
        });
    };

    albert = () => {
        this.setState({
            mainchat    : true,
            billchat    : true,
            albertchat  : false,
            robotchat   : true
        });
    };

    robot = () => {
        this.setState({
            mainchat    : true,
            billchat    : true,
            albertchat  : true,
            robotchat   : false
        });
    };

    show1 = () => {
        this.setState(prevState => {
            return {
                mainchat    : true,
                billchat    : false,
                albertchat  : true,
                robotchat   : true,
                mainpart    : !prevState.mainpart,
                newchat     : !prevState.newchat
            }
        });
    };

    show2 = () => {
        this.setState(prevState => {
            return {
                mainchat    : true,
                billchat    : true,
                albertchat  : false,
                robotchat   : true,
                mainpart    : !prevState.mainpart,
                newchat     : !prevState.newchat
            }
        });
    };

    show3 = () => {
        this.setState(prevState => {
            return {
                mainchat    : true,
                billchat    : true,
                albertchat  : true,
                robotchat   : false,
                mainpart    : !prevState.mainpart,
                newchat     : !prevState.newchat
            }
        });
    };

    close = () => {
        this.setState(prevState => {
            return {
                mainpart    : !prevState.mainpart,
                userpro     : true,
                billpro     : true,
                albertpro   : true,
                robotpro    : true,
                backcolor   : true,
                newchat     : true
            }
        });
    };

    changecolor = (e) => {
        e.preventDefault();
        localStorage.setItem('BackColor', e.target.id);
        this.setState({
            BackgroundColor : this.color
        });
    };

    signout = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('BackColor');
        localStorage.removeItem('bill');
        localStorage.removeItem('albert');
        localStorage.removeItem('robot');
        this.props.history.push('/');
    };

    render() {
        return  <React.Fragment>
                    <MyRow style={{maxWidth : 1381}}>
                        <Col size={4} style={{paddingRight : 0, borderRight : 'solid 1px #e4e6e6'}}>
                            <div className={'maincol4'} hidden={this.state.mainpart}>
                                <header style={{backgroundColor : '#eeeeee', height : 65}}>
                                    <MainUser rowClick={this.open2} titleChild={this.state.username}
                                              isOpen={this.state.dropdownopen1} isToggle={this.toggle1}
                                              backColor={this.open} signout={this.signout} chatClick={this.open6}/>
                                </header>
                                <div style={{height : 597, borderBottom : 'solid 1px #e4e6e6'}}>
                                    <User img={Bill} children={'Bill Gates'} subtitle={'... money money money money ...'}
                                          id={'user1'} isOpen={this.state.dropdownopen2} isToggle={this.toggle2}
                                          profile={this.open3} chatHistory={this.bill}/>
                                    <User img={Albert} children={'Albert Einstein'} subtitle={'E = MC-Albert'}
                                          id={'user2'} isOpen={this.state.dropdownopen3} isToggle={this.toggle3}
                                          profile={this.open4} chatHistory={this.albert}/>
                                    <User img={Robot} children={'Terminator'} subtitle={'Hasta la vista, baby'}
                                          id={'user3'} isOpen={this.state.dropdownopen4} isToggle={this.toggle4}
                                          profile={this.open5} chatHistory={this.robot}/>
                                </div>
                            </div>
                            <UserProfile avatar={Myself} username={this.state.username} title={'nice days'}
                                         hidden={this.state.userpro} click={this.close}/>
                            <Profile avatar={Bill} username={'Bill Gates'} email={'bill.gates@msn.com'}
                                     title={'... money money money money ...'} hidden={this.state.billpro}
                                     click={this.close}/>
                            <Profile avatar={Albert} username={'Albert Einstein'} email={'albert.einstein@princeton.com'}
                                     title={'E = MC-Albert'} hidden={this.state.albertpro} click={this.close}/>
                            <Profile avatar={Robot} username={'Terminator'} email={'T800@skynet.com'}
                                     title={'Hasta la vista, baby'} hidden={this.state.robotpro} click={this.close}/>
                            <BackColor hidden={this.state.backcolor} white={this.changecolor}
                                       lightgreen={this.changecolor} lightblue={this.changecolor}
                                       lightyellow={this.changecolor} click={this.close}/>
                            <Newchat hidden={this.state.newchat} click={this.close} showChat1={this.show1}
                                     showChat2={this.show2} showChat3={this.show3}/>
                        </Col>
                        <Col size={8} style={{paddingLeft : 0, paddingRight : 0}}>
                            <div className={'maincol8'} hidden={this.state.mainchat}>
                                <h2 className={'welcome'}>Welcome to Dialogue Chatroom!</h2>
                            </div>
                            <View title={'Bill Gates'} avatar={Bill} change={this.handleChange} click={this.addbill}
                                  value={this.state.messagebill} name={'messagebill'} children={<Billchat
                                    children={this.state.messagesbill.map((Data, Index) => {
                                    return <Read key={Index} children={Data['messagebill']}/>;})}
                                    />
                                  }
                                  hidden={this.state.billchat}
                                  style={{backgroundColor : localStorage.getItem('BackColor')}}/>
                            <View title={'Albert Einstein'} avatar={Albert} change={this.handleChange}
                                  click={this.addalbert} value={this.state.messagealbert} name={'messagealbert'}
                                  children={<Albertchat children={this.state.messagesalbert.map((Data, Index) => {
                                      return <Read key={Index} children={Data['messagealbert']}/>;})}/>}
                                  hidden={this.state.albertchat}
                                  style={{backgroundColor : localStorage.getItem('BackColor')}}/>
                            <View title={'Robot'} avatar={Robot} change={this.handleChange} click={this.addrobot}
                                  value={this.state.messagerobot} name={'messagerobot'} children={<Robotchat children={
                                this.state.messagesrobot.map((Data, Index) => {
                                return <Read key={Index} children={Data['messagerobot']}/>;
                                })}
                                    />}
                                  hidden={this.state.robotchat}
                                  style={{backgroundColor : localStorage.getItem('BackColor')}}/>
                        </Col>
                    </MyRow>
                </React.Fragment>;
    }
}

export default ChatRoom;
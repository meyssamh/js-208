import React from 'react';
import './Main.css';
import {Button1, Col, Info, Nav} from '../Components/Components';
import {Link} from 'react-router-dom';
import Logo from '../Components/Logo1';
import {Footer} from '../Components/Footer';


class SignIn extends React.Component {

    constructor() {
        super();
        this.state = {
            username    : '',
            password    : '',
            nav1Hidden  : true
        };
    };

    _isMounted = false;

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name] : value
        });
    };

    handleClick = () => {
        localStorage.setItem('username', this.state.username);
        if((this.state.username.length && this.state.password.length) > 1) {
            this.props.history.push('/ChatRoom');
        }
    };

    componentDidMount() {
        this._isMounted = true;
        this.whenScroll();
        window.addEventListener('scroll', () => {
            this.whenScroll();
        });
    };

    whenScroll = () => {
        let supportPageOffset = window.pageXOffset !== undefined;
        let Compact = ((document.compatMode || '') === 'Compact');
        let scroll = {
            y: supportPageOffset ? window.pageYOffset :
                Compact ? document.documentElement.scrollTop :
                    document.body.scrollTop
        };

        if(this._isMounted === true) {
            if (scroll.y > 50) {
                this.setState({
                    nav1Hidden: false
                });
            }
            if (scroll.y <= 50) {
                this.setState({
                    nav1Hidden: true
                });
            }
        }
    };

    componentWillUnmount() {
        this._isMounted = false;
        this.whenScroll();
        window.removeEventListener('scroll', () => {
            this.whenScroll();
        });
    };

    render() {
        return  <React.Fragment>
                    <div className={'sign_in'}>
                        <Nav darkNav={''} src={Logo} button1Type={'outline-success'} hidButton1={true}
                             button2Type={'outline-danger'} hidButton2={false} hidLink={false}
                             hidLogo={true}/>
                        <Nav darkNav={'black bg-dark fixed-top'} src={Logo} button1Type={'outline-success'}
                             hidButton1={true} button2Type={'outline-danger'} hidButton2={false} hidLink={false}
                             hidLogo={true} hidden={this.state.nav1Hidden}/>
                        <Col size={5}>
                            <form>
                                <h3>Sign in</h3>
                                <small>or <Link to={'/SignUp'}>create an account</Link></small>
                                <br/><br/>
                                <Info inputType={'text'} iconType={'user'} iconSize={18} id={'inputUsername'}
                                      place={'Username'} value={this.state.username} onChange={this.handleChange}
                                      name={'username'}/>
                                <Info inputType={'password'} iconType={'lock'} iconSize={20} id={'inputPassword'}
                                      place={'Password'} value={this.state.password1} onChange={this.handleChange}
                                      name={'password'}/>
                                <br/>
                                <Button1 type={'primary'} children={'Sign in'} onClick={this.handleClick}/>
                            </form>
                        </Col>
                    </div>
                    <Footer/>
                </React.Fragment>;
    }
}

export default SignIn;
import React from "react";
import {Nav} from "../Components/Components";
import './Main.css';
import Logo from '../Components/Logo';
import Logo1 from '../Components/Logo1';
import {Footer} from "../Components/Footer";

class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            nav1Hidden : true
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            let supportPageOffset = window.pageXOffset !== undefined;
            let Compact = ((document.compatMode || '') === 'Compact');
            let scroll = {
                y: supportPageOffset ? window.pageYOffset :
                    Compact ? document.documentElement.scrollTop :
                        document.body.scrollTop
            };

            if(scroll.y > 50){
                this.setState({
                    nav1Hidden : false
                });
            } if(scroll.y < 50) {
                this.setState({
                    nav1Hidden: true
                });
            }
        });
    };

    render() {
        return  <React.Fragment>
                    <div className={'main'}>
                        <Nav darkNav={''} src={Logo} button1Type={'outline-success'} hidButton1={false}
                             button2Type={'outline-danger'} hidButton2={false} hidLink={true}
                             hidLogo={false}/>
                        <Nav darkNav={'dark bg-dark fixed-top'} src={Logo1} button1Type={'outline-success'} hidButton1={false}
                             button2Type={'outline-danger'} hidButton2={false} hidLink={true}
                             hidLogo={false} hidden={this.state.nav1Hidden}/>
                        <div className={'home'}>
                            <h1 style={{marginTop : 50, fontSize : 70, color : 'black'}} className={'App-title'}>
                                Welcome to Dialogue</h1>
                        </div>
                    </div>
                    <Footer/>
                </React.Fragment>;
    }
}

export default Home;
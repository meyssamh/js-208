import React from 'react';
import {Col, Container, MyRow} from "./Components";
import {Link} from "react-router-dom";

export const Footer = () => {
    return  <footer className={'footer'}>
                <Container style={{marginBottom : 50}}>
                    <MyRow>
                        <Col size={4} id={'border_right'}>
                            <h4>About</h4>
                            <div style={{marginLeft : 20}}>
                                <Link to={'/Sitemap'} children={'Sitemap'}/>
                                <br/>
                                <Link to={'/ContactUs'} children={'Contact Us'}/>
                                <br/>
                                <Link to={'/AboutUs'} children={'About Us'}/>
                                <br/>
                                <Link to={'/Founders'} children={'Founders'}/>
                            </div>
                        </Col>
                        <Col size={4} id={'border_right'}>
                            <h4>Services</h4>
                                <div style={{marginLeft : 20}}>
                                    <Link to={'/Jobs'} children={'Jobs'}/>
                                    <br/>
                                    <Link to={'/FAQ'} children={'FAQ'}/>
                                    <br/>
                                    <Link to={'/Access'} children={'How To Access'}/>
                                    <br/>
                                    <Link to={'/map'} children={'Location'}/>
                            </div>
                        </Col>
                        <Col size={4}>
                            <h4>Downloads</h4>
                            <div style={{marginLeft : 20}}>
                                <Link to={'/Downloads'} children={'Downloads'}/>

                            </div>
                        </Col>
                    </MyRow>
                </Container>
                <small style={{marginLeft : 470}}>
                    This Website is copyrighted by Dialogue Communications LTD.
                </small>
            </footer>
};

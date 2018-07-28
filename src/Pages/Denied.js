import React from "react";
import './SignIn.css';
import {Col} from "../Components/Components";
import {Link} from "react-router-dom";


class Denied extends React.Component {
    render() {
        return  <React.Fragment>
            <Col size={5}>
                <form>
                    <h3>Sign in</h3>
                    <small>or <Link to={'./SignUp'}>create an account</Link></small>
                    <br/><br/>
                    <div className="form-group">
                        <input type="text" className="form-control" id="InputUsername"
                               aria-describedby="emailHelp" placeholder="&#xf007; Username"/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="InputPassword"
                               placeholder="&#xf023; Password"/>
                    </div>
                    <div style={{color : 'red'}}>
                        Access Denied : You have entered an invalid username or password!
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </form>
            </Col>
        </React.Fragment>;
    }
}

export default Denied;
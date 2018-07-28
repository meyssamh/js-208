import React from "react";

class Home extends React.Component {
    render() {
        const Style = {
            color : 'red',
            textAlign : 'center',
            marginTop : 300
        };
        return  <h1 style={Style}>404 : Page Not Found!</h1>;
    }
}

export default Home;
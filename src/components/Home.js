import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render(){
        return (
            <div>
                <Link to="/dashboard"><button>Log In</button></Link>
            </div>
        )
    }
}

export default Home;
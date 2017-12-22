import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Dashboard extends Component {
    render(){
        return (
            <div>
                <Link to="wizard/1"><button>Add new property</button></Link>
                <h2>List properties with "desired rent" greater than: 
                    ${<input placeholder="0"/>}</h2>
                    <button>Filter</button>
                    <button>Reset</button>
                    <h1>Home Listings</h1>
            </div>
        )
    }
}

export default Dashboard;
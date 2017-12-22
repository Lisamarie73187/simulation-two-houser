import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {updateAddress} from '../ducks/reducer';
import { updateCity } from '../ducks/reducer';
import { updateState } from '../ducks/reducer';
import { updateZip } from '../ducks/reducer';



class WizardTwo extends Component {

    render(){
        return (
            <div>
                <h2>Address</h2><input/> 
                <h2>City</h2><input/>
                <h2>State</h2><input/>
                <h2>Zip</h2><input/>
                <Link to="/wizard/3"><button>Next Step</button></Link>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {address, state1, city, zip} = state;

    return {
        address,
        state1,
        city,
        zip
    }
}

export default connect (mapStateToProps, {updateAddress, updateCity, updateState, updateZip})(WizardTwo);
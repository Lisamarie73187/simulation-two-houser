import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StepSlider from '../components/StepSlider';
import { connect } from 'react-redux';
import { updatePropertyName } from '../ducks/reducer';
import { updatePropertyDescription } from '../ducks/reducer';


class WizardOne extends Component {
    render(){
        return (
            <div>
                <StepSlider/>
                <h2>Property Name</h2>
                <input type="text" onChange={(e) => this.props.updatePropertyName(e.target.value)}></input>
                <h2>Property Description</h2>
                <input type="text" onChange={(e) => this.props.updatePropertyDescription(e.target.value)}></input>
                <div>
                <Link to="/wizard/2"><button>Next Step</button></Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {propertyName, propertyDescription} = state;

    return {
        propertyName,
        propertyDescription
    };
}

export default connect (mapStateToProps, {updatePropertyName, updatePropertyDescription})(WizardOne);
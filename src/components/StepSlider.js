import React, {Component} from 'react';
import step_inactive from '../step_inactive.png';

class StepSlider extends Component {
    render(){
        return (
            <div>
               <img src={step_inactive} alt="steps"/>
            </div>
        )
    }
}

export default StepSlider;
import React, { Component } from 'react';




class WizardThree extends Component {
    constructor(){
        super()
        this.state = {
            user: ''
        }
   this.handleInput = this.handleInput.bind(this)
    }

    handleInput(value){
        this.setState({
            user: value
        })
    }
  render() {
    return (
      <div className="App">
       <input  type="text" onChange={(e) => this.handleInput(e.target.value)}/>
       
        <p>h{this.state.user}</p>
      </div>
    );
  }
}

export default WizardThree;

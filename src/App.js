import React, { Component } from 'react';
import ResultComponents from './Components/ResultComponents.js';
import KeypadComponents from './Components/KeypadComponents.js';
import './App.css';

class App extends Component{
  //Constructor
  constructor(){
    super();

    this.state = {
        result: ""
    }
}

 //calculate function
 calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result)|| ""  + "")
      });
    } 
    catch (error) {
      this.setState({
        result:"error"
      });
    }
 };

 //backspace function
 backspace = () =>{
  this.setState({
    result: this.state.result.slice(0, -1)
})
};

//reset function
reset = () => {
  this.setState({
      result: ""
  })
};
 
//onClick function
onClick = button =>{
  if(button === "="){
    this.calculate();
  }
  else if(button === "CE"){
    this.backspace();
  }
  else if(button === "C"){
    this.reset();
  }
  else {
    this.setState({
        result: this.state.result + button
    })
}
};

  render(){
    return (
    <div className="App">
      <div className="calculator-body">
        <h1>Simple Calculator</h1>
          <ResultComponents result={this.state.result}/>
          <KeypadComponents onClick={this.onClick}/>
      </div>
    </div>
  );
}
}
export default App;

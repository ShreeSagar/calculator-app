import React, { Component } from 'react';

class ResultComponents extends Component{
   render(){
       let {result}=this.props;
       return(
          <div class="result">
             <p>{result}</p>
          </div>
       );
   }
}
export default ResultComponents;
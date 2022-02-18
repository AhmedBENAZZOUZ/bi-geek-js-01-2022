 
import React from 'react';
import Child from './Child';


export default class Parent extends React.Component{
  constructor(props){
    super(props); 
    this.state = {
        responseFromChild : ''
    }


    this.messageFromMyChild = this.messageFromMyChild.bind(this);
  }


  messageFromMyChild(str){
      
    this.setState(
        { responseFromChild: "message from my child : "+str }
    )
  }


  render(){
    return(
      <div >
        <h1>I'm the parent</h1>

        <p>this is my child</p>


        <p>
            { this.state.responseFromChild }
        </p>


        <Child message="hello son !!" sendResponseFN = { this.messageFromMyChild } />


      </div>
    );
  }
};

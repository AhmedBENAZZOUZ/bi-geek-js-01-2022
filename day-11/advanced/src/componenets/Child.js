
import React from 'react';


export default class Child extends React.Component{
  constructor(props){
    super(props); 

    console.log(props);
    this.state = {
        message: props.message,
        sendResponseFN : props.sendResponseFN,
        
    }
  }


  render(){
    return(
      <div >
        <h1>I'm the child</h1>
        <p>
            my parent says: { this.state.message }
        </p>


        <button onClick={()=>{
            //....
            this.state.sendResponseFN("hello parent")



        }} >reply</button>

      </div>
    );
  }
};

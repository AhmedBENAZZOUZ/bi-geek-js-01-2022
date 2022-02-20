import './user.css';
import React from 'react';



export default class User extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    return(
      <div>
        <h1>Username</h1>
        <p>exmpl@email.com</p>
      </div>
    );
  }
};

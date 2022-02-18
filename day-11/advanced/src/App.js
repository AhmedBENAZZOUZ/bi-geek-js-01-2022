import logo from './logo.svg';
import './App.css';
import React from 'react';
import Parent from './componenets/Parent';


export default class App extends React.Component{
  constructor(props){
    super(props); 
  }


  render(){
    return(
      <div >
        <Parent />

      </div>
    );
  }
};

import logo from './logo.svg';
import './App.css';
import React from 'react';


export default class DarkMode extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      btnState: false
    }
  }


  render(){
    return(
      <div className= { this.state.btnState === true ? 'dark-mode' :'' } >
        <button onClick={ ()=>{
          this.setState({
            btnState : ! this.state.btnState
          })
        } } >click me</button>





          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, sunt? Sapiente soluta molestiae dicta! Ducimus obcaecati sed distinctio recusandae quos a facere reiciendis, rem harum asperiores laudantium aperiam itaque perspiciatis.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, sunt? Sapiente soluta molestiae dicta! Ducimus obcaecati sed distinctio recusandae quos a facere reiciendis, rem harum asperiores laudantium aperiam itaque perspiciatis.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, sunt? Sapiente soluta molestiae dicta! Ducimus obcaecati sed distinctio recusandae quos a facere reiciendis, rem harum asperiores laudantium aperiam itaque perspiciatis.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, sunt? Sapiente soluta molestiae dicta! Ducimus obcaecati sed distinctio recusandae quos a facere reiciendis, rem harum asperiores laudantium aperiam itaque perspiciatis.
          </p>
          

      </div>
    );
  }
};

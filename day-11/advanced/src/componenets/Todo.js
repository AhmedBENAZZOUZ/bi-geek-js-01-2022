import React from "react";

export default class Todo extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        employees:[],
        tmpEmployeeName:''
      }
    }
  
  
    addEmployee(){
      let tmpEmployeesArray =this.state.employees ;
  
      tmpEmployeesArray.push( this.state.tmpEmployeeName)
  
      this.setState({
        employees: tmpEmployeesArray,
        tmpEmployeeName:''
      })
    }
  
    render(){
      return(
        <div   >
  
          <h3>Employees:</h3>
          <hr/>
  
          {
            this.state.employees.map((e)=>{
              return(
                <p><strong>{ e }</strong></p>
              );
            })
          }
  
          <h3>Add new employee</h3>
          <input type="text" value={ this.state.tmpEmployeeName }  onChange={ (event)=>{  this.setState({ tmpEmployeeName: event.target.value })  } }  />
          <button onClick={ ()=>{
            this.addEmployee();
          } }  >save</button>
  
  
        </div>
      );
    }
  };
  
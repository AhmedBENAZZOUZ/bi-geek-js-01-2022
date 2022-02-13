
import './App.css';
import Employee from './componenets/Employee';
import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const title = <h1>my title</h1>;
  
    return (
      <div >
        { title }
        <p>
          List of employees:
        </p>
        <Employee  fired={ false }  year={ 2012 } email="tchourabi@gmail.com" fullname="chourabi taher" phone="93863732" />
        <Employee  fired={ false } year={ 2006 }  email="test@gmail.com" fullname="test taher" phone="11223366" />
        <Employee  fired={ true }  year={ 2008 }  email="test@gmail.com" fullname="test taher" phone="11223366" />
  
      </div>
    );
  }
}

export default App;

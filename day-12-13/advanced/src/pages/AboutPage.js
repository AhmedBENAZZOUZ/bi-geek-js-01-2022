
import React from 'react';
import NavBar from '../componenets/NavBar';



export default class AboutPage extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    return(
      <div>
         <NavBar />


            <div className="container mt-5">
            <h1>About</h1>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit temporibus placeat ipsam! Quasi architecto quia aperiam impedit! Aspernatur, molestiae consequuntur magni dolor, laboriosam atque cum quis aliquam accusamus ullam pariatur.
            </p>
            </div>

      </div>
    );
  }
};



import React from 'react';

import NavBar from '../componenets/NavBar';



export default class ArticleDetailsPage extends React.Component{
  constructor(props){
    super(props);

    console.log(props);

    this.state = {
        id: props.match.params.id
    }
  }


  render(){
    return(
      <div>
          <NavBar />


          <div className="container mt-5">
            <h1>Getting article N° { this.state.id } details</h1>
          </div>

                    

      </div>
    );
  }
};

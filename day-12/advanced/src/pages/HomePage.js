
import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../componenets/NavBar';



export default class HomePage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        articles:[
            { title:"React JS", id:1 },
            { title:"Node JS", id:2 },
            { title:"Router JS", id:3 },
            
        ]
    }
  }


  render(){
    return(
      <div>
          <NavBar />


          <div className="container mt-5">
            <h1>Welcome to our app</h1>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit temporibus placeat ipsam! Quasi architecto quia aperiam impedit! Aspernatur, molestiae consequuntur magni dolor, laboriosam atque cum quis aliquam accusamus ullam pariatur.
            </p>
          </div>


          <ul>
              {
                  this.state.articles.map((a)=>{
                      return(<li> <Link to={ '/article/'+a.id }  >{a.title}</Link> </li>);
                  })
              }
          </ul>

                    

      </div>
    );
  }
};

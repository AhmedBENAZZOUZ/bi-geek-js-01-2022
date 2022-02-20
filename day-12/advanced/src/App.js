import logo from './logo.svg';
import './App.css';
import React from 'react';
import User from './componenets/User/User';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFound from './pages/NotFoundPage';
import ArticleDetailsPage from './pages/ArticleDetailsPage';

const globalStyle = {
  title: { color:"red" , backgroundColor:'orange' },
  box : {},
  photoAvatar: {}
} ;


export default class App extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    return(
      <div>
        {
          /**<h1 style={ globalStyle.title }  >hello world</h1>
           * 
           * <User /> */
        }


    <Router> 
        <Switch>

        <Route path="/" component={HomePage}  exact />
        <Route path="/about" component={AboutPage}  exact />
        <Route path="/article/:id" component={ArticleDetailsPage}  exact />
        
        <Route path="*" component={NotFound}  />
        
          
        </Switch> 
    </Router>
  




        
      </div>
    );
  }
};



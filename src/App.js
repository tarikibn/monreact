import './App.css';

import React,{ Component } from 'react';
import Information from './homepage/Page';
import Navbar1 from './Navbar'
import Recherche from './homepage/Recherche';
import Footer from './Footer';
import Api from './recette/Api';
import {Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';




class  App extends Component{
  render(){
    return (
<BrowserRouter>
 
      <div className="App">
       
      <Navbar1/>
    
     <Switch>
     
      <Route path="/" exact component={Information}/>
      <Route path="/Api" exact component={Api}/>
      </Switch>
      <Footer/>
      </div>
     
      </BrowserRouter>
    );
  }

}

export default App;

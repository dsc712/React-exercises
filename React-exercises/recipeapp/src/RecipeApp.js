import React, { Component } from 'react';
import './RecipeApp.css';
import Navbar from "./Navbar";
import Recipes from './Recipes' ;

class RecipeApp extends Component {
  render() {
    return (
      <div className="RecipeApp">

          <Navbar/>
          <Recipes/>

      </div>
    );
  }
}

export default RecipeApp;

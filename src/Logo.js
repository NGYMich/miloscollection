import React, { Component } from "react";
import milos from './logo sans fond beige.png';

class Logo extends Component {

  render() {
       return (
        <div>
          <nav>
           <left> <a href="#/PageVoirArticle"><img src={milos} alt={milos} width="180px" /></a> </left>
          </nav>
        </div>
        );
      }
    }

export default Logo;

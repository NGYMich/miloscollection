import React, { Component } from "react";
import './Page.css';
import BoutonAjouterArticle from "../Boutons/BoutonAjouterArticle";
import BoutonCreerCollection from "../Boutons/BoutonCreerCollection";

class PageGererCollections extends Component {
  render() {
    return (
      <div> 
      	<BoutonCreerCollection /> <br /><br />
        <BoutonAjouterArticle />

      </div>
    );
  }
}

export default PageGererCollections;

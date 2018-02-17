import React, { Component } from "react";
import {
    MorphIcon,
    CloseButton,
    NavButton,
    PlusButton,
} from 'react-svg-buttons'
import FormulaireAjouterArticle from '../Formulaires/FormulaireAjouterArticle.js'
import './Page.css';

class PageAjouterArticle extends Component {
  handleClick () {
    alert("L'article a été ajouté");
  }
  render() {
    return (
      <div>
        <h3>Pour ajouter un article veuillez remplir les champs ci-dessous</h3>
        <FormulaireAjouterArticle />
      </div>
    );
    }
    }

    export default PageAjouterArticle;

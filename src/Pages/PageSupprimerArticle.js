import React, { Component } from "react";
import {
    MorphIcon,
    CloseButton,
    NavButton,
    PlusButton,
} from 'react-svg-buttons'
import FormulaireSupprimerArticle from '../Formulaires/FormulaireSupprimerArticle.js'

import './Page.css';

class PageSupprimerArticle extends Component {
  handleClick () {
    alert("L'article a été supprimé");
  }

  render() {
    return (
      <div>
      <h3>Pour supprimer un article veuillez remplir les champs ci-dessous</h3>
      {/*<FormulaireSupprimerArticle />*/}

      </div>
    );
    }
    }

    export default PageSupprimerArticle;

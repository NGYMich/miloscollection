import React, {Component} from 'react'
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';



class BoutonAjouterArticle extends Component {

  handleClick() {
	window.location.href = '#/PageAjouterArticle';
  }

  render() {
    return (
      <Button color='brown' size='big' onClick={this.handleClick} className="BoutonAjouterArticle">Ajouter un article</Button>
    );
  }
 }

export default BoutonAjouterArticle;
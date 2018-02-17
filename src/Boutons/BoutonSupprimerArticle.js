import React, {Component} from 'react'
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';


class BoutonSupprimerArticle extends Component {

  handleClick() {
	window.location.href = '#/PageSupprimerArticle';
  }

  render() {
    return (
      <Button color='white' size='big' onClick={this.handleClick} >Supprimer un article</Button>
    );
  }
 }

export default BoutonSupprimerArticle;
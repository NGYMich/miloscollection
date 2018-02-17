import React, {Component} from 'react'
import { Button } from 'semantic-ui-react'


class BoutonConnexion extends Component {

  handleClick() {
	window.location.href = '#/PageConnexion';
  }

  render() {
    return (
      <Button color= "white" size='big' onClick={this.handleClick}>Connexion</Button>
    );
  }
 }

export default BoutonConnexion;
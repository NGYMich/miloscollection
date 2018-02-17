import React, {Component} from 'react'
import { Button } from 'semantic-ui-react'


class BoutonInscription extends Component {

  handleClick() {
	window.location.href = '#/PageInscription';
  }

  render() {
    return (
      <Button color= "white" size='big' onClick={this.handleClick}>Inscription</Button>
    );
  }
 }

export default BoutonInscription;
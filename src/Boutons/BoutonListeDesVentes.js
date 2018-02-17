import React, {Component} from 'react'
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

import {
    MorphIcon,
    CloseButton,
    NavButton,
    PlusButton,
} from 'react-svg-buttons'

class BoutonListeDesVentes extends Component {

  handleClick() {
	window.location.href = '#/PageListeDesVentes';
  }

  render() {
    return (
      <Button color='brown' size='big' onClick={this.handleClick} className="BoutonListeDesVentes">Liste des Ventes</Button>
    );
  }
 }

export default BoutonListeDesVentes;
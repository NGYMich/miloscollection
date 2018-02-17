import React, {Component} from 'react'
import { Button } from 'semantic-ui-react'


class BoutonCreerCollection extends Component {

  handleClick() {
	window.location.href = '#/PageCreerCollection';
  }

  render() {
    return (
      <Button className="btnColl" color= "brown" size='big' onClick={this.handleClick}>Créer une collection</Button>
    );
  }
 }

export default BoutonCreerCollection;
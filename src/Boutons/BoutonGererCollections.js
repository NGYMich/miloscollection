import React, {Component} from 'react'
import { Button } from 'semantic-ui-react'


class BoutonGererCollections extends Component {

  handleClick() {
	window.location.href = '#/PageGererCollections';
  }

  render() {
    return (
      <Button className="btnColl" color= "brown" size='big' onClick={this.handleClick}>Gérer mes collections</Button>
    );
  }
 }

export default BoutonGererCollections;
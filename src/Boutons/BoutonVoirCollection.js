import React, {Component} from 'react'
import { Button } from 'semantic-ui-react'


class BoutonVoirCollection extends Component {

  handleClick() {
	window.location.href = '#/PageMesCollections';
  }

  render() {
    return (
      <Button className="btnColl" color= "brown" size='big' onClick={this.handleClick}>Mes collections</Button>
    );
  }
 }

export default BoutonVoirCollection;
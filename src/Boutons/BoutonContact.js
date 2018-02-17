import React, {Component} from 'react'
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';


class BoutonContact extends Component {

  handleClick() {
	window.location.href = '#/PageContact';
  }

  render() {
    return (
      <Button color='brown' size='big' onClick={this.handleClick} >Contact</Button>
    );
  }
 }

export default BoutonContact;
import React, {Component} from 'react'
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';


class BoutonTest extends Component {

  handleClick() {
	window.location.href = '#/PageTest';
  }

  render() {
    return (
      <Button color='brown' size='big' onClick={this.handleClick} >Test</Button>
    );
  }
 }

export default BoutonTest;
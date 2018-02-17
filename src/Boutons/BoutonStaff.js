import React, {Component} from 'react'
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';


class BoutonStaff extends Component {

  handleClick() {
	window.location.href = '#/PageStaff';
  }

  render() {
    return (
      <Button color='brown' size='big' onClick={this.handleClick} >Staff</Button>
    );
  }
 }

export default BoutonStaff;
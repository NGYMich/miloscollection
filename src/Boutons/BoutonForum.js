import React, {Component} from 'react'
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';


class BoutonForum extends Component {

  handleClick() {
	window.location.href = '#/PageForum';
  }

  render() {
    return (
      <Button color='brown' size='big' onClick={this.handleClick} >Forum</Button>
    );
  }
 }

export default BoutonForum;
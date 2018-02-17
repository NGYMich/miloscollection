import React, { Component } from "react";
import './Page.css';
import Collection from "../Collections/Collection";
import PhotoGallery from '../Collections/PhotoGallery';

class PageTest extends Component {
  render() {
    return (
      <div>
        {/*} <Collection />*/}
      	<PhotoGallery />
      </div>

    );
  }
}

export default PageTest;

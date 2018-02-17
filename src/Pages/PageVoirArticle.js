import React, { Component } from "react";
import Collection from "../Collections/Collection"
import './Page.css';
import PhotoGallery from '../Collections/PhotoGallery';

class PageVoirArticle extends Component {
  render() {
    return (
      <div>
     {/*} <Collection />*/}
      <PhotoGallery />
      </div>
    );
  }
}

export default PageVoirArticle;

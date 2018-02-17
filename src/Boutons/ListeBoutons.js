import React, { Component } from "react";


import BoutonVoirCollection from './BoutonVoirCollection';
import BoutonGererCollections from './BoutonGererCollections';
import BoutonListeDesVentes from './BoutonListeDesVentes';
import BoutonForum from './BoutonForum';
import BoutonStaff from './BoutonStaff';
import BoutonContact from './BoutonContact';
import BoutonTest from './BoutonTest';



class ListeBoutons extends Component {
  render() {

    return (
        <div className="listeBoutons">
           <BoutonVoirCollection />
           <BoutonGererCollections />
           <BoutonListeDesVentes />
           <BoutonForum />
           <BoutonStaff />
           <BoutonContact />
           <BoutonTest />
        </div>
    );
  }
}



export default ListeBoutons;
import React, { Component } from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import PageAjouterArticle from "./Pages/PageAjouterArticle";
import PageListeDesVentes from "./Pages/PageListeDesVentes";
import PageForum from "./Pages/PageForum";
import PageMesCollections from "./Pages/PageMesCollections";
import PageStaff from "./Pages/PageStaff";
import PageContact from "./Pages/PageContact";
import PageTest from './Pages/PageTest';
import PageConnexion from "./Pages/PageConnexion";
import PageInscription from './Pages/PageInscription';
import PageGererCollections from "./Pages/PageGererCollections";
import PageCreerCollection from "./Pages/PageCreerCollection";
import Logo from './Logo';
import ListeBoutons from './Boutons/ListeBoutons';
import { slide as Menu } from 'react-burger-menu';

import BoutonInscription from './Boutons/BoutonInscription';
import BoutonConnexion from './Boutons/BoutonConnexion';



class Main extends Component {

  render() {
    return (

      <HashRouter>

        <div>
          <header className="tete">
            <Logo />
            <p className="slogan"> - Keep everything -</p>
            <div className="ConnIns">
              <BoutonConnexion />
              <BoutonInscription />
            </div>
          </header>

          <br />
        
          <ListeBoutons />
   
          <div className="content">
            <Route path="/PageListeDesVentes" component={PageListeDesVentes}/>
            <Route path="/PageForum" component={PageForum}/>
            <Route path="/PageMesCollections" component={PageMesCollections}/>
            <Route path="/PageStaff" component={PageStaff}/>
            <Route path="/PageContact" component={PageContact}/>
            <Route path="/PageTest" component={PageTest}/>
            <Route path="/PageInscription" component={PageInscription}/>
            <Route path="/PageConnexion" component={PageConnexion}/>
            <Route path="/PageGererCollections" component={PageGererCollections}/>
            <Route path="/PageAjouterArticle" component={PageAjouterArticle}/>
            <Route path="/PageCreerCollection" component={PageCreerCollection}/>

          </div>
        
        </div>
    
      </HashRouter>

    );
  }
}



export default Main;

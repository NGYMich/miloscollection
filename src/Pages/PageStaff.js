import React, { Component } from "react";
import './Page.css';
import { Message } from 'semantic-ui-react'

class PageStaff extends Component {
  render() {
    return (
      <div>
        <h1> Contacts </h1>
        <p>Voici les différents membres de l'équipe.</p>
        <ul>
          <li>Nguyen Michel</li>
          <li>Meskini Oussama</li>
          <li>Otmane Lyes</li>
          <li>Bourja Ikram</li>
        </ul>
      </div>
    );
  }
}

export default PageStaff;


import React, { Component } from 'react'
import { Form, Button, Confirm } from 'semantic-ui-react'
import ConfirmateurAjoutArticle from '../Confirmateurs/ConfirmateurAjoutArticle.js'

const options = [
  { key: 's', text: 'Stylos', value: 'stylos'},
  { key: 'c', text: 'Cartes', value: 'cartes' },
  { key: 'p', text: 'Peluches', value: 'peluches' },
  { key: 'v', text: 'Voitures', value: 'voitures'},
]

class FormulaireMesCollections extends Component {
  handleClick() {
    alert("hello");
  }

  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Select fluid label='Catégorie' options={options} placeholder='Catégorie' />
          <Form.Input fluid label="Nom de l'objet" placeholder="Nom de l'objet" />
        </Form.Group>

        <Form.TextArea label="Description de l'objet" placeholder="Dites-en nous plus sur l'objet.." />
        <Form.Button onClick={this.handleClick}>Ajouter l'objet à la collection</Form.Button>
        
      </Form>
    )
  }
}

export default FormulaireMesCollections;
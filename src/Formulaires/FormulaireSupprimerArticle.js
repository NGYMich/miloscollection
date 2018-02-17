import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

const options = [
  { key: 's', text: 'Stylos', value: 'stylos'},
  { key: 'c', text: 'Cartes', value: 'cartes' },
  { key: 'p', text: 'Peluches', value: 'peluches' },
  { key: 'v', text: 'Voitures', value: 'voitures'},
]


const optionsArticles = [
  { key: 'v', text: 'Stylo Vert', value: 'styloVert'},
  { key: 'r', text: 'Stylo Rouge', value: 'styloRouge' },
  { key: 'n', text: 'Stylo Noir', value: 'styloNoir' },
  { key: 'b', text: 'Stylo Bleu', value: 'styloBleu'},
]

class FormulaireSupprimerArticle extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Select fluid label='Catégorie' options={options} placeholder='Catégorie' />
          <Form.Select fluid label="Nom de l'objet" options={optionsArticles} placeholder="Nom de l'objet" />
        </Form.Group>

        <Form.Button>Supprimer l'article de la collection</Form.Button>
      </Form>
    )
  }
}

export default FormulaireSupprimerArticle;
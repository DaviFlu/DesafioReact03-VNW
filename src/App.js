import React, {Component} from 'react'
import fruta from './fruta.jpg'


class info extends Component {
  state = {
    nome: "Davi Soares",
    idade: 22,
    comidafav: "Strogonoff",
    musicas: ["Under the Sun - DIIV","After Hours - The Weeknd","In My Feelings - Drake"]
  }
  render(){
    return(
      <div>
        <h1>Meu nome é: {this.state.nome}</h1>
        <h2>Eu tenho {this.state.idade} anos</h2>
        <h3>Minha comida favorita é {this.state.comidafav}</h3>
        <ul>
          <li>{this.state.musicas[0]}</li>
          <li>{this.state.musicas[1]}</li>
          <li>{this.state.musicas[2]}</li>
        </ul>
        <div>
          <img src={fruta.jpg} alt="maçã"/>
        </div>
      </div>
    )
  }
}
export default info

import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      lista: []
    }

  }

  async componentDidMount() {
    let resposta = await fetch('http://localhost:3000/series')
    const series = await resposta.json()
    this.setState({lista: series})
  }


  render() {
    console.log("estou sendo segurado na tela")
    return (
    <div className="App">
        Cadastro de Series
        <div className="form">
            <form method="post">
                <div className="form">
                    <label htmlFor="nome">Nome</label>
                    <input type="text" id="nome" name="nome"/>
                    <label htmlFor="lancamento">Ano de lançamento</label>
                    <input type="text" id="lancamento" name="lancamento"/>
                    <label htmlFor="temporadas">Temporadas</label>
                    <input type="text" id="temporadas" name="temporadas"/>
                    <label htmlFor="sinopse">Sinopse</label>
                    <textarea id="sinopse" name="sinopse"></textarea>
                    <button type="submit">Salvar</button>
                </div>
              </form>
                <div className="list">
                    <table>
                      <thead>
                        <tr>
                          <td>Nome</td>
                          <td>Lançamento</td>
                          <td>Temporadas</td>
                          <td>Sinopse</td>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.lista.map(serie => {
                          return(
                            <tr key={serie.id}>
                            <td>{serie.nome}</td>
                            <td>{serie.lancamento}</td>
                            <td>{serie.temporada}</td>
                            <td>{serie.sinopse}</td>
                          </tr>
                          )
                        })}
                      </tbody>
                    </table>
                </div>
        </div>
    </div>
    )
  }
}

export default App

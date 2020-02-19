import React, { Component } from 'react';
import PubSub from 'pubsub-js'

class FormularioSeries extends Component {

constructor() {
    super()
    this.stateInicial = {
        
        nome:'',
        ano_lancamento: '',
        temporadas: '',
        sinopse: ''
    }

    this.state = this.stateInicial;

    PubSub.subscribe('editing', (msg, serie) => {
        this.setState(serie)
    })
}
inputHandler = (e) => {
    const { name, value } = e.target

    this.setState({[name]: value})
}

enviaDados = (e) => {
    e.preventDefault()
    this.props.enviaDados(this.state)
    this.setState(this.stateInicial)
}

    render() {
        return(
          <div className="card">
            <div className="card-header">
                <h5>Cadastro de Series</h5>
            </div>
            <div className="card-body">
                <form method="post" onSubmit={this.enviaDados}>
                    <div className="form-group">
                        <label htmlFor="nome">Nome</label>
                        
                        <input className="form-control mb-1" type="text" id="nome" name="nome" value={this.state.nome} onChange={this.inputHandler}/>
                        
                        <label htmlFor="lancamento">Ano de lançamento</label>
                        
                        <input className="form-control mb-1" type="text" id="lancamento" name="ano_lancamento" value={this.state.ano_lancamento} onChange={this.inputHandler}/>
                        
                        <label htmlFor="temporadas">Temporadas</label>
                        
                        <input className="form-control mb-1" type="text" id="temporadas" name="temporadas" value={this.state.temporadas} onChange={this.inputHandler}/>
                        
                        <label htmlFor="sinopse">Sinopse</label>
                        
                        <textarea className="form-control mb-1" id="sinopse" name="sinopse" value={this.state.sinopse} onChange={this.inputHandler}>
                            
                        </textarea>
                        <button className="btn-success form-control mt-2" type="submit">Salvar</button>
                    </div>
                </form>
              </div>
          </div>
        )
    }
}

export default FormularioSeries
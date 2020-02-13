import React, { Component } from 'react';
import FormularioSeries from './formulario'
import TableSeries from './Tableseries'

class BoxSeries extends Component {

    constructor() {
        super()
        this.state = {
        series: [],

    }

}

async componentDidMount() {
    let resposta = await fetch('http://localhost:3000/series')
    const series = await resposta.json()
    this.setState({series: series})
}

enviaDados = async (serie) => {
    console.log("Enviando dados...")
    // serie.ano_lancamento = serie.lancamento
    // delete serie.lancamento
    const params= {
        method: 'POST',
        headers: {
            Accept:'application/json', 
            'Content-type': 'application/json'
        },
        body: JSON.stringify(serie)
    }
    const retorno = await fetch('http://localhost:3000/series', params)
    try {
        if(retorno.status === 201){
            console.log("Enviado com sucesso")
            serie = await retorno.json()
            this.setState({series: [...this.state.series, serie]})
            console.log(serie)
        }
    }catch(erro) {
        console.log("Erro ao enviar")
    }

}

deleta = async (id) => {
    const series = this.state.series
    const params = {
        method: 'DELETE',
    }
    const retorno = await
    fetch('http://localhost:3000/series/' + id, params)

    if(retorno.status == 204) {
        this.setState({
            series:series.filter((serie) => {
                return serie.id !== id
            })
        })
    }
}
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <FormularioSeries enviaDados={this.enviaDados}/>
                    </div>

                    <div className="col-md-8">
                        <TableSeries 
                            series={this.state.series}
                            deleta={this.deleta}
                        />
                    </div>
                </div>
            </div>            
        )
    }
}

export default BoxSeries
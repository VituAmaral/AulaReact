import React, { Component } from 'react';
import './TableSeries.css'


const ListaSeries = (props) => {

    

    return(
        <div className="card-body card-body-flex">
            {props.series.map(serie => {
            return(
                <div className="card segura_card-serie bg-dark text-white" key={serie.id}>
                    <div className="card-header">
                        <h5 className="card-title">{serie.nome}</h5>
                        <h6 className="card-title text-muted">{serie.ano_lancamento}</h6>
                    </div>
                    <div className="card-body">
                        <img src="/logo192.png" className="card-img"/>
                    </div>
                    <div className="card-footer ">
                        {serie.temporadas}
                        {serie.temporadas > 1 ? ' temporadas ' : ' temporadas '}
                        <br />
                        <a href="#">Sinopse</a>
                        <br/>
                        <div className="text-center">
                            <button className="btn btn-outline-danger btn-sm mt-2" onClick={ () => {
                                if(window.confirm("Confirmar Exclusao?"))
                                    props.deleta(serie.id)}}>
                                    DELETE
                            </button>
                            <button className="btn btn-outline-warning btn-sm ml-1 mt-2">EDITAR</button>
                        </div>
                    </div>
                </div>
            )
            })}
        </div> 
    )
}


class TableSeries extends Component {


    render(){
        const {series, deleta} = this.props
        return(
            <div>
               <div className="card">
                    <div className="card-header">
                        <h5 className="text-center">Lista de Series</h5>
                    </div>
                        <ListaSeries series={series} deleta={deleta}/>
                </div>
            </div>
        )
    }
}

export default TableSeries
import React, { Component } from 'react';

const TableHead = () => {
    return (
        <thead className="thead-dark">
            <tr>
                <th>Nome</th>
                <th>Lançamento</th>
                <th>Temporadas</th>
                <th>Sinopse</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    return(
        <tbody>
            {props.series.map(serie => {
            return(
                <tr key={serie.id}>
                    <td>{serie.nome}</td>
                    <td>{serie.ano_lancamento}</td>
                    <td>{serie.temporadas}</td>
                    <td>{serie.sinopse}</td>
                </tr>
            )
            })}
        </tbody> 
    )
}


class TableSeries extends Component {

    render(){
        const {series} = this.props
        return(
            <div>
               <div className="card">
                    <div className="card-header"></div>
                    <div className="card-body">
                        <table className="table table-striped table-hover">
                            <TableHead/>
                            <TableBody series={series}/>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default TableSeries
import React, { Component } from 'react';

const TableHead = () => {
    return (
        <thead>
            <tr>
                <td>Nome</td>
                <td>Lançamento</td>
                <td>Temporadas</td>
                <td>Sinopse</td>
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
               <div className="form">
                    <div className="list">
                        <table>
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
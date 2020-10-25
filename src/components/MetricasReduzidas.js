import React, {Component} from 'react'

class MetricasReduzidas extends Component {

    constructor(props) {
        super(props);

        this.state = {
            seriesTemporaisMetricas: JSON.parse(localStorage.getItem("@time-series-dashboard/seriesTemporaisMetricas")).responseMetricas
        };

    }

    render() {

        return (
            <div className="content">
                <div className="container-fluid">

                    {this.state.seriesTemporaisMetricas.map((item) =>

                        <div key={item.nome}>

                            <h4>{item.nome}</h4>

                            <hr/>

                            <div className="row">

                                <div className="col-5">
                                    <img className="img-fluid"
                                         src={`data:image/jpeg;base64,${item.imagem}`}
                                         alt={item.nome}/>
                                </div>

                                <div className="col-7">

                                    <table className="table table-bordered">

                                        <thead className="thead-dark">
                                        <tr>
                                            {item.metricas.map((m) => m.metrica).map((nomeMetrica) =>

                                                <th key={nomeMetrica}>
                                                    <b>{nomeMetrica}</b>
                                                </th>
                                            )}
                                        </tr>
                                        </thead>

                                        <tbody>
                                        <tr>
                                            {item.metricas.map((m) => m.valor).map((valorMetrica, index) =>

                                                <td key={"valorMetrica" + index}>
                                                    {valorMetrica}
                                                </td>
                                            )}
                                        </tr>
                                        </tbody>
                                    </table>

                                </div>

                            </div>

                        </div>

                    )}

                </div>
            </div>
        )

    }

}

export default MetricasReduzidas
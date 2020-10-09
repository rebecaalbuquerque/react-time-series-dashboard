import React, {Component} from 'react'

class MetricasReduzidas extends Component {

    constructor(props) {
        super(props);

        this.state = {
            seriesTemporaisMetricas: JSON.parse(localStorage.getItem("@time-series-dashboard/seriesTemporaisMetricas"))
        };

    }

    render() {

        return (
            <div className="content">
                <div className="container-fluid">

                    {this.state.seriesTemporaisMetricas.map((item) =>
                        <div>

                            <h4>{item.nome} - ({item.modelo})</h4>

                            <hr/>

                            <div className="row">

                                <div className="col-5">
                                    <img className="img-fluid" src={`data:image/jpeg;base64,${item.imagem}`}
                                         alt={item.nome}/>
                                </div>

                                <div className="col-7">

                                    <table className="table table-bordered">

                                        <thead className="thead-dark">
                                        <tr>
                                            {item.metricas.map((m) => m.metrica).map((nomeMetrica) =>

                                                <th><b>{nomeMetrica}</b></th>
                                            )}
                                        </tr>
                                        </thead>

                                        <tbody>
                                        <tr>
                                            {item.metricas.map((m) => m.valor).map((valorMetrica) =>

                                                <td>{valorMetrica}</td>
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
import React, {Component} from 'react'

class MetricasCompletas extends Component {

    constructor(props) {
        super(props);

        this.state = {
            seriesTemporaisMetricas: JSON.parse(localStorage.getItem("@time-series-dashboard/seriesTemporaisMetricas")),
            serieSelecionada: JSON.parse(localStorage.getItem("@time-series-dashboard/seriesTemporaisMetricas"))[0]
        };

        this.onItemSelected = this.onItemSelected.bind(this)

    }

    onItemSelected(e) {
        this.setState({
            serieSelecionada: this.state.seriesTemporaisMetricas.find(item => item.nome === e.target.value)
        })
    }

    render() {

        return (
            <div className="content">
                <div className="container-fluid">

                    <select
                        className="form-control"
                        value={this.state.serieSelecionada.nome}
                        onChange={(e) => this.onItemSelected(e)}>

                        {this.state.seriesTemporaisMetricas.map((item) =>
                            <option key={item.nome}>{item.nome}</option>
                        )}

                    </select>

                    <div>

                        <h4>{this.state.serieSelecionada.nome}</h4>

                        <hr/>

                        <table className="table table-bordered">

                            <thead className="thead-dark">
                            <tr>
                                {this.state.serieSelecionada.metricas.map((m) => m.metrica).map((nomeMetrica) =>

                                    <th><b>{nomeMetrica}</b></th>
                                )}
                            </tr>
                            </thead>

                            <tbody>
                            <tr>
                                {this.state.serieSelecionada.metricas.map((m) => m.valor).map((valorMetrica) =>

                                    <td>{valorMetrica}</td>
                                )}
                            </tr>
                            </tbody>
                        </table>

                        <img className="img-fluid"
                             src={`data:image/jpeg;base64,${this.state.serieSelecionada.imagem}`}
                             alt={this.state.serieSelecionada.nome}/>

                    </div>

                </div>
            </div>
        )

    }

}

export default MetricasCompletas
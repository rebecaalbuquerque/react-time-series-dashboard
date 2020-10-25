import React, {Component} from 'react'
import API from "../utils/API";
import {trackPromise} from "react-promise-tracker";

class MetricasCompletas extends Component {

    constructor(props) {
        super(props);

        this.state = {
            filtros: JSON.parse(localStorage.getItem("@time-series-dashboard/seriesTemporaisMetricas")).filtros,
            seriesTemporaisMetricas: JSON.parse(localStorage.getItem("@time-series-dashboard/seriesTemporaisMetricas")).responseMetricas,
            serieSelecionada: JSON.parse(localStorage.getItem("@time-series-dashboard/seriesTemporaisMetricas")).responseMetricas[0],
            filtroModeloSelecionado: "Selecione...",
            filtroCategoriaSelecionado: "Selecione...",
            filtroItemSelecionado: "Selecione..."
        };


        this.formatTableHead = this.formatTableHead.bind(this)
        this.formatTableBody = this.formatTableBody.bind(this)
        this.onItemSelected = this.onItemSelected.bind(this)
        this.onFiltroSelected = this.onFiltroSelected.bind(this)

    }

    async onFiltroSelected(e, tipoFiltro) {

        switch (tipoFiltro) {
            case 'modelo':
                this.setState({
                    filtroModeloSelecionado: e.target.value,
                    filtroCategoriaSelecionado: "Selecione...",
                    filtroItemSelecionado: "Selecione..."
                })
                break;
            case 'categoria':
                this.setState({
                    filtroModeloSelecionado: "Selecione...",
                    filtroCategoriaSelecionado: e.target.value,
                    filtroItemSelecionado: "Selecione..."
                })
                break;
            case 'item':
                this.setState({
                    filtroModeloSelecionado: "Selecione...",
                    filtroCategoriaSelecionado: "Selecione...",
                    filtroItemSelecionado: e.target.value
                })
                break;
            default:
                break;
        }

        if(e.target.value !== "Selecione...") {
            let response = await trackPromise(
                API.post("/metricasFiltradas", {filtro: {tipo: tipoFiltro, valor: e.target.value}})
            ).catch((error) => {
                alert("Ocorreu um erro ao tentar realizar o filtro.")
                console.log(error);
            })

            if(response.data !== undefined) {
                this.setState({
                    serieSelecionada: { imagem: response.data.imagem }
                })
            }
        }

    }

    onItemSelected(e) {
        this.setState({
            serieSelecionada: this.state.seriesTemporaisMetricas.find(item => item.nome === e.target.value)
        })
    }

    formatTableHead() {
        let head = ["Nome"]

        this.state.seriesTemporaisMetricas[0].metricas.forEach((item) => {
            head.push(item.metrica)
        })

        return head

    }

    formatTableBody() {
        let body = []

        this.state.seriesTemporaisMetricas.forEach((serie) => {
            let row = []

            row.push(serie.nome)

            serie.metricas.forEach((item) => {
                row.push(item.valor)
            })

            body.push(row)
        })

        return body
    }

    render() {

        return (
            <div className="content">
                <div className="container-fluid">

                    <table className="table table-bordered">

                        <thead className="thead-dark">
                        <tr>
                            {this.formatTableHead().map((nomeMetrica) =>

                                <th><b>{nomeMetrica}</b></th>
                            )}
                        </tr>
                        </thead>

                        <tbody>
                        {this.formatTableBody().map((row) =>
                            <tr>
                                { row.map((valor) =>
                                    <td>{valor}</td>
                                )}
                            </tr>

                        )}

                        </tbody>
                    </table>

                    <br/>

                    <h3>Bases</h3>

                    <div className="form-group">
                        <select
                            className="form-control"
                            value={this.state.serieSelecionada.nome}
                            onChange={(e) => this.onItemSelected(e)}>

                            {this.state.seriesTemporaisMetricas.map((item) =>
                                <option key={item.nome}>{item.nome}</option>
                            )}

                        </select>
                    </div>

                    <br/>

                    <h3>Filtros</h3>

                    <div className="row">

                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Modelo</label>

                                <select
                                    className="form-control"
                                    value={this.state.filtroModeloSelecionado}
                                    onChange={(e) => this.onFiltroSelected(e, "modelo")}>

                                    <option key={"selecione"}>Selecione...</option>
                                    {this.state.filtros.modelos.map((item, index) =>
                                        <option key={index + item}>{item}</option>
                                    )}

                                </select>

                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Categoria</label>

                                <select
                                    className="form-control"
                                    value={this.state.filtroCategoriaSelecionado}
                                    onChange={(e) => this.onFiltroSelected(e, "categoria")}>

                                    <option key={"selecione"}>Selecione...</option>
                                    {this.state.filtros.categorias.map((item, index) =>
                                        <option key={index + item}>{item}</option>
                                    )}

                                </select>

                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Item</label>

                                <select
                                    className="form-control"
                                    value={this.state.filtroItemSelecionado}
                                    onChange={(e) => this.onFiltroSelected(e, "item")}>

                                    <option key={"selecione"}>Selecione...</option>
                                    {this.state.filtros.itens.map((item, index) =>
                                        <option key={index + item}>{item}</option>
                                    )}

                                </select>

                            </div>
                        </div>

                    </div>

                    <img className="img-fluid-center-horizontally"
                         src={`data:image/jpeg;base64,${this.state.serieSelecionada.imagem}`}
                         alt={"Série temporal"}/>

                </div>

            </div>
        )

    }

}

export default MetricasCompletas
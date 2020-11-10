import React, {Component} from 'react'
import API from "../utils/API";
import {trackPromise} from "react-promise-tracker";

class MetricasCompletas extends Component {

    constructor(props) {
        super(props);

        this.state = {
            filtrosModelos: JSON.parse(localStorage.getItem("@time-series-dashboard/seriesTemporaisMetricas")).filtros.modelos,
            filtrosCategorias: JSON.parse(localStorage.getItem("@time-series-dashboard/seriesTemporaisMetricas")).filtros.categorias,
            filtrosItens: ["Selecione..."],
            seriesTemporaisMetricas: JSON.parse(localStorage.getItem("@time-series-dashboard/seriesTemporaisMetricas")).responseMetricasPorModelo,
            serieSelecionada: JSON.parse(localStorage.getItem("@time-series-dashboard/seriesTemporaisMetricas")).responseMetricasPorModelo[0],
            serieSelecionada2: JSON.parse(localStorage.getItem("@time-series-dashboard/seriesTemporaisMetricas")).responseMetricasPorModelo[0],
            filtroModeloSelecionado: JSON.parse(localStorage.getItem("@time-series-dashboard/seriesTemporaisMetricas")).responseMetricasPorModelo[0].modelo,
            filtroModeloSelecionado2: JSON.parse(localStorage.getItem("@time-series-dashboard/seriesTemporaisMetricas")).responseMetricasPorModelo[0].modelo,
            filtroCategoriaSelecionado: "Selecione...",
            filtroItemSelecionado: "Selecione..."
        };

        this.formatTableHead = this.formatTableHead.bind(this)
        this.formatTableBody = this.formatTableBody.bind(this)
        this.onItemSelected = this.onItemSelected.bind(this)
        this.onFiltroSelected = this.onFiltroSelected.bind(this)
        this.onFiltroAction = this.onFiltroAction.bind(this)

    }

    onFiltroSelected(e, tipoFiltro) {

        switch (tipoFiltro) {
            case 'modelo1':
                this.setState({ filtroModeloSelecionado: e.target.value })
                break;
            case 'modelo2':
                this.setState({ filtroModeloSelecionado2: e.target.value })
                break;
            case 'categoria':

                let filtros = e.target.value === "Selecione..." ?
                    ["Selecione..."] :
                    ["Selecione..."].concat(this.state.filtrosCategorias.find(item => item.nome === e.target.value).itens)

                this.setState({
                    filtrosItens: filtros,
                    filtroCategoriaSelecionado: e.target.value
                })
                break;
            case 'item':
                this.setState({ filtroItemSelecionado: e.target.value })
                break;
            default:
                break;
        }

    }

    async onFiltroAction() {

        if(this.state.filtroModeloSelecionado !== "Selecione...") {

            let data = {
                primeiroFiltro: {
                    "modelo": this.state.filtroModeloSelecionado,
                    "categoria": this.state.filtroCategoriaSelecionado === "Selecione..." ? null : this.state.filtroCategoriaSelecionado,
                    "item": this.state.filtroItemSelecionado === "Selecione..." ? null : this.state.filtroItemSelecionado
                },
                segundoFiltro : {
                    "modelo": this.state.filtroModeloSelecionado2,
                    "categoria": this.state.filtroCategoriaSelecionado === "Selecione..." ? null : this.state.filtroCategoriaSelecionado,
                    "item": this.state.filtroItemSelecionado === "Selecione..." ? null : this.state.filtroItemSelecionado
                }
            }

            let response = await trackPromise(
                API.post("/metricasFiltradas", data)
            ).catch((error) => {
                alert("Ocorreu um erro ao tentar realizar o filtro.")
                console.log(error);
            })

            if(response.data !== undefined) {
                this.setState({
                    serieSelecionada: { imagem: response.data.primeiroFiltroImagem },
                    serieSelecionada2: { imagem: response.data.segundoFiltroImagem }
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

                    <h3>Filtros</h3>

                    <div className="row">

                        <div className="col-3">

                            <div className="row">
                                <div className="col">

                                    <div className="form-group">
                                        <label>Modelo 1</label>

                                        <select
                                            className="form-control"
                                            value={this.state.filtroModeloSelecionado}
                                            required={true}
                                            onChange={(e) => this.onFiltroSelected(e, "modelo1")}>

                                            {this.state.filtrosModelos.map((item, index) =>
                                                <option key={index + item}>{item}</option>
                                            )}

                                        </select>
                                    </div>

                                </div>
                            </div>

                            <div className="row">
                                <div className="col">

                                    <div className="form-group">
                                        <label>Modelo 2</label>

                                        <select
                                            className="form-control"
                                            value={this.state.filtroModeloSelecionado2}
                                            required={true}
                                            onChange={(e) => this.onFiltroSelected(e, "modelo2")}>

                                            {this.state.filtrosModelos.map((item, index) =>
                                                <option key={index + item}>{item}</option>
                                            )}

                                        </select>
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className="col-9">

                            <div className="row align-items-center">

                                <div className="col">
                                    <div className="form-group">
                                        <label>Categoria</label>

                                        <select
                                            className="form-control"
                                            value={this.state.filtroCategoriaSelecionado}
                                            onChange={(e) => this.onFiltroSelected(e, "categoria")}>

                                            <option key={"selecione"}>Selecione...</option>
                                            {this.state.filtrosCategorias.map((item, index) =>
                                                <option key={index + item.nome}>{item.nome}</option>
                                            )}

                                        </select>

                                    </div>
                                </div>

                                <div className="col">
                                    <div className="form-group">
                                        <label>Item</label>

                                        <select
                                            className="form-control"
                                            value={this.state.filtroItemSelecionado}
                                            onChange={(e) => this.onFiltroSelected(e, "item")}>

                                            {this.state.filtrosItens.map((item, index) =>
                                                <option key={index + item}>{item}</option>
                                            )}

                                        </select>

                                    </div>
                                </div>

                                <div className="col">
                                    <div className="col col-align-vertical">
                                        <button
                                            type="button"
                                            className="btn-primary"
                                            onClick={this.onFiltroAction}>
                                            Filtrar
                                        </button>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="row">

                        <div className="col">

                            <h3>Modelo 1</h3>

                            <img className="img-fluid-center-horizontally"
                                 src={`data:image/jpeg;base64,${this.state.serieSelecionada.imagem}`}
                                 alt={"Série temporal 1"}/>
                        </div>

                        <div className="col">

                            <h3>Modelo 2</h3>

                            <img className="img-fluid-center-horizontally"
                                 src={`data:image/jpeg;base64,${this.state.serieSelecionada2.imagem}`}
                                 alt={"Série temporal 2"}/>
                        </div>

                    </div>

                </div>

            </div>
        )

    }

}

export default MetricasCompletas
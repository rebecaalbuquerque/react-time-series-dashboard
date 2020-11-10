import React, {Component} from 'react'
import API from "../utils/API"
import InputsPredicoes from "./InputsPredicoes";
import {fileToBase64} from "../utils/FileUtils";
import {trackPromise} from "react-promise-tracker";

class ImportarPredicoes extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dadosReais: null,
            dadosReaisArquivo: null,
            dados: [],
            inputsPredicoes: [
                <InputsPredicoes
                    id={0}
                    key={"inputsPredicoes" + 0}
                    onPredicoesChange={(e, id) => this.onPredicoesChange(e, id)}
                    onNomeModeloChange={(e, id) => this.onNomeModeloChange(e, id)}/>
            ]
        };

        this.appendInputPredicoes = this.appendInputPredicoes.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onDadosReaisChange = this.onDadosReaisChange.bind(this)
        this.onPredicoesChange = this.onPredicoesChange.bind(this)
        this.onNomeModeloChange = this.onNomeModeloChange.bind(this)
    }

    appendInputPredicoes() {

        this.setState({
            inputsPredicoes: [
                ...this.state.inputsPredicoes,
                <InputsPredicoes
                    id={this.state.inputsPredicoes.length}
                    key={"inputsPredicoes" + this.state.inputsPredicoes.length}
                    onPredicoesChange={(e, id) => this.onPredicoesChange(e, id)}
                    onNomeModeloChange={(e, id) => this.onNomeModeloChange(e, id)}/>
            ]
        })

    }

    onFormSubmit(e) {
        e.preventDefault()

        let listDataPredicoes = []
        let base64DadosReais = null

        new Promise((resolve, reject) => {

            fileToBase64(this.state.dadosReais).then(resultDadosReais => {

                base64DadosReais = resultDadosReais

                this.state.dados.forEach((item, index) => {

                    fileToBase64(item.predicoes).then(resultPredicoes => {

                        listDataPredicoes.push({
                            nomeModelo: item.nomeModelo,
                            predicao: resultPredicoes
                        })

                        if (index === this.state.dados.length - 1)
                            resolve();
                    })

                })

            })


        }).then(() => {

            trackPromise(
                API
                    .post("/metricas", { dadosReais: base64DadosReais, dadosReaisArquivo: this.state.dadosReaisArquivo, predicoes: listDataPredicoes})
                    .then(function (response) {
                        localStorage.setItem("@time-series-dashboard/seriesTemporaisMetricas", JSON.stringify(response.data))
                        alert("Importação realizada com sucesso!")
                    })
                    .catch(function (error) {
                        alert("Ocorreu um erro ao tentar importar os arquivos.")
                        console.log(error);
                    })
            );
        })


    }

    onDadosReaisChange(e) {
        this.setState({dadosReais: e.target.files[0]})

        if(e.target.files[0] != null)
            this.setState({dadosReaisArquivo: e.target.files[0].name})
    }

    onPredicoesChange(e, id) {
        this.initInDadosIfNotExists(id)
        this.state.dados[id].predicoes = e.target.files[0]
    }

    onNomeModeloChange(e, id) {
        this.initInDadosIfNotExists(id)
        this.state.dados[id].nomeModelo = e.target.value
    }

    initInDadosIfNotExists(id) {

        console.log("Tentando adicionar " + id)
        console.log(this.state.dados)

        if (this.state.dados.find(item => item.id === id) == null) {

            this.state.dados.push(
                {
                    id: id,
                    nomeModelo: "",
                    predicoes: null
                }
            )
        }
    }

    render() {
        return (
            <div className="content">

                <div className="container-fluid">

                    <form id="form-importar-predicoes" onSubmit={this.onFormSubmit} encType="multipart/form-data">

                        <div className="card card-input">
                            <label>
                                <h3 className="card-input-title">Dados reais</h3>
                                <br/>
                                <input type="file"
                                       required={true}
                                       onChange={this.onDadosReaisChange}
                                       accept=".csv"/>
                            </label>
                        </div>

                        {this.state.inputsPredicoes.map((item => item))}

                        <input className="btn-centralized btn-primary" type="submit" value="Enviar"/>

                    </form>

                    <button
                        type="button"
                        className="btn-centralized btn-primary"
                        onClick={this.appendInputPredicoes}>
                        Adicionar novos dados
                    </button>

                </div>

            </div>
        )
    }

}

export default ImportarPredicoes
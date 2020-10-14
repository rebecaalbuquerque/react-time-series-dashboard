import React, {Component} from 'react'
import API from "../utils/API"
import InputsPredicoes from "./InputsPredicoes";
import {fileToBase64} from "../utils/FileUtils";
import {trackPromise} from "react-promise-tracker";

class ImportarPredicoes extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dados: [],
            inputsPredicoes: [
                <InputsPredicoes
                    id={0}
                    key={"inputsPredicoes" + 0}
                    onDadosReaisChange={(e, id) => this.onDadosReaisChange(e, id)}
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
                    id={this.state.dados.length}
                    key={"inputsPredicoes" + this.state.inputsPredicoes.length}
                    onDadosReaisChange={(e, id) => this.onDadosReaisChange(e, id)}
                    onPredicoesChange={(e, id) => this.onPredicoesChange(e, id)}
                    onNomeModeloChange={(e, id) => this.onNomeModeloChange(e, id)}/>
            ]
        })

    }

    onFormSubmit(e) {
        e.preventDefault()

        let listData = []

        new Promise((resolve, reject) => {

            this.state.dados.forEach((item, index) => {

                fileToBase64(item.dadosReais).then(resultDadosReais => {

                    fileToBase64(item.predicoes).then(resultPredicoes => {

                        listData.push({
                            nomeModelo: item.nomeModelo,
                            dadosReais: resultDadosReais,
                            dadosReaisArquivo: item.dadosReais.name,
                            predicoes: resultPredicoes
                        })

                        if (index === this.state.dados.length - 1)
                            resolve();
                    })

                })

            })

        }).then(() => {

            trackPromise(
                API
                    .post("/metricas", listData)
                    .then(function (response) {
                        console.log(response.data)
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

    onDadosReaisChange(e, id) {
        this.initInDadosIfNotExists(id)
        this.state.dados[id].dadosReais = e.target.files[0]
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
        if (this.state.dados.find(item => item.id === id) == null) {
            this.state.dados.push(
                {
                    id: id,
                    nomeModelo: "",
                    dadosReais: null,
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
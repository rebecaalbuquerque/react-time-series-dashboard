import React, {Component} from 'react'
import API from "../utils/API"
import InputsPredicoes from "./InputsPredicoes";

class ImportarPredicoes extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dados: [],
            inputsPredicoes: [
                <InputsPredicoes
                    id={0}
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
                    onDadosReaisChange={(e, id) => this.onDadosReaisChange(e, id)}
                    onPredicoesChange={(e, id) => this.onPredicoesChange(e, id)}
                    onNomeModeloChange={(e, id) => this.onNomeModeloChange(e, id)}/>
            ]
        })

    }

    onFormSubmit(e) {
        e.preventDefault()

        let formData = new FormData();

        // todo: ajeitar/melhorar
        this.state.dados.map((item, index) => {
            formData.append("nomeModelo-" + index, item.nomeModelo)
            formData.append("dadosReais-" + index, item.dadosReais)

            Array.from(item.predicoes).map((file, index) => {
                formData.append("predicao-" + index, file);
                return file;
            });

            return item
        })

        /*formData.append("nomeModelo", this.state.nomeModelo);
        formData.append("dadosReais", this.state.dadosReais);

        Array.from(this.state.predicoes).map((file, index) => {
            formData.append("predicao-" + index, file);
            return file;
        });*/

        API
            .post("/metricas", formData)
            .then(function (response) {
                localStorage.setItem("@time-series-dashboard/seriesTemporaisMetricas", JSON.stringify(response.data))
                alert("Importação realizada com sucesso!")
            })
            .catch(function (error) {
                alert("Ocorreu um erro ao tentar importar os arquivos.")
                console.log(error);
            });

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
                    predicoes: []
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
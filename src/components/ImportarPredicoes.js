import React, {Component} from 'react'
import API from "../utils/API"

class ImportarPredicoes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dadosReais: null,
            predicoes: []
        };

        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onDadosReaisChange = this.onDadosReaisChange.bind(this)
        this.onPredicoesChange = this.onPredicoesChange.bind(this)
    }

    onFormSubmit(e) {
        e.preventDefault()

        let formData = new FormData();
        formData.append("dadosReais", this.state.dadosReais);

        Array.from(this.state.predicoes).map((file, index) => {
            formData.append("predicao-" + index, file);
            return file;
        });

        console.log(formData)

        API
            .post("/metricas", formData)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    onDadosReaisChange(e) {
        this.setState({dadosReais: e.target.files[0]})
    }

    onPredicoesChange(e) {
        this.setState({predicoes: e.target.files})
    }

    render() {
        return (
            <div className="content">
                <div className="container-fluid">

                    <form id="form-importar-predicoes" onSubmit={this.onFormSubmit} encType="multipart/form-data">

                        <div className="row">

                            <div className="col-md-6">
                                <div className="card card-input">
                                    <label>
                                        <h3 className="card-input-title">Dados reais</h3>
                                        <br/>
                                        <input type="file" required={true} onChange={this.onDadosReaisChange}
                                               accept=".csv"/>
                                    </label>
                                </div>

                            </div>

                            <div className="col-md-6">
                                <div className="card card-input">
                                    <label>
                                        <h3 className="card-input-title">Predições</h3>
                                        <br/>
                                        <input type="file" required={true} onChange={this.onPredicoesChange}
                                               multiple={true}
                                               accept=".csv"/>
                                    </label>
                                </div>

                            </div>

                        </div>

                        <br/>

                        <input className="btn-centralized btn-primary" type="submit" value="Enviar"/>
                    </form>

                </div>
            </div>
        )
    }

}

export default ImportarPredicoes
import React, {Component} from 'react'

class InputsPredicoes extends Component {

    render() {

        return (
            <div>

                <div className="row">

                    <div className="col-md-4">
                        <div className="card card-input">
                            <label>
                                <h3 className="card-input-title">Dados reais</h3>
                                <br/>
                                <input type="file"
                                       required={true}
                                       onChange={(e) => this.props.onDadosReaisChange(e, this.props.id)}
                                       accept=".csv"/>
                            </label>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card card-input">
                            <label>
                                <h3 className="card-input-title">Predições</h3>
                                <br/>
                                <input type="file"
                                       required={true}
                                       onChange={(e) => this.props.onPredicoesChange(e, this.props.id)}
                                       multiple={true}
                                       accept=".csv"/>
                            </label>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card card-input">
                            <label>
                                <h3 className="card-input-title">Modelo utilizado</h3>
                                <br/>
                                <input type="text"
                                       className="form-control"
                                       placeholder="ARIMA"
                                       required={true}
                                       onChange={(e) => this.props.onNomeModeloChange(e, this.props.id)}/>
                            </label>
                        </div>
                    </div>

                </div>

                <br/>

            </div>
        )

    }

}

export default InputsPredicoes
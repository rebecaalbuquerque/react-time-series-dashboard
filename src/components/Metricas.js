import React, {Component} from 'react'
import {Redirect} from "react-router-dom";

class Metricas extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isVersaoReduzida: true,
            seriesTemporaisMetricas: JSON.parse(localStorage.getItem("@time-series-dashboard/seriesTemporaisMetricas"))
        };

    }

    render() {

        return (
            <div className="content">
                <div className="container-fluid">
                    { this.state.seriesTemporaisMetricas == null
                        ?
                        <p>
                            Vá em "IMPORTAR PREDIÇÕES" para gerar as métricas das suas séries temporais!
                        </p>
                        :
                        <div>
                            { this.state.isVersaoReduzida
                                ? <Redirect from="*" to="/metricasReduzidas" />
                                : <Redirect from="*" to="/metricasCompletas" />
                            }
                        </div>
                    }

                </div>
            </div>

        )

    }

}

export default Metricas
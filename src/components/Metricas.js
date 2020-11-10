import React, {Component} from 'react'
import {Redirect} from "react-router-dom";

class Metricas extends Component {

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
                    { this.state.seriesTemporaisMetricas == null
                        ?
                        <p>
                            Vá em "IMPORTAR PREDIÇÕES" para gerar as métricas das suas séries temporais!
                        </p>
                        :
                        <div>
                            <Redirect from="*" to="/metricasCompletas" />
                            {/*{ this.state.seriesTemporaisMetricas.responseMetricasPorModelo.length > 2
                                ? <Redirect from="*" to="/metricasCompletas" />
                                : <Redirect from="*" to="/metricasReduzidas" />
                            }*/}
                        </div>
                    }

                </div>
            </div>

        )

    }

}

export default Metricas
import React, { Component } from 'react'
import { GridList, GridListTile } from '@material-ui/core';
import API from "../utils/API"

class GerarSeries extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            ts: []
        };
    }

    render() {

        return (
            <div className="content">
                <div className="container-fluid">
                    <GridList cellHeight={"auto"} cols={2}>
                        { this.state.ts.map(item =>(
                            <GridListTile key={item.nome}>
                                <p>{item.nome}</p>
                                <img src={`data:image/jpeg;base64,${item.imagem}`} alt={item.nome} />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            </div>
        )

    }

    async componentDidMount() {
        let response = await API.get("gerarSeriesTemporais")
        console.log(response.data)

        this.setState({
            ...this.state, ...{
                isLoading: false,
                ts: response.data
            }
        });
    }

}

export default GerarSeries
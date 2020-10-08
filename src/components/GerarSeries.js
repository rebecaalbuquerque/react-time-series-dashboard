import React, {Component} from 'react'
import {GridList, GridListTile} from '@material-ui/core';
import API from "../utils/API"
import GridListTileBar from "@material-ui/core/GridListTileBar";
import JSZip from "jszip";
import saveAs from "../utils/FileSaver"

class GerarSeries extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            ts: []
        };

        this.donwloadFiles = this.donwloadFiles.bind(this);
    }

    render() {

        return (
            <div className="content">
                <div className="container-fluid">

                    <button type="button" className="btn-primary btn-centralized" onClick={this.donwloadFiles}>Baixar séries temporais</button>

                    <GridList className="grid-list-title" cellHeight={"auto"} cols={2}>
                        { this.state.ts.map((item) => (
                            <GridListTile key={item.nome}>
                                <img src={`data:image/jpeg;base64,${item.imagem}`} alt={item.nome} />

                                <GridListTileBar
                                    title={item.nome}
                                    titlePosition="top"
                                    actionPosition="left"
                                    className="grid-list-title-bar"
                                />
                            </GridListTile>
                        ))}
                    </GridList>

                </div>
            </div>
        )

    }

    donwloadFiles() {
        const zip = new JSZip();

        this.state.ts.forEach(function(item) {
            zip.file(item.nome + ".csv", item.csv, {base64: true});
            zip.file(item.nome + ".png", item.imagem, {base64: true});
        });

        zip.generateAsync({type:"blob"}).then(function(content) {
            saveAs(content, "séries temporais.zip")
        });

    }

    async componentDidMount() {
        let response = await API.get("seriesTemporaisSinteticas")
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
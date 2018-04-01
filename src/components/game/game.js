import React from 'react';
import $ from 'jquery';
window.$ = $;
require('../../../node_modules/chessboardjs');


export class Game extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.board = ChessBoard('board');


    }

    render() {
        return(
            <div>
                <div id={'board'}/>
                Chess Hack V 0.0.0
            </div>
        );
    }
}
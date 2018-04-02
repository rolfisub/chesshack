import React from 'react';
import Chessboard from 'react-chess';
import {chessToBoardReact} from '../../common/chessToBoardReact';

export class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lineup: []
        };
        this.ctb = new chessToBoardReact();
        this.makeRandomMove = this.makeRandomMove.bind(this);
    }

    makeRandomMove() {
        let posMoves = this.props.chess.moves();
        let rndIndex = Math.floor(Math.random() * posMoves.length);
        this.props.chess.move(posMoves[rndIndex]);
        let fen = this.props.chess.fen();
        this.setState({
            lineup: this.ctb.fromFenToLineup(fen)
        });
    }

    componentDidMount() {
        let fen = this.props.chess.fen();
        this.setState({
            lineup: this.ctb.fromFenToLineup(fen)
        });
        setInterval(()=> {
            let game = this.props.chess;
            if (game.game_over() === true ||
                game.in_draw() === true ) game.reset();
            this.makeRandomMove();
        }, 1)
    }

    render() {
        return(
            <div style={{width:500, height:500}}>
                <Chessboard pieces={this.state.lineup} />
                Chess Hack V 0.0.0
            </div>
        );
    }
}
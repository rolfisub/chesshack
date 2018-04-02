import React from 'react';
import Chessboard from 'react-chess';
import ctb from '../../common/chessToBoardReact';

export class Game extends React.Component {
    constructor(props) {
        super(props);
        this.ctb = new ctb();
    }

    componentDidMount() {
        console.log(this.props.chess.fen());
        this.ctb.fromFenToLineup('abc');
    }

    render() {
        const lineup = ['R@h1', 'P@f2', 'q@d8', 'R@a1', 'P@a2', 'P@c2', 'b@c8', 'p@d7', 'Q@d1', 'n@g8'];
        return(
            <div style={{width:500, height:500}}>
                <Chessboard pieces={lineup} />
                Chess Hack V 0.0.0
            </div>
        );
    }
}
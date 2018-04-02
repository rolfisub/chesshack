const Blacks = [
    'r', 'n', 'b', 'q', 'k', 'p'
];
const Whites = [
    'R', 'N', 'B', 'Q', 'K', 'P'
];
const Nums = [
    '1', '2', '3', '4', '5', '6', '7', '8'
];
const PgnsX = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'
];
const PgnsY = [
    '1', '2', '3', '4', '5', '6', '7', '8'
];


export class chessToBoardReact {
    constructor() {
        this.getLineup = this.getLineup.bind(this);
        this.getPgnArrPos = this.getPgnArrPos.bind(this);
        this.getPgnX = this.getPgnX.bind(this);
        this.getPgnY = this.getPgnY.bind(this);
        this.getPgnFromPos = this.getPgnFromPos.bind(this);
        this.fromFenToLineup = this.fromFenToLineup.bind(this);
    }
    getPgnY(pos) {
        return PgnsY[pos.y];
    }
    getPgnX(pos) {
        return PgnsX[pos.x];
    }
    getPgnArrPos(pos) {
        let vector = {
            x: 0,
            y: 0
        }
        if(pos > 0 && pos < 65) {
            if(pos >= 1 && pos <= 8) {
                vector.x = pos - 1;
                vector.y = 0;
            } else if (pos >= 9 && pos <= 16) {
                vector.x = (pos - 8) - 1;
                vector.y = 1;
            } else if (pos >= 17 && pos <= 24) {
                vector.x = (pos - (8 * 2)) - 1;
                vector.y = 2;
            } else if (pos >= 25 && pos <= 32) {
                vector.x = (pos - (8 * 3)) - 1;
                vector.y = 3;
            } else if (pos >= 33 && pos <= 40) {
                vector.x = (pos - (8 * 4)) - 1;
                vector.y = 4;
            } else if (pos >= 41 && pos <= 48) {
                vector.x = (pos - (8 * 5)) - 1;
                vector.y = 5;
            } else if (pos >= 49 && pos <= 56) {
                vector.x = (pos - (8 * 6)) - 1;
                vector.y = 6;
            } else if (pos >= 57 && pos <= 64) {
                vector.x = (pos - (8 * 7)) - 1;
                vector.y = 7;
            }
        }
        return vector;
    }
    getPgnFromPos(pos) {
        return this.getPgnX(this.getPgnArrPos(pos)) + this.getPgnY(this.getPgnArrPos(pos));
    }
    getLineup(char, pgn) {
        return char + '@' + pgn;
    }
    fromFenToLineup(fen) {
        let result = [];
        if(fen.length) {
            let len = fen.length;
            let pos = 1;
            for (let x = 0; x < len; x++) {
                let char = fen[x];

                if(Blacks.indexOf(char) >= 0) {
                    //if black piece
                    result.push(this.getLineup(char, this.getPgnFromPos(pos)));
                    pos++;

                } else if (Whites.indexOf(char) >= 0) {
                    result.push(this.getLineup(char, this.getPgnFromPos(pos)));
                    pos++;
                } else if(Nums.indexOf(char) >= 0) {
                    pos += parseInt(char, 10);
                } else if(char === ' ') {
                    //end of pos
                    x = len + 1;
                }
            }
        }
        return result;
    }
}
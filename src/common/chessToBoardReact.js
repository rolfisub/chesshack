export default class chessToBoardReact {
    fromFenToLineup(fen) {
        if(fen.length) {
            let l = fen.length;
            for (let x = 0; x < l; x++) {
                console.log(fen[x]);
            }
        }
    }
}
import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let availableMoves: Array<Square> = new Array(0);

        this.getHorizontalMoves(board, availableMoves);
        this.getVerticalMoves(board, availableMoves);

        return availableMoves;
    }
}

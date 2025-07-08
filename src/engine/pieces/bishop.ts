import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Bishop extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let availableMoves: Array<Square> = new Array(0);

        this.getForwardDiagonalMoves(board, availableMoves);
        this.getBackwardDiagonalMoves(board, availableMoves);

        return availableMoves;
    }
}

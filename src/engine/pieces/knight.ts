import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Knight extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let availableMoves: Array<Square> = new Array(0);
        const currentSquare = board.findPiece(this);

        let newRowPosition = currentSquare.row;
        let newColPosition = currentSquare.col;

        this.addCertainMove(newRowPosition + 2, newColPosition + 1, availableMoves);

        this.addCertainMove(newRowPosition + 2, newColPosition - 1, availableMoves);

        this.addCertainMove(newRowPosition - 2, newColPosition + 1, availableMoves);

        this.addCertainMove(newRowPosition - 2, newColPosition - 1, availableMoves);

        this.addCertainMove(newRowPosition + 1, newColPosition + 2, availableMoves);

        this.addCertainMove(newRowPosition + 1, newColPosition - 2, availableMoves);

        this.addCertainMove(newRowPosition - 1, newColPosition + 2, availableMoves);

        this.addCertainMove(newRowPosition - 1, newRowPosition - 2, availableMoves);

        return availableMoves;
    }
}

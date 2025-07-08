import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class King extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let availableMoves: Array<Square> = new Array(0);
        const currentSquare = board.findPiece(this);

        let newRowPosition = currentSquare.row;
        let newColPosition = currentSquare.col;

        this.addCertainMove(newRowPosition + 1, newColPosition + 1, availableMoves, board);

        this.addCertainMove(newRowPosition + 1, newColPosition, availableMoves, board);

        this.addCertainMove(newRowPosition + 1, newColPosition - 1, availableMoves, board);

        this.addCertainMove(newRowPosition, newColPosition - 1, availableMoves, board);

        this.addCertainMove(newRowPosition, newColPosition + 1, availableMoves, board);
        
        this.addCertainMove(newRowPosition - 1, newColPosition - 1, availableMoves, board);

        this.addCertainMove(newRowPosition - 1, newColPosition + 1, availableMoves, board);

        this.addCertainMove(newRowPosition - 1, newColPosition, availableMoves, board);

        return availableMoves;
    }
}

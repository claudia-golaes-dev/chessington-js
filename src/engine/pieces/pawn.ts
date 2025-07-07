import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let availableMoves: Array<Square> = new Array(0);
        const currentSquare = board.findPiece(this);
        const checkIfPlayerWhite = this.player === Player.WHITE;
        const checkIfPlayerBlack = this.player === Player.BLACK;

        let newRowPosition = currentSquare.row + Number(checkIfPlayerWhite) - Number(checkIfPlayerBlack);
        let newColPosition = currentSquare.col;

        let newSquarePosition = new Square(newRowPosition, newColPosition);

        if(this.isValidPosition(newRowPosition, newColPosition) && !board.getPiece(newSquarePosition)) {
            availableMoves.push(newSquarePosition);
        }

        if(this.firstMove && this.isValidPosition(newRowPosition, newColPosition)){
            newRowPosition = newRowPosition + Number(checkIfPlayerWhite) - Number(checkIfPlayerBlack);
            let firstMoveSquarePosition = new Square(newRowPosition, newColPosition)
            if(!board.getPiece(newSquarePosition) && !board.getPiece(firstMoveSquarePosition) && this.isValidPosition(newRowPosition, newColPosition)) {
                availableMoves.push(firstMoveSquarePosition);
            }
        }
        return availableMoves;
    }
}

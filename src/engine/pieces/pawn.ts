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

        if (this.isValidPosition(newRowPosition, newColPosition) && !board.getPiece(newSquarePosition)) {
            availableMoves.push(newSquarePosition);
        }

        let opponentRowPosition = newRowPosition;
        let opponentColPosition = newColPosition;
        let opponentSquare:Square;

        opponentSquare =  Square.at(opponentRowPosition, opponentColPosition + 1);
        if (this.isValidPosition(opponentRowPosition, opponentColPosition + 1) && board.getPiece(opponentSquare) && !(board.getPiece(opponentSquare)?.player === this.player || board.isKing(board.getPiece(opponentSquare)))) {
            availableMoves.push(opponentSquare);
        }

        opponentSquare =  Square.at(opponentRowPosition, opponentColPosition - 1);
        if (this.isValidPosition(opponentRowPosition, opponentColPosition - 1) && board.getPiece(opponentSquare)  && !(board.getPiece(opponentSquare)?.player === this.player || board.isKing(board.getPiece(opponentSquare)))) {
            availableMoves.push(opponentSquare);
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

import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Queen extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let availableMoves: Array<Square> = new Array(0);
        const currentSquare = board.findPiece(this);

        let forwardsDiagonalRowPosition = 0;
        let backwardsDiagonalRowPosition = 0;

        let forwardsDiagonalColPosition = currentSquare.col - currentSquare.row;
        let backwardsDiagonalColPosition = currentSquare.col + currentSquare.row;
        let forwardsDiagonal:Square;
        let backwardsDiagonal:Square;

        let newRowPosition = currentSquare.row;
        let newColPosition = currentSquare.col;
        let horizontalPosition:Square;
        let verticalPosition:Square;

        for (let i = 0; i < 8 ; i++){
            if(i != newColPosition) {
                horizontalPosition = Square.at(newRowPosition, i);
                availableMoves.push(horizontalPosition);
            }
            if(i != newRowPosition) {
                verticalPosition = Square.at(i, newColPosition);
                availableMoves.push(verticalPosition);
            }
        }

        while (forwardsDiagonalColPosition < 0) {
            forwardsDiagonalColPosition++;
            forwardsDiagonalRowPosition++;
        }
        while (backwardsDiagonalColPosition > 7) {
            backwardsDiagonalColPosition--;
            backwardsDiagonalRowPosition++;
        }

        while (forwardsDiagonalColPosition <= 7 && forwardsDiagonalRowPosition <= 7) {
            if(forwardsDiagonalRowPosition != currentSquare.row) {
                forwardsDiagonal = Square.at(forwardsDiagonalRowPosition, forwardsDiagonalColPosition);
                availableMoves.push(forwardsDiagonal);
            }
            forwardsDiagonalColPosition++;
            forwardsDiagonalRowPosition++;
        }

        while (backwardsDiagonalRowPosition <= 7 && backwardsDiagonalColPosition >= 0) {
            if(backwardsDiagonalRowPosition != currentSquare.row) {
                backwardsDiagonal = Square.at( backwardsDiagonalRowPosition, backwardsDiagonalColPosition);
                availableMoves.push(backwardsDiagonal);
            }
            backwardsDiagonalColPosition--;
            backwardsDiagonalRowPosition++;
        }

        return availableMoves;
    }
}

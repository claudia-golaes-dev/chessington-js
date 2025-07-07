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
        const currentSquare = board.findPiece(this);

        let forwardsDiagonalRowPosition = 0;
        let backwardsDiagonalRowPosition = 0;

        let forwardsDiagonalColPosition = currentSquare.col - currentSquare.row;
        let backwardsDiagonalColPosition = currentSquare.col + currentSquare.row;
        let forwardsDiagonal:Square;
        let backwardsDiagonal:Square;

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

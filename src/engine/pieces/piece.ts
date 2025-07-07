import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Piece {
    public player: Player;
    public firstMove = true;

    public constructor(player: Player) {
        this.player = player;
    }

    public getAvailableMoves(board: Board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    public getForwardDiagonalMoves(board:Board, availableMoves: Array<Square>){
        const currentSquare = board.findPiece(this);

        let forwardsDiagonalRowPosition = 0;
        let forwardsDiagonalColPosition = currentSquare.col - currentSquare.row;
        let forwardsDiagonal:Square;

        while (forwardsDiagonalColPosition < 0) {
            forwardsDiagonalColPosition++;
            forwardsDiagonalRowPosition++;
        }

        while (forwardsDiagonalColPosition <= 7 && forwardsDiagonalRowPosition <= 7) {
            if(forwardsDiagonalRowPosition != currentSquare.row) {
                forwardsDiagonal = Square.at(forwardsDiagonalRowPosition, forwardsDiagonalColPosition);
                availableMoves.push(forwardsDiagonal);
            }
            forwardsDiagonalColPosition++;
            forwardsDiagonalRowPosition++;
        }
    }

    public getBackwardDiagonalMoves(board: Board,  availableMoves: Array<Square>){
        const currentSquare = board.findPiece(this);

        let backwardsDiagonalRowPosition = 0;
        let backwardsDiagonalColPosition = currentSquare.col + currentSquare.row;
        let backwardsDiagonal:Square;

        while (backwardsDiagonalColPosition > 7) {
            backwardsDiagonalColPosition--;
            backwardsDiagonalRowPosition++;
        }


        while (backwardsDiagonalRowPosition <= 7 && backwardsDiagonalColPosition >= 0) {
            if(backwardsDiagonalRowPosition != currentSquare.row) {
                backwardsDiagonal = Square.at( backwardsDiagonalRowPosition, backwardsDiagonalColPosition);
                availableMoves.push(backwardsDiagonal);
            }
            backwardsDiagonalColPosition--;
            backwardsDiagonalRowPosition++;
        }
    }

    public getHorizontalMoves(board: Board, availableMoves: Array<Square>){
        const currentSquare = board.findPiece(this);

        let newRowPosition = currentSquare.row;
        let newColPosition = currentSquare.col;
        let horizontalPosition:Square;

        for (let i = 0; i < 8 ; i++){
            if(i != newColPosition) {
                horizontalPosition = Square.at(newRowPosition, i);
                availableMoves.push(horizontalPosition);
            }
        }
    }

    public getVerticalMoves(board: Board, availableMoves: Array<Square>){
        const currentSquare = board.findPiece(this);

        let newRowPosition = currentSquare.row;
        let newColPosition = currentSquare.col;
        let verticalPosition:Square;

        for (let i = 0; i < 8 ; i++){
            if(i != newRowPosition) {
                verticalPosition = Square.at(i, newColPosition);
                availableMoves.push(verticalPosition);
            }
        }
    }
    public moveTo(board: Board, newSquare: Square) {
        this.firstMove = false;
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }
}

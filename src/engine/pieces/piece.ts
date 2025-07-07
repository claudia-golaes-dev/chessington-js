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
    
    public isValidPosition(row: number, col:number): boolean {
        return row >= 0 && row <= 7 && col >= 0 && col <= 7;
    }

    public addCertainMove(row: number, col:number, availableMoves: Array<Square>){
        let newSquarePosition:Square;

        if(this.isValidPosition(row, col)) {
            newSquarePosition = Square.at(row, col);
            availableMoves.push(newSquarePosition);
        }
    }

    public getForwardDiagonalMoves(board:Board, availableMoves: Array<Square>){
        const currentSquare = board.findPiece(this);

        let forwardsDiagonalRowPosition = 0;
        let forwardsDiagonalColPosition = currentSquare.col - currentSquare.row;
        let forwardsDiagonal:Square;
        let stopTheLoop = false;

        while (forwardsDiagonalColPosition < 0) {
            forwardsDiagonalColPosition++;
            forwardsDiagonalRowPosition++;
        }

        while (forwardsDiagonalColPosition <= 7 && forwardsDiagonalRowPosition <= 7 && !stopTheLoop) {
            if(forwardsDiagonalRowPosition != currentSquare.row) {
                forwardsDiagonal = Square.at(forwardsDiagonalRowPosition, forwardsDiagonalColPosition);
                if(board.getPiece(forwardsDiagonal)){
                    availableMoves.push(forwardsDiagonal);
                    stopTheLoop = true;
                } else {
                    availableMoves.push(forwardsDiagonal);
                }
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
        let stopTheLoop = false;


        while (backwardsDiagonalColPosition > 7) {
            backwardsDiagonalColPosition--;
            backwardsDiagonalRowPosition++;
        }


        while (backwardsDiagonalRowPosition <= 7 && backwardsDiagonalColPosition >= 0 && !stopTheLoop) {
            if(backwardsDiagonalRowPosition != currentSquare.row) {
                backwardsDiagonal = Square.at( backwardsDiagonalRowPosition, backwardsDiagonalColPosition);
                if(board.getPiece(backwardsDiagonal)){
                    availableMoves.push(backwardsDiagonal);
                    stopTheLoop = true;
                } else {
                    availableMoves.push(backwardsDiagonal);
                }
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
        let stopTheLoop = false;

        for (let i = 0; i < 8 && !stopTheLoop ; i++){
            if(i != newColPosition) {
                horizontalPosition = Square.at(newRowPosition, i);
                if(board.getPiece(horizontalPosition)){
                    if(board.getPiece(horizontalPosition)?.player === this.player || board.isKing(board.getPiece(horizontalPosition))) {
                        stopTheLoop = true;
                    } else {
                        availableMoves.push(horizontalPosition);
                        stopTheLoop = true;
                    }
                } else {
                    availableMoves.push(horizontalPosition);
                }
            }
        }
    }

    public getVerticalMoves(board: Board, availableMoves: Array<Square>){
        const currentSquare = board.findPiece(this);

        let newRowPosition = currentSquare.row;
        let newColPosition = currentSquare.col;
        let verticalPosition:Square;
        let stopTheLoop = false;


        for (let i = 0; i < 8 && !stopTheLoop; i++){
            if(i != newRowPosition) {
                verticalPosition = Square.at(i, newColPosition);
                if(board.getPiece(verticalPosition)){
                    stopTheLoop = true;
                } else {
                    availableMoves.push(verticalPosition);
                }
            }
        }
    }
    
    public moveTo(board: Board, newSquare: Square) {
        this.firstMove = false;
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }
}

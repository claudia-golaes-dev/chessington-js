import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Knight extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public isValidPosition(row: number, col:number): boolean {
        return row >= 0 && row <= 7 && col >= 1 && col <= 7;
    }

    public getAvailableMoves(board: Board) {
        let availableMoves: Array<Square> = new Array(0);

        const currentSquare = board.findPiece(this);

        let newRowPosition = currentSquare.row;
        let newColPosition = currentSquare.col;
        let newSquarePosition:Square;

        if(this.isValidPosition(newRowPosition + 2, newColPosition + 1)) {
            newSquarePosition = Square.at(newRowPosition + 2, newColPosition + 1);
            availableMoves.push(newSquarePosition);
        }
        if(this.isValidPosition(newRowPosition + 2, newColPosition - 1)) {
            newSquarePosition = Square.at(newRowPosition + 2, newColPosition - 1);
            availableMoves.push(newSquarePosition);
        }
        if(this.isValidPosition(newRowPosition - 2, newColPosition + 1)) {
            newSquarePosition = Square.at(newRowPosition - 2, newColPosition + 1);
            availableMoves.push(newSquarePosition);
        }
        if(this.isValidPosition(newRowPosition - 2, newColPosition - 1)) {
            newSquarePosition = Square.at(newRowPosition - 2, newColPosition - 1);
            availableMoves.push(newSquarePosition);
        }
        if(this.isValidPosition(newRowPosition + 1, newColPosition + 2)) {
            newSquarePosition = Square.at(newRowPosition + 1, newColPosition + 2);
            availableMoves.push(newSquarePosition);
        }
        if(this.isValidPosition(newRowPosition + 1, newColPosition - 2)) {
            newSquarePosition = Square.at(newRowPosition + 1, newColPosition - 2);
            availableMoves.push(newSquarePosition);
        }
        if(this.isValidPosition(newRowPosition - 1, newColPosition + 2)) {
            newSquarePosition = Square.at(newRowPosition - 1, newColPosition + 2);
            availableMoves.push(newSquarePosition);
        }
        if(this.isValidPosition(newRowPosition - 1, newColPosition - 2)) {
            newSquarePosition = Square.at(newRowPosition - 1, newColPosition - 2);
            availableMoves.push(newSquarePosition);
        }

        return availableMoves;
    }
}

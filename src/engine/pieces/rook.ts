import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let availableMoves: Array<Square> = new Array(0);
        const currentSquare = board.findPiece(this);

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
        return availableMoves;
    }
}

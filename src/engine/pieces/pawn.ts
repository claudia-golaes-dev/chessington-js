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

        let newSquarePosition = new Square(newRowPosition, newColPosition)
        availableMoves.push(newSquarePosition);

        if(this.firstMove){
            newRowPosition = newRowPosition + Number(checkIfPlayerWhite) - Number(checkIfPlayerBlack);
            let firstMoveSquarePosition = new Square(newRowPosition, newColPosition)
            availableMoves.push(firstMoveSquarePosition);
        }
        return availableMoves;
    }
}

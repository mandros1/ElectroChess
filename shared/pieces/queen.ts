import Piece from './piece';
import { Sides } from '../consts';
import Board from '../board';


export default class Queen extends Piece {

    constructor(side: Sides, row: number, col: number) {
        super(side, row, col);
    }

    public getPossibleDestinations(board: Board): Piece[] {
        const possibleDestinations = [];



        return possibleDestinations;
    }

}
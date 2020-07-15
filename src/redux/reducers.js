import { NEXT_TURN, RESET_GAME } from "./actionTypes";

const initialState = {
    gameField: [[,,,],[,,,],[,,,]],
    winner: undefined,
    nextPlayer: 'X'
};

function todos(state = initialState, action) {
    switch (action.type) {
      case NEXT_TURN: {
        if (state.nextPlayer == 'X') {
            return {
                ...state,
                gameField: action.arr,
                nextPlayer: 'O'
            } 
        } else {
            return {
                ...state,
                gameField: action.arr,
                nextPlayer: 'X'
            } 
        }
      }
      case RESET_GAME: {
        //  console.log(action);
        return {
          ...state,
          gameField: [[,,,],[,,,],[,,,]],
          nextPlayer: 'X',
          winner: undefined
        }
      }
      default:
        return state;
    }
  }

export default todos;

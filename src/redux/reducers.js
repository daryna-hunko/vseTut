import { combineReducers } from "redux";
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
                nextPlayer: 'O'
            } 
        } else {
            return {
                ...state,
                nextPlayer: 'X'
            } 
        }
      }
      case RESET_GAME: {
        return {
          ...state,
          gameField: [[,,,],[,,,],[,,,]],
          winner: undefined
        }
      }
      default:
        return state;
    }
  }

export default combineReducers({ todos });

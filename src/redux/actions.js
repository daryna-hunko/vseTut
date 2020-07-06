import { NEXT_TURN, RESET_GAME } from "./actionTypes";

let nextTodoId = 0;

export const nextTurn = () => ({
  type: NEXT_TURN
  
});

export const resetGame = () => ({
  type: RESET_GAME
});
import * as types from '../constants/atmActionTypes';

// example of a thunk using the redux-thunk middleware
export function atmPayout(notes, ammount) {
  return {
    type: types.EXEC_PAYMENT,
    ammount,
    notes
  };
}

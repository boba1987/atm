import * as types from '../constants/atmActionTypes';

// example of a thunk using the redux-thunk middleware
export function atmPayout(amount, notes) {
  return {
    type: types.EXEC_PAYMENT,
    amount,
    notes
  };
}

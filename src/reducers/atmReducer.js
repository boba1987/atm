import * as types from '../constants/atmActionTypes';
import 'whatwg-fetch';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function atmReducer(state = '0', action) {
  switch (action.type) {
    case types.EXEC_PAYMENT: {
      return action.amount;
    }

    default:
      return state;
  }
}

import * as types from '../constants/atmActionTypes';
import execPayment from '../utils/payment';
import initialState from './initialState';
import 'whatwg-fetch';
const headers = new Headers();
headers.append("Content-Type", "application/json");

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function atmReducer(state = initialState.payoutBox, action) {
  switch (action.type) {
    case types.EXEC_PAYMENT: {
      fetch("http://localhost:4000/payout", {
        method: "POST",
        body: JSON.stringify({notes:action.notes, amount: action.amount}),
        headers
      }).then((response) => {
        return response.json();
      }).then((res) => {
        console.log(res);
      });
      
      return execPayment.execPayment(action.notes, action.amount);
    }

    default:
      return state;
  }
}

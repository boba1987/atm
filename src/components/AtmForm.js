import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import initialState from '../reducers/initialState';
import Keyboard from 'react-material-ui-keyboard';
import TextField from 'material-ui/TextField';
import injectTapEventPlugin from 'react-tap-event-plugin';

const numericKeyboard = [
    ['Escape', '', 'Backspace'],
    ['7',      '8',         '9'],
    ['4',      '5',         '6'],
    ['1',      '2',         '3'],
    ['0',      '', 'Enter']
];

class AtmForm extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return(
      <MuiThemeProvider>
        <div>
          <RaisedButton
            key={1}
            label="Payout"
            primary={true}
            onClick={() => this.props.execPayment('1000', initialState.notes)}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

AtmForm.propTypes = {
  execPayment: PropTypes.func.isRequired
};

export default AtmForm;

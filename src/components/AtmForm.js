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
    injectTapEventPlugin();

    this.state = {
      open: true,
      value: ''
    };

    this.onInput = this.handleInput.bind(this);
  }

  handleInput(input) {
    this.setState({ value: input });
  }

  render() {
    return(
      <MuiThemeProvider>
        <div>
          <h2>Enter amount</h2>
          <Keyboard
            textField={
              <TextField
                id="text"
                value={this.state.value}
              />
            }
            automatic
            onInput={this.onInput}
            layouts={[numericKeyboard]}
            open={this.state.open}
          />
          <RaisedButton
            key={1}
            label="Payout"
            primary={true}
            onClick={() => this.props.execPayment(this.state.value, initialState.notes)}
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

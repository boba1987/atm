import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import initialState from '../reducers/initialState';

class PayoutBox extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.clear = this.clear.bind(this);
  }

  clear() {

  }

  render() {
    console.log(this.props);
    return(
      <MuiThemeProvider>
        <div>
          <h3>Get your money here!</h3>

            <RaisedButton
              key={2}
              label="Clear"
              secondary={true}
              onClick={() => this.props.clearBox('0', initialState.notes)}
            />
        </div>
      </MuiThemeProvider>
    );
  }
}

PayoutBox.propTypes = {
  notes: PropTypes.object.isRequired,
  clearBox: PropTypes.func.isRequired
};

export default PayoutBox;

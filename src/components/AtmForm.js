import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
            onClick={this.props.execPayment}
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

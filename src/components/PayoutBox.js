import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import initialState from '../reducers/initialState';


class PayoutBox extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return(
      <MuiThemeProvider>
        <div>
          <h3>Get your money here!</h3>

          <hr/>
          
          <h3>Notes:</h3>
          <h4>
            1000 X {this.props.notes['1000']}
          </h4>
          <h4>
            500 X {this.props.notes['500']}
          </h4>
          <h4>
            200 X {this.props.notes['200']}
          </h4>
          <h4>
            100 X {this.props.notes['100']}
          </h4>
          <h4>
            50 X {this.props.notes['50']}
          </h4>

          <hr/>

          <h3>Coins (>20mm):</h3>

          <h4>
            20 X {this.props.notes['20']}
          </h4>

          <h4>
            5 x {this.props.notes['5']}
          </h4>

          <h4>
            2 x {this.props.notes['2']}
          </h4>

          <hr/>

          <h3>Coins (&lt;=20mm):</h3>

          <h4>
            10 X {this.props.notes['10']}
          </h4>

          <h4>
            1 X {this.props.notes['1']}
          </h4>

          <RaisedButton
            key={2}
            label="Clear"
            secondary={true}
            onClick={() => this.props.clearBox('0', initialState.notes)}
          />
          <br/>
          <br/>
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

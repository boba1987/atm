import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import initialState from '../reducers/initialState';

const headers = new Headers();
headers.append("Content-Type", "application/json");

class PayoutBox extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      notes: initialState.payoutBox
    };
  }

  componentWillUpdate(props) {
    const that = this;
    if(this.props.notes != props.notes) {
      fetch("http://localhost:4000/payout", {
        method: "POST",
        body: JSON.stringify({notes:initialState.notes, amount: props.notes}),
        headers
      }).then((response) => {
        return response.json();
      }).then((res) => {
        that.setState({notes: res});
      });
    }
  }

  render() {
    return(
      <MuiThemeProvider>
        <div>
          <h3>Get your money here!</h3>

          <hr/>

          <h3>Notes:</h3>
          <h4>
            1000 X {this.state.notes['1000']}
          </h4>
          <h4>
            500 X {this.state.notes['500']}
          </h4>
          <h4>
            200 X {this.state.notes['200']}
          </h4>
          <h4>
            100 X {this.state.notes['100']}
          </h4>
          <h4>
            50 X {this.state.notes['50']}
          </h4>

          <hr/>

          <h3>Coins (>20mm):</h3>

          <h4>
            20 X {this.state.notes['20']}
          </h4>

          <h4>
            5 x {this.state.notes['5']}
          </h4>

          <h4>
            2 x {this.state.notes['2']}
          </h4>

          <hr/>

          <h3>Coins (&lt;=20mm):</h3>

          <h4>
            10 X {this.state.notes['10']}
          </h4>

          <h4>
            1 X {this.state.notes['1']}
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
  notes: PropTypes.string.isRequired,
  clearBox: PropTypes.func.isRequired
};

export default PayoutBox;

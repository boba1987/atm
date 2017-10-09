import React from 'react';
import PropTypes from 'prop-types';

class PayoutBox extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    console.log(this.props);
    return(
      <div>
        hello there
      </div>
    );
  }
}

PayoutBox.propTypes = {
  notes: PropTypes.object.isRequired
};

export default PayoutBox;

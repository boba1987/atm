import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/atmActions';
import AtmForm from '../components/AtmForm';
import PayoutBox from '../components/PayoutBox';

export const AtmPage = (props) => {
  return (
    <div>
      <h1>
        ATM
      </h1>
      <AtmForm
        execPayment={props.actions.atmPayout}/>
      <br/>
      <PayoutBox
        notes={props.payout}/>
    </div>
  );
};

AtmPage.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    payout: state.atmReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AtmPage);

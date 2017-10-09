import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/atmActions';
import AtmForm from '../components/AtmForm';

export const atmPage = () => {
  return (
    <div>
      <h1>
        ATM
      </h1>
      <AtmForm/>
    </div>
  );
};

atmPage.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps() {
  return {

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
)(atmPage);

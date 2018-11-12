import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from 'components/Button/Button';
import placeActions from 'actions/placeActions';
import conditionActions from 'actions/conditionActions';
import Place from 'components/Place/Place';
import Condition from 'components/Condition/Condition';

class HomePage extends Component {
  handleOnClick = () => {
    this.props.fetchPlaces(this.props.condition);
  }
  handleRadiusChange = (radius) => {
    this.props.setRadius(radius);
  }
  onPriceChange = (price) => {
    this.props.setPrice(price);
  }

  render() {
    const { condition, place } = this.props;
    const { latitude, longitude } = condition;
    return (
      <div className="homePageWrapper">
        <Place place={place} />
        <div className="searchWrapper">
          <Condition
            condition={condition}
            onRadiusChange={this.handleRadiusChange}
            onPriceChange={this.onPriceChange}
          />
          <Button
            disabled={!latitude || !longitude}
            onClick={this.handleOnClick}
            theme="homepageClick"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  condition: state.condition,
  place: state.place,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchPlaces: placeActions.fetchPlaces,
    setRadius: conditionActions.setRadius,
    setPrice: conditionActions.setPrice,
  }, dispatch);

HomePage.propTypes = {
  condition: PropTypes.object,
  place: PropTypes.object,
  fetchPlaces: PropTypes.func,
  setRadius: PropTypes.func,
  setPrice: PropTypes.func,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import placeActions from 'actions/placeActions';
import PlaceDetails from 'components/PlaceDetails/PlaceDetails';

class PlaceDetailPage extends Component {
  componentDidMount() {
    const { match: { params } } = this.props;
    this.props.fetchPlaceDetails(params);
  }

  render() {
    const { place } = this.props;
    console.log(place);
    return (
      <div className="homePageWrapper">
        <PlaceDetails place={place} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  place: state.place,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchPlaceDetails: placeActions.fetchPlaceDetails,
  }, dispatch);

PlaceDetailPage.propTypes = {
  match: PropTypes.object,
  place: PropTypes.object,
  fetchPlaceDetails: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlaceDetailPage);

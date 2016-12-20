import React, { Component } from 'react'
import Detail from '../components/Detail'

export default class DetailContainer extends Component {
  render() {
    return (
      <Detail
        weather={this.props.location.state.weather}
        city={this.props.routeParams.city} />
    );
  }
}

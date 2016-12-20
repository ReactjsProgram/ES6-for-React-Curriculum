import React, { Component } from 'react'
import Forecast from '../components/Forecast'
import { getForcast } from '../helpers/api'

export default class ForecastContainer extends Component {
  constructor () {
    super();
    this.state = {
      isLoading: true,
      forecastData: {}
    }
  }
  componentDidMount() {
    this.makeRequest(this.props.routeParams.city)
  }
  componentWillReceiveProps(nextProps) {
    this.makeRequest(nextProps.routeParams.city)
  }
  async makeRequest(city) {
    const forecastData = await getForcast(city);
    this.setState({
      isLoading: false,
      forecastData
    });
  }
  handleClick(weather) {
    this.context.router.push({
      pathname: '/detail/' + this.props.routeParams.city,
      state: {
        weather
      }
    })
  }
  render() {
    return (
      <Forecast
        city={this.props.routeParams.city}
        isLoading={this.state.isLoading}
        handleClick={(weather) => this.handleClick(weather)}
        forecastData={this.state.forecastData} />
    )
  }
}

ForecastContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}
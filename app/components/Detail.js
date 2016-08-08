import React from 'react'
import { convertTemp } from '../helpers/utils'
import DayItem from './DayItem'

const styles = {
  descriptionContainer: {
    fontSize: 34,
    fontWeight: 100,
    maxWidth: 400,
    margin: '0 auto',
    textAlign: 'center',
  }
}

function Detail ({ city, weather }) {
  return (
    <div style={styles.container}>
      <DayItem day={weather} />
      <div style={styles.descriptionContainer}>
        <p>{city}</p>
        <p>{weather.weather[0].description}</p>
        <p>min temp: {convertTemp(weather.temp.min)} degrees</p>
        <p>max temp: {convertTemp(weather.temp.max)} degrees</p>
        <p>humidity: {weather.humidity}</p>
      </div>
    </div>
  )
}

export default Detail;
import React, { PropTypes } from 'react'
import { getDate } from '../helpers/utils'
import DayItem from './DayItem'

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 1200,
    margin: '50px auto'
  },
  subheader: {
    fontSize: 30,
    color: '#333',
    fontWeight: 100
  },
  header: {
    fontSize: 65,
    color: '#333',
    fontWeight: 100,
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 30,
  }
}

function ForecastUI (props) {
  return (
    <div style={{textAlign: 'center'}}>
      <h1 style={styles.header}>{props.city}</h1>
      <p style={styles.subheader}>Select a day</p>
      <div style={styles.container}>
        {props.forecast.list.map((listItem) => {
          return <DayItem key={listItem.dt} day={listItem} handleClick={() => props.handleClick(listItem)} />
        })}
      </div>
    </div>
  )
}

function Forecast ({ city, isLoading, forecastData, handleClick}) {
  return (
      <div>
        {
          isLoading === true
              ? <h1 style={styles.header}> Loading </h1>
              : <ForecastUI
              city={city}
              forecast={forecastData}
              handleClick={handleClick} />
        }
      </div>
  )
}

Forecast.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
}

export default Forecast;
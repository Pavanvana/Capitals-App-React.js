import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    activeStateId: countryAndCapitalsList[0].id,
  }

  onChangeCaptial = event => {
    this.setState({activeStateId: event.target.value})
  }

  getCountry = () => {
    const {activeStateId} = this.state
    const activeCountryDetails = countryAndCapitalsList.find(
      eachCountry => eachCountry.id === activeStateId,
    )
    return activeCountryDetails.country
  }

  render() {
    const {activeStateId} = this.state
    console.log(activeStateId)
    const country = this.getCountry()

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="dropdown-container">
            <select
              className="dropdown"
              value={activeStateId}
              onChange={this.onChangeCaptial}
            >
              {countryAndCapitalsList.map(eachCaptial => (
                <option
                  className="capital-name"
                  key={eachCaptial.id}
                  value={eachCaptial.id}
                >
                  {eachCaptial.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="description">is capital of which country?</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals

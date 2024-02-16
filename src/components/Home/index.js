import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LocationContainer from '../LocationContainer'

import './index.css'

class Home extends Component {
  state = {
    locationList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getLocation()
  }

  getLocation = async () => {
    const apiUrl = 'https://apis.ccbp.in/tg/packages'
    const response = await fetch(apiUrl)
    const data = await response.json()

    if (response.ok === true) {
      const updatedData = data.packages.map(eachItem => ({
        id: eachItem.id,
        name: eachItem.name,
        imageUrl: eachItem.image_url,
        description: eachItem.description,
      }))
      this.setState({locationList: updatedData, isLoading: false})
    }
  }

  renderLocationsListView = () => {
    const {locationList} = this.state

    return (
      <ul className="locations-list">
        {locationList.map(location => (
          <LocationContainer key={location.id} locationDetails={location} />
        ))}
      </ul>
    )
  }

  renderLoaderView = () => (
    <div data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-container">
        <h1 className="travel-heading">Travel Guide</h1>
        <hr className="horizontal-line" />
        <div className="locations-container">
          {isLoading ? this.renderLoaderView() : this.renderLocationsListView()}
        </div>
      </div>
    )
  }
}
export default Home

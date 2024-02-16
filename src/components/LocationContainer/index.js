import './index.css'

const LocationContainer = props => {
  const {locationDetails} = props
  const {name, imageUrl, description} = locationDetails

  return (
    <li className="list-location">
      <div className="location-card-container">
        <img src={imageUrl} alt={name} className="image" />
        <div className="content-div">
          <h1 className="heading">{name}</h1>
          <p className="description">{description}</p>
        </div>
      </div>
    </li>
  )
}
export default LocationContainer

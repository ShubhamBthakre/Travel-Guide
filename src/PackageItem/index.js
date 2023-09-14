import './index.css'

const PackageItem = props => {
  const {packageDetails} = props
  const {imageUrl, name, description} = packageDetails

  return (
    <li className="package-item">
      <img src={imageUrl} alt={name} className="package-thumbnail" />
      <div className="text-container">
        <h1 className="package-name">{name}</h1>
        <p className="description">{description}</p>
      </div>
    </li>
  )
}
export default PackageItem

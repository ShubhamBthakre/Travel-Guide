import './App.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import PackageItem from './PackageItem'

// Replace your code here
class App extends Component {
  state = {packageList: [], isLoading: true}

  componentDidMount() {
    this.getPackagesList()
  }

  getPackagesList = async () => {
    const apiUrl = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()

    const formattedData = data.packages.map(eachPackage => ({
      description: eachPackage.description,
      id: eachPackage.id,
      imageUrl: eachPackage.image_url,
      name: eachPackage.name,
    }))

    console.log(formattedData)

    this.setState({
      packageList: formattedData,
      isLoading: false,
    })
  }

  renderLoaderView = () => (
    <div data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  renderPackagesView = () => {
    const {packageList} = this.state

    return (
      <ul className="package-list">
        {packageList.map(eachPackage => (
          <PackageItem packageDetails={eachPackage} key={eachPackage.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="app-container">
        <h1 className="heading">Travel Guide</h1>
        {isLoading && this.renderLoaderView()}
        {this.renderPackagesView()}
      </div>
    )
  }
}
export default App

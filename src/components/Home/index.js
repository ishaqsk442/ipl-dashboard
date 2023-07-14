// Write your code here

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {iplTeams: [], isLoading: true}

  componentDidMount() {
    this.getTeams()
  }

  getTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data

    const updatedData = teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))

    this.setState({iplTeams: updatedData, isLoading: false})
  }

  render() {
    const {iplTeams, isLoading} = this.state
    console.log(iplTeams[0])
    return (
      <>
        <div className="main-bg">
          {isLoading ? (
            <div testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            <>
              <div className="logo-heading">
                <img
                  className="logo-img"
                  src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                  alt="ipl logo"
                />
                <h1 className="heading">IPL DASHBOARD</h1>
              </div>

              <ul className="ipl-teams-list">
                {iplTeams.map(each => (
                  <TeamCard teamsCard={each} key={each.id} />
                ))}
              </ul>
            </>
          )}
        </div>
      </>
    )
  }
}
export default Home

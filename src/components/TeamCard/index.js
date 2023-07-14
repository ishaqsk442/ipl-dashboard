// Write your code here

import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamsCard} = props

  const {id, name, teamImageUrl} = teamsCard

  return (
    <Link to={`/team-matches/${id}`} className="link">
      <li key={id} className="team-card">
        <img className="team-logo" src={teamImageUrl} alt={`${name}`} />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard

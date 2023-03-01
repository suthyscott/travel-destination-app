import React from 'react'
import './DestinationCard.css'
import { useNavigate } from 'react-router-dom'

const DestinationCard = ({dest}) => {
  const {name, international, imageURL, id} = dest
  const navigate = useNavigate()

 
  return (
    <div className='destination-card'>
      <p>{name}</p>
      <p>International: {international ? 'True': 'False'}</p>
      <img src={imageURL}/>
      <button onClick={() => navigate(`/destinationDetails/${id}`)}>See more details</button>
    </div>
  )
}

export default DestinationCard
import {useEffect, useState} from 'react'
import axios from 'axios'
import DestinationCard from './DestinationCard'
import MainBanner from './MainBanner'

const Home = () => {
  const [destinations, setDestinations] = useState([])

  const getDestinations = () => {
    axios.get('http://localhost:4545/api/destinations')
      .then(res => {
        setDestinations(res.data)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getDestinations()
  }, [])

  const destinationsDisplay = destinations.map(dest => {
      return <DestinationCard dest={dest} key={dest.id}/>
  })

  return (
    <div>
      <MainBanner/>
      {destinationsDisplay}
    </div>
  )
}

export default Home
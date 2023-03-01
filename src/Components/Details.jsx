import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

const Details = () => {
  const {destinationId} = useParams()
  const [destination, setDestination] = useState({})

  const getDestination = () => {
    axios.get(`http://localhost:4545/api/destination/${destinationId}`)
      .then(res => {
        console.log(res.data)
        setDestination(res.data)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getDestination()
  }, [])
 
  console.log(destination)
  return (
    <div>
      <p>{destination.name}</p>
      <p>International: {destination.international ? 'True': 'False'}</p>
      <img src={destination.imageURL}/>
      <p>{destination.notes}</p>
    </div>
  )
}

export default Details
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import "./Details.css"

const Details = () => {
    const { destinationId } = useParams()
    const [destination, setDestination] = useState({})

    const getDestination = () => {
        axios
            .get(`http://localhost:4545/api/destination/${destinationId}`)
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
        <div className="detail-container">
            <div id="detail-banner" style={{
              backgroundImage: `url(${destination.imageURL})`,
              backgroundSize: "cover",
            }}>
                <p>{destination.name}</p>
            </div>
            <section id="detail-info-box">
                <p>
                    International:{destination.international ? "True" : "False"}
                </p>
                <p>{destination.notes}</p>
            </section>
        </div>
    )
}

export default Details

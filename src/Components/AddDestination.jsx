// import {useState} from 'react'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'

// const AddDestination = () => {
//   const navigate = useNavigate()
//   const [name, setName] = useState('')
//   const [notes, setNotes] = useState('')
//   const [international, setInternational] = useState(false)
//   const [imageURL, setImageURL] = useState('')

//   const addDestination = (e) => {
//     e.preventDefault()
//     const body = {
//       name,
//       notes,
//       international,
//       imageURL
//     }
//     console.log(body)
//     axios.post('http://localhost:4545/api/destinations', body)
//       .then(res => {
//         console.log(res.data)
//         navigate(`/destinationDetails/${res.data.id}`)
//       })
//       .catch(err => console.log(err))
//   }

//   console.log(international)
//   return (
//     <div>
//       <form onSubmit={e => addDestination(e)}>
//         <input placeholder='Name' onChange={e => setName(e.target.value)}/>
//         <input placeholder='Paste in an imageURL here' onChange={e => setImageURL(e.target.value)}/>
//         <span>International: <input type='checkbox' value={international} checked={international ? true : false} onChange={() =>         setInternational(!international)}/></span>
//         <textarea placeholder='Enter notes' onChange={e => setNotes(e.target.value)}/>
//         <button>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default AddDestination

import { Formik } from "formik"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const AddDestination = () => {
  const navigate = useNavigate()
    const initialValues = {
        name: "",
        notes: "",
        international: false,
        imageURL: ""
    }

    const onSubmit = values => {
        console.log(values)
        axios
            .post("http://localhost:4545/api/destinations", values)
            .then(res => {
                console.log(res.data)
                navigate(`/destinationDetails/${res.data.id}`)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {({ values, handleChange, handleSubmit }) => {
                  // const { values, handleChange, handleSubmit } = tools
                    return (
                        <form onSubmit={handleSubmit}>
                            <input
                                placeholder="name"
                                value={values.name}
                                onChange={handleChange}
                                name="name"
                            />
                            <input
                                placeholder="Paste in an image url!"
                                value={values.imageURL}
                                onChange={handleChange}
                                name="imageURL"
                            />
                            <textarea
                                placeholder="Take some notes!"
                                value={values.notes}
                                onChange={handleChange}
                                name="notes"
                            />
                            <input
                                type="checkbox"
                                value={values.international}
                                onChange={handleChange}
                                name="international"
                            />
                            <button>Submit</button>
                        </form>
                    )
                }}
            </Formik>
        </div>
    )
}

export default AddDestination

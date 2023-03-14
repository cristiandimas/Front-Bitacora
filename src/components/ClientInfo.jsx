import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Lives from './Lives'



const ClientInfo = () => {

  const {id} = useParams()
  const [client, setClient] = useState()

  useEffect(() => {
    const URL = `https://bitacora-production.up.railway.app/api/clientes/${id}`
    axios.get(URL)
    .then((res) => {setClient(res.data)
      
    }).catch((err) => { console.log(err);
      
    })
  }, [id])
  


  return (
    <>
    <h1>{client?.nombre}</h1>
    <Lives client={client}/>
    
    </>
  )
}

export default ClientInfo
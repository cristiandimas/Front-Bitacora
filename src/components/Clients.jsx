import axios from 'axios'
import React, { useEffect, useState } from 'react'


import ClientCard from './ClientCard'


const Clients = ({}) => {

  const [clients, setClients] = useState()

  const [clientSelected, setClientSelected] = useState()

 

  useEffect(() => {
  
    const URL = 'https://bitacora-production.up.railway.app/api/clientes'
       
    axios.get(URL)
      .then((res) => {
        setClients(res.data)
      }).catch((err) => {
        console.log(err)
      });
  }, [clientSelected])
 

  const handleChange = e =>{    
    setClientSelected(e.target.value)  
      console.log(clientSelected);
  }


  return (
    <div>
      <select onChange={handleChange}>
        <option value=""></option>
        {
         clients?.map(client => (
          <option  key={client.id} value={client.nombre}>{client.nombre}</option>
         ))
        }
      </select>
      {/* <div>
        {clientSelected}
      </div> */}
    <div className='client__container'>
    {
      clients?.map(client => (
        <ClientCard key={client.id} client={client} />
        ))
      }
     
     </div>
      </div>
  )
}

export default Clients
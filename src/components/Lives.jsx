import axios from 'axios'
import React, { useEffect, useState } from 'react'
import FormReport from './FormReport'
import LiveCard from './LiveCard'

const Lives = ({ client }) => {
  const [lives, setLives] = useState()
  const [reportLive, setReportLive] = useState()
  const [closeForm, setCloseForm] = useState(true)

  useEffect(() => {
    const URL = `https://platform.mediastre.am/api/live-stream?token=${client?.tk}`
    axios.get(URL)
      .then((res) => setLives(res.data.data))
      .catch((err) => console.log(err));
  }, [client])


 



  return (
    <div className='lives'>
      <div className={`form__container ${closeForm && 'close__form'} `}>
      <FormReport
        reportLive= {reportLive}
        setReportLive= {setReportLive}
        client={client}
        setCloseForm={setCloseForm}
      />
      </div>
      <div className='lives__container'>
        {
          lives?.map(live => (

            <LiveCard key={live.id} 
            live= {live}
            client={client}
            setReportLive={setReportLive}
            setCloseForm={setCloseForm}
              
            />
          ))
        }
      </div>
    </div>
  )
}

export default Lives
import React from 'react'

const LiveCard = ({live, client, setReportLive, setCloseForm}) => {

  const reportsLive = () => {
    setReportLive(live)
    setCloseForm(false)
    
  }
  
  return (
    <article className={`card__lives ${live.monitor.status?.toLowerCase()}`}>
      
      <div>{live.name}</div>
      <div >{live.monitor.status?.toLowerCase()}</div>
      <footer className='card__footer'>
        
        <button onClick={reportsLive}>Enviar Reporte</button>
      </footer>
      
    </article>
  )
}

export default LiveCard
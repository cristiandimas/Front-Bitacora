
import { useNavigate } from 'react-router-dom'


const ClientCard = ({ client }) => {

  const navigate = useNavigate()


  const handleClick = () => {
    navigate(`/clientes/${client.id}`)
  }
  return (
    <article onClick={handleClick}>
      <div>{client.nombre}</div>
      
      
    </article>
  )
}

export default ClientCard
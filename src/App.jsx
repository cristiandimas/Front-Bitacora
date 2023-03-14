
import { Link, Route, Routes } from 'react-router-dom'


import './App.css'
import ClientInfo from './components/ClientInfo'
import Clients from './components/Clients'


function App() {



  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><Link to='/clientes'>Home</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Clients />} />
        <Route path='/clientes' element={<Clients />} />
        <Route path='/clientes/:id' element={<ClientInfo />} />
      </Routes>



    </div>
  )
}

export default App


import { Route, Routes } from 'react-router-dom'


import './App.css'
import ClientInfo from './components/ClientInfo'
import Clients from './components/Clients'
import FormReport from './components/FormReport'

function App() {



  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Clients />} />
        <Route path='/clientes' element={<Clients />} />
        <Route path='/clientes/:id' element={<ClientInfo />} />
      </Routes>

      

    </div>
  )
}

export default App

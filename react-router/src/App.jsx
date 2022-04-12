
import logo from './logo.svg'
import './App.css'
import Header from './Header'
import Produtos from './Produtos'
import Contato from './Contato'
import Footer from './Footer'


import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Produto from './Produto'

function App() {
 

  return (
    <div className="App mt-5">
      <BrowserRouter>
    <Header/>    
    <Routes>
      <Route path="/" element={<Produtos/>} />
      <Route path="contato" element={<Contato/>} />
      <Route path="produto/:id/" element={<Produto/>} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </div>
    
  )
}

export default App

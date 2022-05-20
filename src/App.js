import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from './componentes/pages/Home'
import Contato from './componentes/pages/Contato'
import Company from './componentes/pages/Company'
import NewProject from './componentes/pages/NewProject'
import Container from './componentes/layout/Container';
import Footer from './componentes/layout/Footer'
import Navbar from './componentes/layout/Navbar';
import Projects from './componentes/pages/Projects';
import Project from './componentes/pages/Project';

function App() {
  return (
    <Router>
      <Navbar/>
      <Container customClass="min-height">
        <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/contato" element={<Contato/>} />
         <Route path="/company" element={<Company/>} />
         <Route path="/projects" element={<Projects/>} />
         <Route path="/newproject" element={<NewProject/>} />
         <Route path="/project/:id" element={<Project/>} />
        </Routes>
      </Container>
      <Footer/>
    </Router>
  )
}

export default App;

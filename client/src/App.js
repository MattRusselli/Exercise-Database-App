import './styles/App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import Nav from './components/Nav'
import Home from './components/Home'
import ExerciseDetail from './pages/ExerciseDetail'
import ExercisePage from './pages/ExercisePage'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <div>
        <Nav />
      </div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise" element={<ExercisePage />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App

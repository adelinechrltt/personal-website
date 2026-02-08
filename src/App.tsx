import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import LandingPage from './pages/LandingPage/LandingPage'
import Layout from './BaseLayout'
import AboutMe from './pages/AboutMe/AboutMe'
import ProjectsList from './pages/ProjectsList/ProjectsList'
import ProjectEntry from './pages/ProjectEntry/ProjectEntry'
import ScrollToTop from './components/ScrollToTop'

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects" element={<ProjectsList />} />
          <Route path="/projects/:slug" element={<ProjectEntry />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

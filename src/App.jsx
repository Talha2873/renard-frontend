import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ChatBot from './components/Chatbot'
import CursorFollower from './components/CursorFollower'
import LoadingScreen from './components/LoadingScreen'
import HomePage from './pages/HomePage'
import EmployersPage from './pages/EmployersPage'
import CandidatesPage from './pages/CandidatesPage'
import OurTeamPage from './pages/OurTeamPage'
import ContactPage from './pages/ContactPage'
import RequestEmployeePage from './pages/RequestEmployeePage'
import ValueAddedServicesPage from './pages/ValueAddedServicesPage'
import NotFoundPage from './pages/NotFoundPage'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <div key={location.pathname} className="page-transition">
      <Routes location={location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/employers" element={<EmployersPage />} />
        <Route path="/candidates" element={<CandidatesPage />} />
        <Route path="/our-team" element={<OurTeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/request-employee" element={<RequestEmployeePage />} />
        <Route path="/value-added-services" element={<ValueAddedServicesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <LoadingScreen />
      <ScrollToTop />
      <Navbar />
      <AnimatedRoutes />
      <Footer />
      <ChatBot />
      <CursorFollower />
    </BrowserRouter>
  )
}
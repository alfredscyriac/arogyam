import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import backgroundpic from './assets/arogyambg.jpg' 
import Navbar from './components/Navbar.jsx'
import LandingPage from './pages/LandingPage'
import Footer from './components/Footer.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy'
import ScrollToTop from './components/ScrollToTop'


function App() {
  return (
    <Router>
      <ScrollToTop/>
      <div className='font-inter min-h-screen w-full bg-cover bg-center bg-fixed bg-no-repeat absolute top-0 left-0' style={{backgroundImage: `url(${backgroundpic})`, filter: 'brightness(0.9)'}}>
        <Navbar/>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App

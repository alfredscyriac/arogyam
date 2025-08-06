import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import backgroundpic from './assets/arogyambg.jpg' 
import Navbar from './components/Navbar.jsx'
import LandingPage from './pages/LandingPage'
import Footer from './components/Footer.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy'
import SignIn from './pages/SignIn'
import ScrollToTop from './components/ScrollToTop'


function AppContent() {
  const location = useLocation()
  const isAuthPage = location.pathname === '/signin' || location.pathname === '/signup'
  return (
    <div className='font-inter min-h-screen w-full bg-cover bg-center bg-fixed bg-no-repeat absolute top-0 left-0' style={{backgroundImage: `url(${backgroundpic})`, filter: 'brightness(0.9)'}}>
      {!isAuthPage && <Navbar/>}
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/privacypolicy' element={<PrivacyPolicy />} />
      </Routes>
      {!isAuthPage && <Footer/>}
    </div>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <AppContent/>
    </Router>

  )
}

export default App

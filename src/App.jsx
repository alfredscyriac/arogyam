import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import backgroundpic from './assets/arogyambg.jpg' 
import Navbar from './components/Navbar.jsx'
import LandingPage from './pages/LandingPage'
import Footer from './components/Footer.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ScrollToTop from './components/ScrollToTop'
import EmailVerificationPage from './pages/EmailVerificationPage'


function AppContent() {
  const location = useLocation()
  const isAuthPage = location.pathname === '/signin' || location.pathname === '/signup' || location.pathname === '/verifyemail'
  return (
    <div className='font-inter min-h-screen w-full bg-cover bg-center bg-fixed bg-no-repeat absolute top-0 left-0' style={{backgroundImage: `url(${backgroundpic})`, filter: 'brightness(0.9)'}}>
      {!isAuthPage && <Navbar/>}
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/verifyemail' element={<EmailVerificationPage/>} />
        <Route path='/privacypolicy' element={<PrivacyPolicy />} />
        <Route path='/termsofservice' element={<TermsOfService/>} />
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

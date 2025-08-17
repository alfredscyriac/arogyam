import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom'

import backgroundpic from './assets/arogyambg.jpg' 
import Navbar from './components/Navbar.jsx'
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard'
import Footer from './components/Footer.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import ProvideFeedback from './pages/ProvideFeedback'
import CreateTicket from './pages/CreateTicket'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ScrollToTop from './components/ScrollToTop'
import EmailVerificationPage from './pages/EmailVerificationPage'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import LoadingSpinner from './components/LoadingSpinner'

import { Toaster } from 'react-hot-toast'
import { useAuthStore } from './store/authStore'
import { useEffect } from 'react'

// protect routes that require authentication
const ProtectedRoute = ({children}) => {
  const { isAuthenticated, user } = useAuthStore(); 

  if(!isAuthenticated) {
    return <Navigate to='/signin' replace/>; 
  }

  if(!user.isVerified) {
    return <Navigate to='/verifyemail' replace/>;
  }

  return children; 
}

// redirect authenticated users away from the authentications pages to the home screen
const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore(); 

  if(isAuthenticated && user.isVerified) {
    return <Navigate to='/' replace/>
  }

  return children; 
}


function AppContent() {
  const location = useLocation()
  const isAuthPage = location.pathname === '/signin' || location.pathname === '/signup' || location.pathname === '/verifyemail' || location.pathname === '/forgotpassword' || location.pathname.startsWith('/resetpassword')
  
  const { isCheckingAuth, checkAuth, isAuthenticated, user } = useAuthStore(); 

  useEffect(() => {
    checkAuth()
  },[checkAuth]); 

  if(isCheckingAuth) return <LoadingSpinner/>

  return (
    <div className='font-inter min-h-screen w-full bg-cover bg-center bg-fixed bg-no-repeat absolute top-0 left-0' style={{backgroundImage: `url(${backgroundpic})`, filter: 'brightness(0.9)'}}>
      {!isAuthPage && <Navbar/>}
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route 
          path='/dashboard' 
          element={
            <ProtectedRoute>
              <Dashboard/>
            </ProtectedRoute>
          }
        />;
        <Route 
          path='/signin' 
          element={
            <RedirectAuthenticatedUser>
              <SignIn/>
            </RedirectAuthenticatedUser>
          }
        />
        <Route 
          path='/signup' 
          element={
            <RedirectAuthenticatedUser>
              <SignUp/>
            </RedirectAuthenticatedUser>
          }
        />
        <Route path='/verifyemail' element={<EmailVerificationPage/>} />
        <Route 
          path='/forgotpassword' 
          element={
            <RedirectAuthenticatedUser>
              <ForgotPassword/>
            </RedirectAuthenticatedUser>
          }
        />
        <Route 
          path='/resetpassword/:token'
          element={
            <RedirectAuthenticatedUser>
              <ResetPassword/>
            </RedirectAuthenticatedUser>
          }
        />
        <Route path='/privacypolicy' element={<PrivacyPolicy />} />
        <Route path='/termsofservice' element={<TermsOfService/>} />
        <Route path='/providefeedback' element={<ProvideFeedback/>} />
        <Route path='/createticket' element={<CreateTicket/>} />
      </Routes>
      <Toaster/>
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

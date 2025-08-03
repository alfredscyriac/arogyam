import './App.css'
import backgroundpic from './assets/arogyambg.jpg' 
import Navbar from './components/Navbar.jsx'
import LandingPage from './pages/LandingPage'
import Footer from './components/Footer.jsx'


function App() {
  return (
    <>
      <div className='font-inter min-h-screen w-full bg-cover bg-center bg-fixed bg-no-repeat absolute top-0 left-0' style={{backgroundImage: `url(${backgroundpic})`, filter: 'brightness(0.9)'}}>
        <Navbar/>
        <LandingPage/>
        <Footer/>
      </div>
    </>
  )
}

export default App

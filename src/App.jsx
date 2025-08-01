import './App.css'
import backgroundpic from './assets/arogyambg.jpg' 
import Navbar from './components/Navbar.jsx'
import LandingPage from './pages/LandingPage'


function App() {
  return (
    <>
      <div className='font-inter min-h-screen bg-cover bg-center bg-no-repeat absolute top-0 left-0 w-full' style={{backgroundImage: `url(${backgroundpic})`, filter: 'brightness(0.9)'}}>
        <Navbar/>
        <LandingPage/>
      </div>
    </>
  )
}

export default App

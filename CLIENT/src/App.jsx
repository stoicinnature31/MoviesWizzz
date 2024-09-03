import './App.css'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen.jsx'
import AboutUs from './Screens/AboutUs.jsx'
import NotFound from './Screens/NotFound.jsx'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </>
  )
}

export default App

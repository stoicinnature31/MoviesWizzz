import './App.css'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen.jsx'
import AboutUs from './Screens/AboutUs.jsx'
import ContactUs from './Screens/ContactUs.jsx'
import NotFound from './Screens/Notfound/NotFound.jsx'
import Movies from './Screens/Movies.jsx'
import SingleMovie from './Screens/SingleMovie.jsx'
import WatchPage from './Screens/WatchPage.jsx'
import Login from './Screens/Authentication/Login.jsx'
import Register from './Screens/Authentication/Register.jsx'
import Profile from './Screens/Dashboard/Profile.jsx'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:id' element={<SingleMovie />} />
        <Route path='/watch/:id' element={<WatchPage />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/profile' element={<Profile />} />


        <Route path='*' element={<NotFound />} />
      </Routes>

    </>
  )
}

export default App

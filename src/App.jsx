import { Route, Routes } from 'react-router-dom'
import './App.css'
import Banner from './assets/components/Banner'
import FormContact from './assets/components/FormContact'
import Nav from './assets/components/Nav'
import img1 from './assets/images/desktop/img1.jpg'
import img2 from './assets/images/desktop/img2.jpg'
import img3 from './assets/images/desktop/img3.jpg'
import img2M from './assets/images/mobile/img2M.jpg'
import img1M from './assets/images/mobile/img1.jpg'
import img3M from './assets/images/mobile/img3M.jpg'
import GalleryProducts from './assets/components/GalleryProducts'
import Login from './assets/components/Login'
import Register from './assets/components/Register'
function App() {

  const desktop = [
    {
     src: img1,
     description: 'Preparate para unirte al mundo gamer' 
    },
    {
      src: img2,
      description: 'Los mejores productos del mercado' 
     },
     {
      src: img3,
      description: 'Vive el mundo gamer' 
     },]
  const mobile = [
    {
      
     src:  img1M,
     description: 'Preparate para unirte al mundo gamer' 
    },
    {
      src: img2M,
      description: 'Los mejores productos del mercado'
    },
    {
      src: img3M,
      description: 'Vive el mundo gamer' 
     },]
  return (
    <div className='flex-column justify-content-center main'>
      <Nav/>
      <Routes>
        <Route path='/' element={
          <Banner desktopImages={desktop} mobileImages={mobile}/>
        }/>
        <Route path='/productos' element={
          <GalleryProducts />
        }/>
        <Route path='/contacto' element={
          <FormContact />
        }/>
        <Route path='/login' element={
          <Login/>
        }/>
        <Route path='/register' element={
          <Register />
        } />
      </Routes>
      
    </div>
  )
}

export default App

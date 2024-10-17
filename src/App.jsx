import { Route, Routes } from 'react-router-dom'
import './App.css'
import Banner from './assets/components/Banner'
import FormContact from './assets/components/FormContact'
import Nav from './assets/components/Nav'
import img1 from './assets/images/desktop/img1.jpg'
import img1M from './assets/images/mobile/img1.jpg'
import GalleryProducts from './assets/components/GalleryProducts'
function App() {

  const desktop = [
    {
     src: img1,
     description: 'Preparate para unirte al mundo gamer' 
    },
  ]
  const mobile = [
    {
      
     src:  img1M,
     description: 'Preparate para unirte al mundo gamer' 
    }]
  return (
    <div className='flex-column justify-content-center'>
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
      </Routes>
      
    </div>
  )
}

export default App

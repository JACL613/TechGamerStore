import { useState } from 'react'
import './App.css'
import Banner from './assets/components/Banner'
import Nav from './assets/components/Nav'
import NavTabs from './assets/components/NavTabs'
import Card from './assets/components/Card'
import { data } from './assets/utils/data'
import FormContact from './assets/components/FormContact'

function App() {
  const [value, setValue]  = useState(data.portatiles)
  return (
    <div className='flex-column justify-content-center'>
      <Nav/>
      <Banner />
      <section className="container py-5">
      <h2 className="text-center mb-5">Nuestros Productos</h2>
      <NavTabs setTab={e => setValue(e)}/>
      <div className='gallery'>
    {
      value.map(data => <Card key={data.alt} url={data.image} title={data.title} text={data.description}/>)
    }
      </div>
   
      </section>
      <section className="container py-5 d-flex justify-content-center">
      <FormContact/>
      </section>
    </div>
  )
}

export default App

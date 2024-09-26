import { useState } from 'react'
import './App.css'
import Banner from './assets/components/Banner'
import Nav from './assets/components/Nav'
import NavTabs from './assets/components/NavTabs'
import Card from './assets/components/Card'

function App() {
  const [value, setValue]  = useState([])
  return (
    <body className=' flex-column'>
      <Nav/>
      <Banner />
      <section className="container py-5">
      <h2 className="text-center mb-5">Nuestros Productos</h2>
      <NavTabs setTab={e => setValue(e)}/>
    {
      value.map(data => <Card key={data.alt} url={data.image} title={data.title} text={data.description}/>)
    }
   
      </section>
    </body>
  )
}

export default App

import { useState } from 'react'
import NavTabs from './NavTabs'
import { data } from '../utils/data'
import Card from './Card'

export default function GalleryProducts() {
  const [value, setValue]  = useState(data.portatiles)

  return (
    <div>
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
      </section>
    </div>
  )
}

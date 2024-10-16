import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import '../animations/style.css'
export default function Nav() {
  return (
    <nav className=" container-fluid navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
        <a className="navbar-brand" href="#"><h1 className="title">Tech Gamer Store
        <div className="aurora">
      <div className="aurora__item"></div>
      <div className="aurora__item"></div>
      <div className="aurora__item"></div>
      <div className="aurora__item"></div>
    </div></h1></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                <div  className='text-white icon' data-count={3}>
                    <ShoppingCartIcon/>
                    </div>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Productos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contacto</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
  )
}

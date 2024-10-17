import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import '../animations/style.css'
import { Link } from 'react-router-dom'
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
            <div className="d-flex align-items-center pe-2">
              <div className="position-relative">
                <ShoppingCartIcon className="text-white" style={{ width: '24px', height: '24px' }} />
                <span className="position-absolute top-0 start-100  translate-middle badge rounded-pill bg-danger">
                  {0}
                  <span className="visually-hidden">items en el carrito</span>
                </span>
              </div>
          </div>
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>

                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/productos">Productos</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/contacto' >Contacto</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>
  )
}

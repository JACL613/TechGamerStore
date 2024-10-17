import { Link } from 'react-router-dom'
import '../styles/Forms.style.css'
import { ArrowDownCircleIcon } from '@heroicons/react/24/outline'
export default function Login() {
  return (
    <div>
       <section>
        <h2>Login</h2>
        <form id="loginForm">
            <label>Mail</label>
            <input type="email" placeholder="..." id="email" required autoFocus />
            <label>Contraseña</label>
            <input type="password" placeholder="..." id="password" required />
            <input type="submit" value="Ingresar" />
        </form>
        <p>¿No tienes una cuenta? <Link to='/register'>¡Regístrate!</Link></p>
        <ul>
            <li><ArrowDownCircleIcon/></li>
            <li></li>
            <li></li>
        </ul>
     </section>
    </div>
  )
}

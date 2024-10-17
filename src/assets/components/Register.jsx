import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div>
      <section>
        <h2>Registro</h2>
        <form id="signupForm">
            <label>Nombre</label>
            <input type="text" placeholder="..." id="name" required autoFocus />
            <label>Mail</label>
            <input type="email" placeholder="..." id="email" required />
            <label>Contraseña</label>
            <input type="password" placeholder="..." id="password" required />
            <input type="submit" value="Registro"/>
        </form>
        <p>Ya tienes una cuenta? <Link to='/login'>Login</Link></p>
    </section>
    </div>
  )
}

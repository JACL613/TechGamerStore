
export default function Banner() {
  return (
    <section style={{height:'100vh', minHeight: '25rem'}} className="position-relative w-100 bg-dark text-light text-center overflow-hidden">
      <div className="position-relative opacity-50 z-1 top-0 left-0 h-100 w-100 bg-black"></div>
      <div style={{transform: 'translateX(-50%)translateY(-50%)', left: '50%'}} className="position-absolute top-50 flex-grow-0 mh-100 w-100 z-0 ">

        <img className="mw-100 " style={{
          filter: 'grayscale(0%) sepia(100%) saturate(200%)hue-rotate(190deg)'
        }}  src="https://zeniaboulevard.es/img_v2/directorio/locales/tienda-1-389.jpg" width='auto'/>
        </div>
        <div style={{top: '-50%', left: '50%', transform: 'translateY(-50%) translateX(-50%)'}} className="position-relative z-2">
            <h1>¡Bienvenido a la mejor Tienda Gamer!</h1>
            <p className="lead">Encuentra los últimos juegos, hardware y accesorios.</p>
            <a href="#" className="btn btn-primary btn-lg">Ver Productos</a>
        </div>
        
    </section>    
  )
}

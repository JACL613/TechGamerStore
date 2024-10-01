
// eslint-disable-next-line react/prop-types
export default function Card({url, title , text}) {
  return (
    <div className="col-lg-4 col-md-6">
            <div className="Card-container">
                <img src={url} className="card-img-top" alt="Teclado Gamer 2" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                    <button href="#" className="btn btn-dark">Comprar</button>
                </div>
            </div>
    </div>
  )
}

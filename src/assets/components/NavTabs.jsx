/* eslint-disable react/prop-types */
import { data } from "../utils/data";

export default function NavTabs({setTab}) {
    const productos = Object.entries(data);

// Mapear el array
  return (
        <ul className="nav nav-tabs" id="myTab" role="tablist">
            {
                productos.map(([clave, valor]) => (
                    <li key={clave} className="nav-item" role="presentation">
                <button onClick={() => setTab(valor)} className="nav-link active" id="portatiles-tab" data-bs-toggle="tab" data-bs-target="#portatiles" type="button" role="tab" aria-controls="portatiles" aria-selected="true">{clave}</button>
            </li>
                ))
            }
            {/* <li className="nav-item" role="presentation">
                <button className="nav-link" id="torres-tab" data-bs-toggle="tab" data-bs-target="#torres" type="button" role="tab" aria-controls="torres" aria-selected="false">Torres Gamer</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="sillas-tab" data-bs-toggle="tab" data-bs-target="#sillas" type="button" role="tab" aria-controls="sillas" aria-selected="false">Sillas</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="escritorios-tab" data-bs-toggle="tab" data-bs-target="#escritorios" type="button" role="tab" aria-controls="escritorios" aria-selected="false">Escritorios</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="mouses-tab" data-bs-toggle="tab" data-bs-target="#mouses" type="button" role="tab" aria-controls="mouses" aria-selected="false">Mouses</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="diademas-tab" data-bs-toggle="tab" data-bs-target="#diademas" type="button" role="tab" aria-controls="diademas" aria-selected="false">Diademas</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="pantallas-tab" data-bs-toggle="tab" data-bs-target="#pantallas" type="button" role="tab" aria-controls="pantallas" aria-selected="false">Pantallas</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="teclados-tab" data-bs-toggle="tab" data-bs-target="#teclados" type="button" role="tab" aria-controls="teclados" aria-selected="false">Teclados</button>
            </li> */}
        </ul>
  )
}

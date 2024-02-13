import { Link } from "@remix-run/react";

function Guitar({ guitar }) {
    const { descripcion, imagen, precio, url, nombre } = guitar;

    return (
        <div className="guitarra">
            <img src={imagen.data.attributes.formats.medium.url} alt={`Imagen guitarra ${nombre}`} />
            <div className="contenido">
                <h3>{nombre}</h3>
                <p className="descripcion">{descripcion[0].children[0].text}</p>
                <p className="precio">${precio}</p>

                <Link className="enlace" to={`/guitarras/${url}`}>Ver Producto</Link>
            </div>
        </div>
    )
}

export default Guitar
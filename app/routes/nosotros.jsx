import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta() {
    return [{
        title: 'GuitarLA - Sobre Nosotros',
        description: 'Venta de guitarras, blog de musica y mas'
    }
    ]
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        },
        {
            rel: 'preload',
            href: imagen,
            as: 'image'
        }
    ]
}

function Nosotros() {
    return (
        <main className="contenedor nosotros">
            <h2 className="heading">Nosotros</h2>

            <div className="contenido">
                <img src={imagen} alt="Imagen sobre nosotros" />
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae ipsum error inventore asperiores vero maiores sit, temporibus facilis consectetur voluptate, eligendi, minima quam labore in accusantium excepturi vitae? Nostrum, molestias!</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae ipsum error inventore asperiores vero maiores sit, temporibus facilis consectetur voluptate, eligendi, minima quam labore in accusantium excepturi vitae? Nostrum, molestias!</p>
                </div>
            </div>
        </main>
    )
}

export default Nosotros
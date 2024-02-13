import { useLoaderData } from "@remix-run/react";
import { getGuitars } from "../models/guitars.server";
import Guitar from "../components/guitar";
import styles from '../styles/guitars.css'

export function meta() {
    return [
        {
            title: 'GuitarLA - Tienda de Guitarras'
        },
        {
            description: 'GuitarLA - Nuestra coleccion de guitarras'
        }
    ]
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

export async function loader() {

    const results = await getGuitars();

    return results;
}

function Tienda() {

    const guitars = useLoaderData();

    return (
        <main className="contenedor">
            <h2 className="heading">Nuestra Coleccion</h2>
            {guitars.length && (
                <div className="guitarras-grid">
                    {guitars.map(guitar => (
                        <Guitar
                            guitar={guitar?.attributes}
                            key={guitar?.id}
                        ></Guitar>
                    ))}
                </div>
            )}
        </main>
    )
}

export default Tienda
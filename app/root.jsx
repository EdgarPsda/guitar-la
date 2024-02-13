
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts
} from '@remix-run/react'
import styles from '~/styles/index.css'
import Header from '~/components/header'
import Footer from '~/components/footer'

export function meta() {
    return ([
        {
            charset: 'utf-8'
        },
        {
            title: 'Guitar-LA'
        },
        {
            viewport: "width=device-width,initial-scale=1"
        }
    ])
}


export function links() {
    return [
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossOrigin: "true"
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;700;900&display=swap'
        },
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

export default function App() {
    return (
        <Document>
            <Outlet></Outlet>
        </Document>
    )
}

function Document({ children }) {
    return (
        <html lang="es">
            <head>
                <Meta></Meta>
                <Links></Links>
            </head>
            <body>
                <Header></Header>
                {children}
                <Footer></Footer>
                <Scripts></Scripts>
                <LiveReload></LiveReload>
            </body>
        </html>
    )
}
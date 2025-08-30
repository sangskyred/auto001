
import Head from "next/head";
import '../styles/globals.css'
const Layout = ({ children }) => {
    return (
        <html>
            <Head>

            </Head>
            <header>

            </header>
            <main>
                {children}
            </main>
            <footer>

            </footer>
        </html>
    )
}

export default Layout;
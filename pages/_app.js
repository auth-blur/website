/* eslint-disable react/prop-types */
import Head from "next/head"
import "@styles/tailwind.css"
import "@styles/app.css"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"

const MyApp = ({ Component, pageProps }) => (
    <>
        <Head>
            <title>Picassco</title>
            <meta name="author" content="Ali Furkan, alifurkan@picass.co" />
            <meta
                name="description"
                content="Let's create your peerless profile!"
            />
            <meta name="og:title" content="Picassco" />
            <meta name="og:site_name" content="Picassco" title="title" />
            <meta name="og:url" content="https://picass.co" />
            <meta name="theme-color" content="#F15137" />
            <meta
                name="keywords"
                content="Picassco, Profile, Avatar, Picasso, Avatar Profile, Picassco Avatar, Picassco Profile"
            />
            <meta name="og:image" content="/assets/banner-wave.png" />
            <meta
                name="twitter:image"
                content="/assets/brand/picassco-artwork.png"
            />
        </Head>
        <Component {...pageProps} />
        <ToastContainer
           position="bottom-right"
           toastClassName="toast"
        />
    </>
)

export default MyApp

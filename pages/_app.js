import Head from "next/head";
import "@styles/tailwind.css";

const MyApp = ({ Component, pageProps }) => (
    <>
        <Head>
            <title>Picassco</title>
        </Head>
        <Component {...pageProps} />
    </>
);

export default MyApp;

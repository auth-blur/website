import Navbar from "@components/nav-bar"
import style from "./layout.module.css"

const SingleLayout = (Page) => {
    const PageLayout = () => (
        <>
            <header className={style.header}>
                <Navbar
                    links={{
                        Twitter: "https://twitter.com/picass_co",
                        Github: "https://github.com/picass-co",
                    }}
                />
            </header>
            <main className={style.main}>
                <Page />
            </main>
        </>
    )
    return PageLayout
}

export default SingleLayout

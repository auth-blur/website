import PropTypes from "prop-types"
import style from "./style.module.css"
import Link from "next/link"
import { useRouter } from "next/router"

const Navbar = ({ links }) => (
    <>
        <nav className={["container", style.navbar].join(" ")}>
            <Link href="/">
                <a className={style.logos}>
                    <img
                        width="192px"
                        src="/assets/brand/word-mark-color-black.png"
                    />
                </a>
            </Link>
            <div className={style.list}>
                <ul className={style.links}>
                    {Object.entries(links).map(([key, data], i) => (
                        <NavLink
                            label={data.text ?? key}
                            href={data.href ?? data}
                            {...(data.props ?? null)}
                            key={i}
                        />
                    ))}
                </ul>
            </div>
        </nav>
    </>
)

const NavLink = ({ href, label }) => {
    const router = useRouter()
    return (
        <li
            className={style.link}
            role="link"
            tabIndex="0"
            onClick={() => router.push(href)}
        >
            <a tabIndex="-1" href={href}>
                {label}
            </a>
        </li>
    )
}

Navbar.defaultProps = {
    links: [],
}

Navbar.propTypes = {
    links: PropTypes.objectOf(
        PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    ).isRequired,
}

NavLink.propTypes = {
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
}

export default Navbar

import NextLink from "next/link"
import PropTypes from "prop-types"
import style from "./style.module.css"

const Link = ({ href, as, label, tabIndex, ...props }) => (
    <NextLink href={href} as={as}>
        <a className={style.link} tabIndex={tabIndex} {...props}>
            {label}
        </a>
    </NextLink>
)

Link.defaultProps = {
    tabIndex: "1",
    as: null,
}

Link.propTypes = {
    href: PropTypes.string,
    as: PropTypes.string,
    label: PropTypes.string,
    tabIndex: PropTypes.string,
}

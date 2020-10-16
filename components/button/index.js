import PropTypes from "prop-types"
import style from "./style.module.css"

const Button = ({ label, textColor, bgColor, Component, ...p }) => {
    const props = {
        className: [
            style.button,
            `bg-${bgColor ?? "primary-400"}`,
            `text-${textColor ?? "white"}`,
        ].join(" "),
        children: label,
        ...p,
    }
    if (Component) {
        return <Component {...props} />
    }
    return <a {...props} />
}

Button.propTypes = {
    label: PropTypes.string,
    textColor: PropTypes.string,
    bgColor: PropTypes.string,
    Component: PropTypes.any,
}

export default Button

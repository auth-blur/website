import PropTypes from "prop-types"
import style from "./style.module.css"

const Button = ({ label, textColor, bgColor, size, Component, ...p }) => {
    if (process.env.NODE_ENV === "storybook") import("react")
    const props = {
        className: [
            style.button,
            `bg-${bgColor}`,
            `text-${textColor}`,
            `text-${size}`,
        ].join(" "),
        children: label,
        ...p,
    }
    if (Component) {
        return <Component {...props} />
    }
    return <a {...props} />
}

Button.defaultProps = {
    bgColor: "primary-400",
    textColor: "white",
    size: "lg",
}

Button.propTypes = {
    label: PropTypes.string,
    textColor: PropTypes.string,
    bgColor: PropTypes.string,
    Component: PropTypes.any,
    size: PropTypes.string,
}

export default Button

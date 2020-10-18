import PropTypes from "prop-types"
import style from "./style.module.css"

const Input = ({
    isPassword,
    label,
    value,
    placeholder,
    onChange,
    bgColor,
    textColor,
    children,
    ...props
}) => {
    let open, setOpen
    if (isPassword) {
        import("react").then(
            ({ useState }) => ([open, setOpen] = useState(isPassword)),
        )
    }
    return (
        <div className={style.block} {...props}>
            <label className={style.label} htmlFor={label ?? placeholder}>
                <p>{label ?? null}</p>
            </label>
            <div className={[style.wrapper, `bg-${bgColor}`].join(" ")}>
                {/* Icon will be here */}
                <input
                    className={`text-${textColor}`}
                    onChange={onChange}
                    placeholder={placeholder}
                    value={value}
                    spellCheck="false"
                    id={[label, Math.floor(Math.random() * 899 + 100)].join(
                        "_",
                    )}
                    type={open ? "password" : "text"}
                />
                {children ?? null}
                {/* Password Icon and Custom Child will be here */}
            </div>
        </div>
    )
}

Input.defaultProps = {
    isPassword: false,
    textColor: "secondary-500",
    bgColor: "primary-light",
}

Input.propTypes = {
    isPassword: PropTypes.bool,
    label: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    children: PropTypes.any,
}

export default Input

import styles from './Button.module.css'

export const Button = ({text, active, onClick, disabled, className }) => {
    return (
        <button
            className={className}
            onClick={onClick}
            active={active}
            disabled={disabled}
        >
            {text}
        </button>
    )
}
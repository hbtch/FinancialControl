import styles from './Button.module.css'

export const Button = ({children, text, onClick, className }) => {
    return (
        <button
            className={className}
            onClick={onClick}
        >
            {children}
            {text}
        </button>
    )
}
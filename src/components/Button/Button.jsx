import cn from 'classnames'
import styles from './Button.module.css'

const Button = ({ children, variant = 'primary', ...props }) => {
  const isPrimary = variant === 'primary'

  return (
    <button
      className={cn(
        styles.button,
        { [styles.button_primary]: isPrimary },
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button

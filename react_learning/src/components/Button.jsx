

const Button = ({ children, version, type, isDisabled}) => {
   return (
      <button className={`btn btn-${version}`} disabled={isDisabled} type={type} >
         {children}
      </button>
   )
}

Button.defaultProps = {
   version: 'Color-purple',
   type: 'button',
   isDisabled: false
}

export default Button

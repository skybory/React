const Button = ({text, color, children}) => {
    
    return (
    <button
        style={{color :color}}>
                { text} - {color.toUpperCase()}
                {children}
    </button>);
}

Button.defaultProps = {
    color:"blue"
}
export default Button;
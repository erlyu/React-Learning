import PropTypes from 'prop-types'

const Button = ({bgcolor, text, onClick}) => {
    return (
        // events can be created via onClick
        <button 
        onClick={onClick}
        style={{backgroundColor: bgcolor}} 
        className='btn'>{text}
        </button>
    )
}

//setting prop types prevents minor bugs i.e inputing numbers into color
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}
export default Button

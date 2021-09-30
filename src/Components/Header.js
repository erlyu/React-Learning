// This is the header!
// using plugin to shortcut code snippets! es7: rafce
// creates a boilerplate
// can set vars i.e const
import PropTypes from 'prop-types'
import Button from './Button';
// const xvar = false

const Header = (props) => {
    const onClick = () =>{
        console.log('Anxiety is being reduced')
    }
    return (
        // this is making of a component!
        <header className='header'>
            <div>
            <h1>Hello Eric, This is the start of a new adventure!</h1></div>
            <Button 
            bgcolor='blue' 
            text='Press to reduce anxiety'
            onClick={onClick}
            ></Button>
        </header>
    )
}

// if 'title = 'hello' does not exsit, you can create a default title
// there are types for properties, not required, but will help code be more robust!
// done by importing proptypes and define it similarly to the default props
// defaulkt prop is needed for typing the properties
Header.defaultProps = {
    title: 'Hello!, this is the default prop title which overrides',
}
Header.propTypes = {
    title: PropTypes.string.isRequired
}
// for styling, consider styling components
// styles uses double curly braces!
export default Header
 
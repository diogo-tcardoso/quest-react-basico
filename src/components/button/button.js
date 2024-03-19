import './button.css'

function messageLabel (event){
    const buttonLabel = event.target.innerText;
    alert('O label desse botão é ' + buttonLabel)
}

const Button = (props) => {
    return <button className='btn' onClick={messageLabel}>{props.label}</button>
}

Button.defaultProps = {
    label: 'Clique Aqui',
}

export default Button
import './DeleteButton.css'

const DeleteButton = ({ aoClicar }) => {

    // onClick é um escutador de eventos que esta executando a props aoClicar
    return (
        <button onClick={ aoClicar } className='delete-button'>
            Dispensar
        </button>
    )
}

export default DeleteButton
import './TextArea.css'

const TextArea = ({ campo, valor, placeholder, obrigatorio, aoAlterado }) => {

    const handleChange = (e) => {
        aoAlterado(e.target.value)
    }

    return (
        <div className='text-area'>
            <label>
                {campo}
            </label>
            <input
                onChange={ handleChange }
                type='text'
                value={valor}
                placeholder={placeholder}
                required={obrigatorio}                
            />
        </div>
    )
}

export default TextArea
import './DropDown.css'

const DropDown = ({ campo, valor, allPosicoes, aoAlterado }) => {

    return (
        <div className='drop-down'>
            <label>
                {campo}
            </label>
            <select onChange={ e => aoAlterado(e.target.value )} value={valor} >
                <option> {'--Selecione uma Posição--'} </option>
                {allPosicoes.map(posicao => <option key={posicao}> {posicao} </option>)}
            </select>
        </div>
    )
}

export default DropDown 
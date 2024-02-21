import DeleteButton from '../DeleteButton'
import './Jogadores.css'

const Jogadores = ({ nome, imagem, habilidade, corDeFundo, onRemover }) => {

    const handleRemover = () => {
        // Nesse caso, nome não é um parametro e sim um argumento, ele é equivalente a props nome
        onRemover(nome) // Passa o nome do jogador para a função de remoção
    }

    return (
        <div className='jogadores'>
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='descricao'>
                <h4>{nome}</h4>
                <p>{habilidade}</p>
                { /* DeleteButton esta executando uma função (handleRemover) que chama onRemover pegando o nome do jogador como parâmetro */ }
                <DeleteButton aoClicar={handleRemover} />
            </div>
        </div>
    )
    
}

export default Jogadores
import Jogadores from '../Jogadores'
import './Posicoes.css'

const Posicoes = ({ nomePosicao, corPrimaria, corSecundaria, jogadores, onRemover }) => {

    return (
        (jogadores.length > 0) && <section className='posicoes' style={{ backgroundColor: corSecundaria }}>
            <h3 style={{ borderColor: corPrimaria }}>{nomePosicao}</h3>
            <div className='jogadores-div'>
                {jogadores.map(jogador => <Jogadores // Aqui estão os jogadores exibidos
                    key={jogador.nome}
                    nome={jogador.nome}
                    habilidade={jogador.habilidade}
                    imagem={jogador.imagem}
                    corDeFundo={ corPrimaria }
                    onRemover={onRemover}                    
                />)}
            </div>
        </section>
    )
}

export default Posicoes
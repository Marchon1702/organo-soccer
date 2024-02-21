import { useState } from 'react'
import DropDown from '../DropDown'
import TextArea from '../TextArea'
import Button from '../Button'
import './Formulario.css'
import Span from '../Span'
    
const Formulario = ({ propsIntermediario, aoEnviar, repetido }) => {

    const [nome, setNome] = useState('')
    const [habilidade, setHabilidade] = useState('')
    const [imagem, setImagem] = useState('')
    const [posicoes, setPosicoes] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        aoEnviar({
            nome,
            habilidade,
            imagem,
            posicoes,
        })

        setNome('')
        setHabilidade('')
        setImagem('')
        setPosicoes('')
    }

    return (
        <section className='formulario'>
            <form className='form-group' onSubmit={ handleSubmit }>
                <h1> Preencha os dados do seu jogador </h1>
                <TextArea 
                   campo="Nome"
                   placeholder="Digite o nome da sua convocação..."
                   obrigatorio={ true }
                   valor={ nome }
                   aoAlterado={ valor => setNome(valor)}
                />
                <Span repetido={ repetido }/>
                
                <TextArea 
                   campo="Habilidade"
                   placeholder="Digite a maior qualidade do jogador..."
                   obrigatorio={ true }
                   valor={ habilidade }
                   aoAlterado={ valor => setHabilidade(valor)}
                />
                <TextArea 
                   campo="Imagem"
                   placeholder="Digite um endereço de imagem..."
                   valor={ imagem }
                   aoAlterado={ valor => setImagem(valor)}
                />
                <DropDown 
                   campo={ "Posição" }
                   allPosicoes={ propsIntermediario }
                   valor={ posicoes }
                   aoAlterado={ valor => setPosicoes(valor)}
                />
                <Button>
                    Convocar
                </Button>
            </form>
        </section>
    )
}

export default Formulario
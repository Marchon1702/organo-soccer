import React, { useState } from 'react';
import './App.css';
import Formulario from './components/Formulario';
import Header from './components/Header';
import Posicoes from './components/Posicoes';
import Footer from './components/Footer'

function App() {

  const [jogadores, setJogadores] = useState([])
  const [repetido, setRepetido] = useState('')

  React.useEffect(() => {
    const jogadoresSalvos = (localStorage.getItem('jogadores'))

    if (jogadoresSalvos) {
      try {
        const jogadoresParseados = JSON.parse(jogadoresSalvos)
        setJogadores(jogadoresParseados)
      } catch (e) {
        console.error('O erro: ' + e)
      }
    }
  }, [])

  React.useEffect(() => {
    localStorage.setItem('jogadores', JSON.stringify(jogadores))
  }, [jogadores])

  const addJogador = (jogador) => {
    if (jogadores.length > 10) return
    if (!jogador.imagem) jogador.imagem = '/images/perfil-men.jpg'

    setJogadores([...jogadores, jogador])
  }

  const posicoes = [
    {
      nome: 'Atacantes',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Meio Campistas',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Defensores',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Goleiro',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    }
  ]

  const removerJogador = (nomeJogador) => {
    // Retorna um array cujo o nome dos jogadores seja diferente do nome do componente jogador clicado.
    const novosJogadores = jogadores.filter(jogador => jogador.nome !== nomeJogador);
    setJogadores(novosJogadores);
  };


  return (
    <div className="App">
      <Header />
      <Formulario
        aoEnviar={jogador => {
          const nomeJaAdicionado = jogadores.some(arrayAtual => arrayAtual.nome === jogador.nome);
          if (nomeJaAdicionado) {
            setRepetido('*Nome já adicionado, crie variações nos nomes adicionando apelidos para que cada jogador tenha sua identidade própria no time.*')
            return
          } else {
            setRepetido('');
            addJogador(jogador);
          }
        }}
      repetido={repetido}
      propsIntermediario={posicoes.map(posicao => posicao.nome)}
      />
      {posicoes.map(posicao => <Posicoes
        key={posicao.nome}
        nomePosicao={posicao.nome}
        corPrimaria={posicao.corPrimaria}
        corSecundaria={posicao.corSecundaria}
        jogadores={jogadores.filter(jogador => jogador.posicoes === posicao.nome)}
        onRemover={removerJogador}
      />)}
      <Footer />
    </div>
  );
}

export default App;

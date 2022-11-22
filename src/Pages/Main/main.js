import logo from './../../beadssslogo.png'
import Produto from './../../Components/Produto/produto'
import {colares} from './../../imagens/produtos'
import {Logo, ListaProdutos, MainPage} from './styles'
import Pesquisa from './../../Components/Pesquisa/pesquisa'
import {useState} from 'react'

function Main () {
  const [pesquisa, setPesquisa] = useState('')

  return (
    <MainPage>
      
      <Logo>
        <img src={logo} alt="logo da loja da sophia" width="250px" height="250px"/>
      </Logo>

      {/* <Titulo>
        <h1>Sophia Enfeites, para arquitetos</h1>
      </Titulo> */}

      <Pesquisa input={pesquisa} setInput={setPesquisa}/>

      <ListaProdutos>      
        {colares.map((produto) => {
          if(pesquisa === '')
            return (
              <Produto data={produto} key={produto.id}/>
            )
          else
            return (
              (produto.tipo + produto.nome).includes(pesquisa.toLowerCase()) &&
                <Produto data={produto} key={produto.id}/>
            )
        })}
      </ListaProdutos>

    </MainPage>
  )
}

export default Main
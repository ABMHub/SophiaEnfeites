import logo from './../../SElogo.png'
import Produto from './../../Components/Produto/produto'
import {cimento} from './../../imagens/produtos'
import {Logo, ListaProdutos, Titulo, MainPage} from './styles'

function Main () {
  return (
    <MainPage>
      
      <Logo>
        <img src={logo} alt="logo da loja da sophia" width="100px" height="100px"/>
      </Logo>

      <Titulo>
        <h1>Sophia Enfeites, para arquitetos</h1>
      </Titulo>

      <ListaProdutos>      
        {cimento.map((produto) => {
          return (
            <Produto data={produto} key={produto.id}/>
          )
        })}
      </ListaProdutos>

    </MainPage>
  )
}

export default Main
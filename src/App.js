import './App.css';
import {produtos} from './imagens/produtos'

function Produto (props) {
  return (
    <div className="produto">   
      <img src={props.data.img} alt="produto" width="150px" height="150px"/>
      <div className="textoProduto">
        {props.data.tipo} {props.data.cor}<br />R${props.data.preco.toFixed(2)}
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <div className="logo">
        <img src="./SElogo.png" alt="logo da loja da sophia" width="100px"/>
      </div>

      <div className="titulo">
        <h1>Sophia Enfeites, para arquitetos</h1>
      </div>

      <div className="listaProdutos">      
        {produtos.map((produto) => {
          return (
            <Produto data={produto}/>
          )
        })}
      </div>
    </>
  );
}

export default App;

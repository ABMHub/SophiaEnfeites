import {ProdutoDiv, ImgProd, Overlay, TextoProduto, SpacingDiv} from './styles'

// Overlay
function Esgotado () {
  return (
    <Overlay>
      Esgotado
    </Overlay>
  )
}
  
function Produto (props) {
  const {tipo, nome, img, esgotado, preco} = props.data

  return (
    <SpacingDiv>
      <ProdutoDiv>   

        <ImgProd>
          {esgotado && <Esgotado />}
          <img src={img} alt="produto" />
        </ImgProd>

        <TextoProduto>
          <span style={{textTransform: "capitalize"}}>{tipo} </span>
          {nome} <br />
          R${preco.toFixed(2)}
        </TextoProduto>

      </ProdutoDiv>
    </SpacingDiv>
  )
}

export default Produto
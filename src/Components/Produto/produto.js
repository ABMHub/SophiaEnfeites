// Overlay
function Esgotado () {
  return (
    <div className="esgotado">
      Esgotado
    </div>
  )
}
  
function Produto (props) {
  const {tipo, cor, img, esgotado, preco} = props.data

  return (
    <div className="produto">   
      <div className="imgProd">
        {esgotado && <Esgotado />}
        <img src={img} alt="produto"/>
      </div>
      <div className="textoProduto">
        <span style={{textTransform: "capitalize"}}>{tipo} </span>
        {cor.join(' e ')} <br />
        R${preco.toFixed(2)}
      </div>
    </div>
  )
}

export default Produto
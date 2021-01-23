import {useRef} from 'react'
import {InputDePesquisa, BarraDePesquisa, IconeDePesquisa, IconeX} from './styles'

function Pesquisa (props) {
  
  const refInput = useRef(null)

  const divStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '0.67em',
  }

  return (
    <div style={divStyle} >
      <BarraDePesquisa>
        <InputDePesquisa 
          ref={refInput}
          type="text" 
          placeholder="Pesquisar" 
          onChange={(ev) => props.setInput(ev.target.value)} 
          value={props.input}
        />
        {props.input === '' ? 
          <IconeDePesquisa onClick={() => refInput.current.focus()} /> : 
          <IconeX onClick={() => props.setInput('')} />
        }
      </BarraDePesquisa>
    </div>
  )
}

export default Pesquisa
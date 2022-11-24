import styled from 'styled-components'

const margin = '5px'

export const SpacingDiv = styled.div`
  height: 100%;

  @media(max-width: 768px) {
    width: 50%;
  }

  @media(min-width: 768px) {
    width: 25%;
  }
`

export const Overlay = styled.div`
  position: absolute;
  text-align: center;
  bottom: 0;
  width: 100%;
  transition: 500ms ease;
  padding: 20px 0;
  background-color: rgba(167, 12, 12, 0.609);
  border-radius: 2px;
`

export const ProdutoDiv = styled.div`
  background-color: #F68623;
  border-radius: 10px;

  height: 100%;
  margin: ${margin};
  padding: ${margin};

  &:hover ${Overlay} {
    opacity: 0;
  }
`

export const ImgProd = styled.div`
  position: relative;
  margin: ${margin};

  & > img {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 2px;
  }
`

export const TextoProduto = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  text-wheight: 300;
  text-align: right;
  padding: 0 ${margin};
`
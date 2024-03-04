import React from 'react'
import styled from 'styled-components'
import ShopNowBtn from './ShopNowBtn'

const Cont = styled.div`
  padding: 2rem;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    padding: 5rem;
  }
`

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;

  @media (max-width: 575.97px) {
    font-size: 2rem;
  }
`

const Description = ({ selectedItem }) => {
  return <>
    <Cont>
      <Title>{selectedItem.title}</Title>
      <span>{selectedItem.desc}</span>
      <ShopNowBtn />
    </Cont>
  </>
}

export default Description
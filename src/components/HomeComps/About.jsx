import React from 'react'
import styled from 'styled-components'

const Cont = styled.div`
  padding: 2rem;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    padding: 5rem;
  }
`

const Label = styled.h1`
  font-weight: bold;
  letter-spacing: 0.25rem;
  text-transform: uppercase;
  
  @media (min-width: 575.98px) and (max-width: 991.98px) {
    font-size: 1.75rem;
  }

  @media (max-width: 575.97px) {
  }
`

const Desc = styled.span`
  font-size: 0.85rem;
  
  @media (min-width: 575.98px) and (max-width: 991.98px) {
    font-size: 1.25rem;
  }

  @media (max-width: 575.97px) {
  }
`

const About = () => {
  return <>
    <Cont>
      <Label>About our furniture</Label>
      <Desc>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interest and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</Desc>
    </Cont>
  </>
}

export default About
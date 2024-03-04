import React from 'react'
import styled from 'styled-components'
import righticon from '../../assets/images/icon-right.svg'
import lefticon from '../../assets/images/icon-left.svg'

const BtnsCont = styled.div`
  position: absolute;
  display: flex;
  left: 0;
  bottom: 0;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    padding-right: 0.825rem;
    left: auto;
    right: 0;
    bottom: 100%;
  }

  @media (max-width: 575.97px) {
    padding-right: 0.75rem;
    left: auto;
    right: 0;
    bottom: 100%;
  }
`

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.5rem;
  height: 4.5rem;
  border: none;
  background-color: black;

  @media (max-width: 575.97px) {
    width: 3.5rem;
    height: 3.5rem;
  }
`

const NavBtns = ({ handleNext, handlePrev }) => {
  return <>
    <BtnsCont>
      <Button onClick={handlePrev}>
        <img src={lefticon} alt="Previous" className='w-auto' />
      </Button>
      <Button onClick={handleNext}>
        <img src={righticon} alt="Next" className='w-auto' />
      </Button>
    </BtnsCont>

  </>
}

export default NavBtns
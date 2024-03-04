import React from 'react'
import styled from 'styled-components'
import arrow from '../../assets/images/icon-arrow.svg'

const Button = styled.button`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const Label = styled.div`
  font-weight: 600;
  letter-spacing: 0.5rem;
  text-transform: uppercase;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const ShopNowBtn = () => {
  return <>
    <Button>
      <Label>Shop now</Label>
      <img src={arrow}
        alt=""
        className='w-auto'
      />
    </Button>
  </>
}

export default ShopNowBtn
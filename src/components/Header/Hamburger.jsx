import React from 'react'
import styled from 'styled-components'
import hamburger from '../../assets/images/icon-hamburger.svg'

const Btn = styled.button`
  &:focus {
    box-shadow: none;
  }
`

const Hamburger = () => {
  return <>
    <div className='d-flex d-md-none'>
      <button
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasTop"
        aria-controls="offcanvasTop">
        <img
          src={hamburger}
          alt="hamburger-icon"
          className='w-auto'
        />
      </button>
      <div
        className="offcanvas offcanvas-top"
        tabIndex="-1"
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
        style={{
          height: '20vh'
        }}
      >
        <div className="offcanvas-body d-flex justify-content-center align-items-center">
          <Btn type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></Btn>
          <nav>
            <ul className='d-flex flex-row fw-bold gap-4'>
              <li><a href="/">home</a></li>
              <li><a href="/">shop</a></li>
              <li><a href="/">about</a></li>
              <li><a href="/">contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </>
}

export default Hamburger
import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../../assets/images/logo.svg'
import Hamburger from './Hamburger'

const HeaderStyle = styled.header`
  position: absolute;
  display: flex;
  align-items: center;
  height: 10vh;
  background-color: transparent;
`

const Header = () => {

  return <>
    <HeaderStyle>
      <div className="container ms-md-5">
        <div className="row">
          <div className="col-12 d-flex flex-row-reverse flex-md-row align-items-center gap-4">
            <div >
              <img
                src={logo}
                alt=""
                className='w-auto'
              />
            </div>
            <nav className='d-none d-md-flex'>
              <ul className='d-flex flex-row text-white gap-4'>
                <li><a href="/">home</a></li>
                <li><a href="/">shop</a></li>
                <li><a href="/">about</a></li>
                <li><a href="/">contact</a></li>
              </ul>
            </nav>
            <Hamburger />
          </div>
        </div>
      </div>
    </HeaderStyle>
  </>
}

export default Header
import React, { useState } from 'react'
import homeData from '../components/HomeComps/homeData'
import Description from '../components/HomeComps/Description'
import NavBtns from '../components/HomeComps/NavBtns'
import About from '../components/HomeComps/About'
import aboutdark from '../assets/images/about-dark.jpg'
import aboutlight from '../assets/images/about-light.jpg'

const HomePage = () => {

  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const handleNext = () => {
    setSelectedItemIndex((prevIndex) => (prevIndex === homeData.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setSelectedItemIndex((prevIndex) => (prevIndex === 0 ? homeData.length - 1 : prevIndex - 1));
  };

  const selectedItem = homeData[selectedItemIndex];

  return <>
    <section>
      <div className="container-fluid overflow-x-hidden px-0">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-12 col-xl-7 px-0">
                <img
                  src={window.innerWidth <= 575.97 ? selectedItem.image.mobile : selectedItem.image.desktop}
                  alt=""
                  style={{
                    height: window.innerWidth <= 991.98 ? 'auto' : '68svh'
                  }}
                />
              </div>
              <div className="col-12 col-xl-5 position-relative d-flex flex-column justify-content-center">
                <Description selectedItem={selectedItem} />
                <NavBtns handlePrev={handlePrev} handleNext={handleNext} />
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-12 col-xl-4">
                <img
                  alt=""
                  src={aboutdark}
                  style={{
                    height: window.innerWidth <= 991.98 ? 'auto' : '32svh'
                  }}
                />
              </div>
              <div className="col-12 col-xl-4 d-flex align-items-md-center">
                <About />
              </div>
              <div className="col-12 col-xl-4">
                <img
                  alt=""
                  src={aboutlight}
                  style={{
                    height: window.innerWidth <= 991.98 ? 'auto' : '32svh'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}

export default HomePage
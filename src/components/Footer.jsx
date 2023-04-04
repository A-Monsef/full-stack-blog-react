import React from 'react'
import { Container } from 'react-bootstrap'
import Logo from '../img/logo.png'
const Footer = () => {
  return (
    <footer className=" p-3 d-flex flex-column flex-md-row justify-content-between align-items-center" >
      <Container className="d-flex flex-column flex-md-row justify-content-between align-items-center">
        <img src={Logo} alt='' className="text-center text-md-start" style={{ width: "85px" }} />
        <div className="ms-0 ms-md-3">
          <p className="m-0 text-center text-md-start p-3">Copyright © 2023 Monsef Amzaouri´s Blog</p>
        </div>
        <div className="ms-0 ms-md-3">
          <p className="m-0 text-center text-md-start p-2">Made with <b>React.js</b> & <b>Laravel</b></p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
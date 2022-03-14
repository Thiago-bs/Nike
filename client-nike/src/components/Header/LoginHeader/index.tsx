import { Navbar, Nav } from 'react-bootstrap'
import * as S from './styles'
import Image from 'next/image'
import React, { MouseEvent } from 'react'
import { useRouter } from 'next/router'

const LoginHeader = () => {
  const router = useRouter()
  const handleNavigation = (e: MouseEvent, route:string) => {
    e.preventDefault()
    router.push(route)
  }
  return(
    <Navbar bg="light" expand="lg">
      <S.Wrapper fluid>
        <S.ImageWrapper>
          <Navbar.Brand href="/">    
            <Image
                src={"/img/Jordan.svg"}
                alt="Jordan Image"
                height={19} width={18}
              />
          </Navbar.Brand>
          <Navbar.Brand href="/">
            <Image
                src={"/img/SNKRS.svg"}
                alt="SNKRS Image"
                height={15}
                width={46}
              />
          </Navbar.Brand>
        </S.ImageWrapper>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav" >
          <Nav>
            <S.NavLink href="#help" hasBorder={true} onClick={(e: MouseEvent) => handleNavigation(e, 'help')}>Ajuda</S.NavLink>
            <S.NavLink href="#follow-your-order" hasBorder={true} onClick={(e: MouseEvent) => handleNavigation(e, 'follow-your-order')}>Acompanhe seu pedido</S.NavLink>
            <S.NavLink href="#sigin" onClick={(e: MouseEvent) => handleNavigation(e, 'sigin')}>Entrar</S.NavLink>
          </Nav>
        </Navbar.Collapse>
      </S.Wrapper>
    </Navbar>
  )
}


export default LoginHeader


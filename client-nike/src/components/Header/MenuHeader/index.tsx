import * as S from './styles'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import Image from 'next/image'
import React, { MouseEvent } from 'react'
import { useRouter } from 'next/router'

const MenuHeader = () => (
  <Navbar>
    <S.Wrapper fluid>
      <S.ImageWrapper>
        <Navbar.Brand href="/">    
          <Image
              src={"/img/LogoNike.svg"}
              alt="Logo nike"
              height={22} width={62}
            />
        </Navbar.Brand>
      </S.ImageWrapper>
      <Navbar.Collapse className="justify-content-center" id="basic-navbar-nav" >
        <Nav>
          <S.NavLink href="#Lançamento" hasBorder={true} onClick={(e: MouseEvent) => handleNavigation(e, 'help')}>Lançamento</S.NavLink>
          <S.NavLink href="#Masculino" hasBorder={true} onClick={(e: MouseEvent) => handleNavigation(e, 'help')}>Masculino</S.NavLink>
          <S.NavLink href="#Feminino" hasBorder={true} onClick={(e: MouseEvent) => handleNavigation(e, 'help')}>Feminino</S.NavLink>
          <S.NavLink href="#Infantil" hasBorder={true} onClick={(e: MouseEvent) => handleNavigation(e, 'follow-your-order')}>Infantil</S.NavLink>
          <S.NavLink href="#Ofertas" onClick={(e: MouseEvent) => handleNavigation(e, 'sigin')}>Ofertas</S.NavLink>
          <S.NavLink href="#SNKRS" onClick={(e: MouseEvent) => handleNavigation(e, 'sigin')}>SNKRS</S.NavLink>
         
        </Nav>
      </Navbar.Collapse>
      <S.InputGroup>
        <S.SearchIcon
          src={"/img/Lupa.svg"}
          alt="icone de pesquisa"
          height={22}
          width={20}
        />
        <S.SearchBar />
      </S.InputGroup>
      <S.NavLink href="#Sacola" onClick={(e: MouseEvent) => handleNavigation(e, 'sigin')} >
        <Image
          src={"/img/Sacola.svg"}
          alt="icone sacola"
          height={22}
          width={20}
        />
      </S.NavLink>
    </S.Wrapper>
  </Navbar>
)

export default MenuHeader

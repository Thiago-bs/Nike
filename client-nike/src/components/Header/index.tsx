import React from 'react'
import LoginHeader from './LoginHeader'
import MenuHeader from './MenuHeader'
import * as S from './styles'
const Header = () => {
  return(
    <S.Wrapper>
      <LoginHeader />
      <MenuHeader />
    </S.Wrapper>
  )
}

export default Header

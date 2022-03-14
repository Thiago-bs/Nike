import { Nav, Container } from 'react-bootstrap'
import styled from 'styled-components'
import Image from 'next/image'

export const Bag = styled.div`
    justify-content: flex-end;
`
export const Wrapper = styled(Container)`
    margin-left: 1%;
`

export const ImageWrapper = styled.div`
    justify-content: flex-start;
`

export const NavLink = styled(Nav.Link)`
    font-family:  Helvetica;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    align-items: center;
    color: #000 !important;
    padding-inline: 16px !important;
    font-style: normal;
`

export const SearchBar = styled.input`
    padding: 4px;
    background-color: #F7F7F7;
    border-radius: 50px;
    border: 2px solid #F7F7F7;
    left: 0;
    top: 0;
    position: static;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-right: 20px;

`

export const InputGroup = styled.div`
`

export const SearchIcon = styled(Image)`
`
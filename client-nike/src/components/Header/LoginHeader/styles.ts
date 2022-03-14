import { Nav, Container } from 'react-bootstrap'
import styled from 'styled-components'

export const Wrapper = styled(Container)`
    margin-left: 2%;
`

export const ImageWrapper = styled.div`
    justify-content: flex-start;
`

type NavLinkProps = {
    hasBorder?: boolean
}
export const NavLink = styled(Nav.Link)<NavLinkProps>`
    font-family:  Helvetica, sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: #737373 !important;
    align-items: center;
    padding-inline: 16px !important;
    ${(props) => props.hasBorder && 'border-right: 1px solid #737373; '};
    font-style: normal;
`


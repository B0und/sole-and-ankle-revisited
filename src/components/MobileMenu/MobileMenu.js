/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components/macro'
import Dialog, { DialogOverlay, DialogContent } from '@reach/dialog'

import { QUERIES, COLORS, WEIGHTS } from '../../constants'

import UnstyledButton from '../UnstyledButton'
import Icon from '../Icon'
import VisuallyHidden from '../VisuallyHidden'

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null
  }

  return (
    <Overlay>
      <Content aria-label='Navigation'>
        <CloseButton onClick={onDismiss}>
          <Icon id='close' strokeWidth={2} size={24}></Icon>
        </CloseButton>
        <Nav>
          <NavLink href='/sale'>Sale</NavLink>
          <NavLink href='/new'>New&nbsp;Releases</NavLink>
          <NavLink href='/men'>Men</NavLink>
          <NavLink href='/women'>Women</NavLink>
          <NavLink href='/kids'>Kids</NavLink>
          <NavLink href='/collections'>Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href='/terms'>Terms and Conditions</FooterLink>
          <FooterLink href='/privacy'>Privacy Policy</FooterLink>
          <FooterLink href='/contact'>Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  )
}

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsl(220deg 5% 40% / 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`
const Content = styled(DialogContent)`
  --left-spacing: 32px;

  position: relative;
  background: white;
  width: 300px;
  height: 100%;
  margin-left: auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const CloseButton = styled(UnstyledButton)`
  align-self: flex-end;
  padding: 16px;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding-left: var(--left-spacing);
`

const NavLink = styled.a`
  text-decoration: none;
  font-size: ${18 / 16}rem;
  font-weight: ${WEIGHTS.medium};
  text-transform: uppercase;
  color: var(--color-gray-900);

  &:first-of-type {
    color: var(--color-secondary);
  }
`

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding-left: var(--left-spacing);
  padding-bottom: var(--left-spacing);
`

const FooterLink = styled.a`
  text-decoration: none;
  font-size: ${14 / 16}rem;
  color: var(--color-gray-700);
`
export default MobileMenu

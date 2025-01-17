import React from 'react'
import styled from 'styled-components/macro'

import { WEIGHTS, QUERIES } from '../../constants'
import Logo from '../Logo'
import Icon from '../Icon'
import SuperHeader from '../SuperHeader'
import MobileMenu from '../MobileMenu'
import UnstyledButton from '../UnstyledButton'
import VisuallyHidden from '../VisuallyHidden'
import Spacer from '../Spacer'

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false)

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href='/sale'>a vendre</NavLink>
          <NavLink href='/new'>New&nbsp;Releases</NavLink>
          <NavLink href='/men'>hommes</NavLink>
          <NavLink href='/women'>femmes</NavLink>
          <NavLink href='/kids'>les enfants</NavLink>
          <NavLink href='/collections'>Collections</NavLink>
          <UnstyledButton>
            <MobileIcon id='shopping-bag' size={24} strokeWidth={2} />
            <VisuallyHidden>Shopping Bag</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton>
            <MobileIcon id='search' size={24} strokeWidth={2} />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <MobileIcon id='menu' size={24} strokeWidth={2} />
            <VisuallyHidden>Navigation Menu</VisuallyHidden>
          </UnstyledButton>
        </Nav>
        <DesktopSpacer />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  )
}

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);

  @media ${QUERIES.tablet} {
    border-top: 4px solid var(--color-gray-900);
  }
`

const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem, 14vw - 7.5rem, 3rem);

  margin-left: clamp(1rem, 14vw - 7.5rem, 3rem);

  overflow: auto;

  @media ${QUERIES.tablet} {
    gap: 34px;
    margin-left: 34px;
    margin-right: 0px;
  }

  @media ${QUERIES.phone} {
    gap: 16px;
    margin-left: 16px;
    margin-right: 0px;
  }
`

const Side = styled.div`
  flex: 1;
`

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  white-space: nowrap;

  &:first-of-type {
    color: var(--color-secondary);
  }

  @media ${QUERIES.tablet} {
    display: none;
  }
`

const MobileIcon = styled(Icon)`
  display: none;
  @media ${QUERIES.tablet} {
    display: block;
  }
`
const DesktopSpacer = styled(Spacer)`
  flex: 1;

  @media ${QUERIES.tablet} {
    display: none;
  }
`

export default Header

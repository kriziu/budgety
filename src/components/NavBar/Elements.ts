import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { breakpoints } from '../../constant/style/breakpoints';
import { Button } from '../Button';

interface NavProps {
  opened?: boolean;
  focused?: boolean;
}

export const Navigation = styled.nav`
  color: #111;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.5rem;
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  h1 {
    font-weight: 400;
    font-size: 3rem;
    margin-right: 2rem;
    display: none;

    @media (min-width: ${breakpoints.tablet}) {
      display: block;
    }
  }
`;

export const ToggleNavButton = styled.button`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 35%;
  background-color: #111;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 11;
  position: fixed;
  right: 3.5rem;
  transition: var(--trans-default);

  :focus {
    outline: none;
  }

  :hover {
    cursor: pointer;
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

export const NavIcon = styled.div<NavProps>`
  pointer-events: none;
  width: 2.2rem;
  height: 3px;
  background-color: #fff;

  transform: ${props =>
    props.opened ? 'rotate(225deg) scale(1.3)' : 'rotate(0) scale(1)'};

  transition: var(--trans-default);

  ::after {
    content: '';
    display: block;
    width: 2.2rem;
    height: 3px;
    background-color: #fff;
    transition: var(--trans-default);
    transform: ${props =>
      props.opened
        ? `rotate(90deg) translateY(0)`
        : `rotate(0) translateY(${props.focused ? '250%' : '125%'})`};
  }

  ::before {
    content: '';
    display: block;
    width: 2.2rem;
    height: 3px;
    background-color: #fff;
    transition: var(--trans-default);
    transform: ${props =>
      props.focused ? 'translateY(-350%)' : 'translateY(-225%)'};

    display: ${props => (props.opened ? 'none' : 'block')};
  }
`;

export const MobileLinksContainer = styled.div<NavProps>`
  background-color: #111;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  transition: var(--trans-default);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transform: ${props => (props.opened ? 'translateX(0)' : 'translateX(-100%)')};

  ul {
    transition: var(--trans-default);
    transition-delay: 0.1s;
    flex-direction: column;
    align-items: center;
    display: flex;
    padding: 0;
    margin: 0;
    margin-bottom: 25%;

    transform: ${props =>
      props.opened ? 'translateX(0)' : 'translateX(-100%)'};

    li {
      :not(:last-child) {
        margin-bottom: 4rem;
      }
    }
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

export const DesktopLinksContainer = styled.ul`
  width: 47rem;
  justify-content: space-around;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin: 0;
    padding: 0;
    :not(:last-child) {
    }
  }

  display: none;
  @media (min-width: ${breakpoints.tablet}) {
    display: flex;
  }
`;

export const StyledLink = styled(Link)<{ $isactive: boolean }>`
  font-size: 2.5rem;
  text-decoration: none;
  text-transform: capitalize;
  ${props => props.$isactive && 'text-decoration: underline; cursor: default;'}

  color: #fff;

  :hover {
    text-decoration: underline;
  }

  :focus {
    outline: none;
    text-decoration: underline;
  }

  @media (min-width: ${breakpoints.tablet}) {
    color: #222;
    font-size: 1.6rem;
  }

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 2rem;
  }
`;

type url = { url: string };

export const Avatar = styled.div<url>`
  border-radius: 50%;
  background-image: ${props => `url('${props.url}')`};
  background-size: cover;
  padding: 2rem;
  margin-right: 1.5rem;
`;

export const GoogleButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0.9rem;

  svg {
    margin-right: 0.5rem;
  }
`;

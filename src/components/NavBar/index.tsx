import React, { FC, useState, useRef } from 'react';

import {
  Navigation,
  Header,
  ToggleNavButton,
  NavIcon,
  MobileLinksContainer,
  StyledLink,
  DesktopLinksContainer,
} from './Elements';
import { routes } from '../../constant/routes';

const NavBar: FC = (): JSX.Element => {
  const [opened, setOpened] = useState(false);
  const [btnFocused, setBtnFocued] = useState(false);
  const btnRef = useRef(null);

  const toggleNavMenu = (e: React.MouseEvent) => {
    setOpened(!opened);
    if (!(e.target === btnRef.current)) window.scrollTo(0, 0);
  };

  const renderLinks = (
    routes: string[],
    focusableByDefault = true
  ): JSX.Element[] => {
    return routes.map((route, i) => (
      <li key={i}>
        <StyledLink
          tabIndex={focusableByDefault ? 0 : opened ? 0 : -1}
          onClick={toggleNavMenu}
          to={`/${route}`}
        >
          {route}
        </StyledLink>
      </li>
    ));
  };

  return (
    <Navigation>
      <Header>Budgety</Header>
      <ToggleNavButton
        aria-label="Navigation button"
        onClick={toggleNavMenu}
        onFocus={() => setBtnFocued(true)}
        onBlur={() => setBtnFocued(false)}
        ref={btnRef}
      >
        <NavIcon opened={opened} focused={btnFocused} />
      </ToggleNavButton>
      <MobileLinksContainer opened={opened}>
        <ul>{renderLinks(routes, false)}</ul>
      </MobileLinksContainer>
      <DesktopLinksContainer>{renderLinks(routes)}</DesktopLinksContainer>
    </Navigation>
  );
};

export default NavBar;

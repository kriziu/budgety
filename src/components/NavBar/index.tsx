import React, { FC, useState, useRef, useEffect } from 'react';

import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
  GoogleLogout,
} from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';

import {
  Navigation,
  HeaderContainer,
  ToggleNavButton,
  NavIcon,
  MobileLinksContainer,
  StyledLink,
  DesktopLinksContainer,
  Avatar,
  GoogleButton,
  StyledThemeChanger,
  StyledThemeChangerDesktop,
} from './Elements';
import { FaGoogle } from 'react-icons/fa';
import { routes } from '../../constant/routes';
import { loginAction, logoutAction } from '../../store/googleUser/actions';
import { RootState } from '../../store';
import { loadState } from '../../store/localstorage';
import {
  addBudgetAction,
  changeTransactions,
} from '../../store/budgets/actions';
import { timeout } from '../../utils/utility';
import { addTransactionAction } from '../../store/transactions/actions';
import { setPrimaryCurrency } from '../../store/currency/actions';
import { useHistory, useLocation } from 'react-router-dom';
import ThemeChanger from '../ThemeChanger';

const NavBar: FC = (): JSX.Element => {
  const [opened, setOpened] = useState(false);
  const [btnFocused, setBtnFocued] = useState(false);
  const btnRef = useRef(null);
  const dispatch = useDispatch();
  const googleUser = useSelector((state: RootState) => state.googleUser);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    let goodLocation = false;

    routes.forEach(route => {
      if (`/${route}` === location.pathname) goodLocation = true;
    });
    if (!goodLocation) history.push('/overview');
  });

  const toggleNavMenu = (e: React.MouseEvent) => {
    setOpened(!opened);
    if (!(e.target === btnRef.current)) window.scrollTo(0, 0);
  };

  const renderLinks = (
    routes: string[],
    focusableByDefault = true
  ): JSX.Element[] => {
    return routes.map((route, i) => {
      const isActive = `/${route}` === location.pathname ? true : false;

      return (
        <li key={i}>
          <StyledLink
            tabIndex={focusableByDefault ? 0 : opened ? 0 : -1}
            onClick={e => (!isActive ? toggleNavMenu(e) : e.preventDefault())}
            to={route}
            $isactive={isActive}
          >
            {route}
          </StyledLink>
        </li>
      );
    });
  };

  const handleResponseGoogle = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    if ((response as GoogleLoginResponse).profileObj) {
      dispatch(loginAction((response as GoogleLoginResponse).profileObj));
    }
  };

  const handleLogout = async () => {
    const state = loadState();
    dispatch(logoutAction());

    if (state) {
      await timeout(100);
      state.budgets.forEach(budget => dispatch(addBudgetAction(budget)));
      state.transactions.forEach(transaction =>
        dispatch(addTransactionAction(transaction))
      );

      dispatch(setPrimaryCurrency(state.currency.primaryCurrency));
      dispatch(changeTransactions());
    }
  };

  return (
    <Navigation>
      <HeaderContainer>
        <h1 style={{ marginRight: '1rem' }}>Budgety</h1>
        {googleUser === null ? (
          <GoogleLogin
            clientId="118372615416-g77a8gaf92slnb4f50jr6o9cmh0f4ho1.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={handleResponseGoogle}
            onFailure={handleResponseGoogle}
            cookiePolicy={'single_host_origin'}
            isSignedIn
            render={renderProps => (
              <GoogleButton
                color="red"
                textColor="white"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <FaGoogle />
                Login
              </GoogleButton>
            )}
          />
        ) : (
          <>
            <Avatar url={googleUser.imageUrl} />
            <GoogleLogout
              clientId="118372615416-cjlib17tonjdhn4tqtpnetm7mif08ah9.apps.googleusercontent.com"
              buttonText="Logout"
              onLogoutSuccess={handleLogout}
              render={renderProps => (
                <GoogleButton
                  color="red"
                  textColor="white"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <FaGoogle />
                  Logout
                </GoogleButton>
              )}
            />
          </>
        )}
        <StyledThemeChangerDesktop>
          <ThemeChanger />
        </StyledThemeChangerDesktop>
      </HeaderContainer>
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
        <StyledThemeChanger>
          <ThemeChanger />
        </StyledThemeChanger>
        <ul>{renderLinks(routes, false)}</ul>
      </MobileLinksContainer>
      <DesktopLinksContainer>{renderLinks(routes)}</DesktopLinksContainer>
    </Navigation>
  );
};

export default NavBar;

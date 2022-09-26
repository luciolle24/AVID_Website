import Link from 'next/link';
import styled from 'styled-components';
import * as React from 'react';
import { mediaQueriesDesktopFirst } from '../../../styles/utils';
import MobileNavigation from './navigation-mobile';
import ExpertiseMenu from '../menus/ExpertiseMenu';
import { useTranslation } from 'react-i18next';
import { Flexbox } from '../../commons/Flexbox';
import { NavigationLinkButton } from './NavigationLinkButton';

const NavBarUl = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0 20px;
  overflow: hidden;
  background-color: #000;
  position: fixed;
  z-index: 10;
  left: 0;
  right: 0;
  ${{
    [mediaQueriesDesktopFirst.xs]: {
      display: 'none',
    },
  }};
`;

const NavBarLi = styled.li`
  display: flex;
  text-decoration: none;
  cursor: pointer;
`;

const ExternalLink = styled.a`
  display: inline-block;
  margin-left: 50px;
  cursor: pointer;
`;

const LogoImage = styled.img`
  border-radius: 100rem;
  min-width: 35px;
  min-height: 35px;
  height: 35px;
  width: 35px;
`;

function Navigation() {
  const { t } = useTranslation('navigation');

  return (
    <nav>
      <NavBarUl>
        <NavBarLi>
          <Link href="/">
            <img
              alt="AVID Logo"
              type="image"
              width="100px"
              height="auto"
              src="../Logos/AVID.png"
              cursor="pointer"
            />
          </Link>
        </NavBarLi>
        <NavBarLi
          style={{
            flex: '1',
            color: 'white',
          }}
        >
          <ExpertiseMenu />
          <Link href="/contact">
            <NavigationLinkButton>{t('contact')}</NavigationLinkButton>
          </Link>
          <Link href="/history">
            <NavigationLinkButton>{t('history')}</NavigationLinkButton>
          </Link>
        </NavBarLi>
        <NavBarLi>
          <Link href="" locale="fr">
            <NavigationLinkButton>FR</NavigationLinkButton>
          </Link>
          <Link href="" locale="en">
            <NavigationLinkButton>EN</NavigationLinkButton>
          </Link>
          <Flexbox alignItems="center">
            <ExternalLink
              target="_blank"
              href="https://www.linkedin.com/company/eukleia/"
              rel="noopener noreferrer"
            >
              <LogoImage width="55px" src="../Navigation/linkedInCircle.svg" />
            </ExternalLink>
          </Flexbox>
        </NavBarLi>
      </NavBarUl>
      <MobileNavigation />
    </nav>
  );
}

export default Navigation;

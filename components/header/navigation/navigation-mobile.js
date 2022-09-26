import { Menu, MenuItem } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { mediaQueriesDesktopFirst } from '../../../styles/utils';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

const NavBarUl = styled.ul`
  display: none;
  left: 0;
  right: 0;
  ${{
    [mediaQueriesDesktopFirst.xs]: {
      display: 'flex',
      listStyleType: 'none',
      margin: 0,
      padding: '3px',
      overflow: 'hidden',
      backgroundColor: '#fff',
      justifyContent: 'space-between',
      position: 'fixed',
      zIndex: '10',
    },
  }};
`;
const NavBarLi = styled.li`
  display: 'none'
    ${{
      [mediaQueriesDesktopFirst.xs]: {
        display: 'block',
        color: '#365e80',
        padding: '20px 20px',
        margin: '20px',
        textAlign: 'center',
        textDecoration: 'none',
      },
    }};
`;
const NavBarLiR = styled.li`
  display: 'none'
    ${{
      [mediaQueriesDesktopFirst.xs]: {
        display: 'block',
        color: '#365e80',
        padding: '20px 20px',
        margin: '20px',
        textAlign: 'center',
        textDecoration: 'none',
        float: 'right',
      },
    }};
`;
const LogoImage = styled.img`
  border-radius: 100rem;
  margin-bottom: -10%;
  min-width: 25px;
  min-height: 25px;
  height: 25px;
  width: 25px;
`;

const boxes = [
  {
    text: 'SAP',
    link: '/sap',
  },
  {
    text: 'd365',
    link: '/d365',
  },
  {
    text: 'BI',
    link: '/BI',
  },
  {
    text: 'azure',
    link: '/azure',
  },
  {
    text: 'mindsapp',
    link: '/mindsapp',
  },
  {
    text: 'history',
    link: '/history',
  },
  {
    text: 'join-us',
    link: '/join-us',
  },
  {
    text: 'contact',
    link: '/contact',
  },
];
export default function MobileNavigation() {
  const [anchorEl3, setAnchorEl3] = React.useState(null);
  const open3 = Boolean(anchorEl3);
  const handleClick3 = (event) => {
    setAnchorEl3(event.currentTarget);
  };
  const handleClose3 = () => {
    setAnchorEl3(null);
  };
  const { t } = useTranslation('navigation');
  return (
    <nav>
      <NavBarUl>
        <NavBarLi>
          <a href="/">
            <input
              type="image"
              width="100px"
              height="40px"
              src="../Logos/Eukleia_Color.png"
              cursor="pointer"
            ></input>
          </a>
        </NavBarLi>
        <NavBarLiR>
          <Link href="" locale="fr">
            <LogoImage src="../Navigation/french.png" alt="French flag" />
          </Link>
          <Link href="" locale="en">
            <LogoImage src="../Navigation/english.jpg" alt="English flag" />
          </Link>
          <Button
            id="demo-positioned-button"
            aria-controls={open3 ? 'demo-positioned-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open3 ? 'true' : undefined}
            onClick={handleClick3}
            sx={{
              textTransform: 'capitalize',
              color: '#0e3e67',
            }}
          >
            =
          </Button>
        </NavBarLiR>

        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl3}
          open={open3}
          onClose={handleClose3}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          sx={{
            marginTop: 1,
          }}
        >
          {boxes.map((box, key) => (
            <Link key={key} href={box.link}>
              <MenuItem
                key={key}
                sx={{
                  color: '#0e3e67',
                }}
              >
                {t(box.text)}
              </MenuItem>
            </Link>
          ))}
        </Menu>
      </NavBarUl>
    </nav>
  );
}

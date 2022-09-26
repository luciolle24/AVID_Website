import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { mediaQueriesDesktopFirst } from '../../../styles/utils';
import { Flexbox } from '../../commons/Flexbox';
const FooterDiv = styled.div`
  display: none;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #0d3e66;
  ${{
    [mediaQueriesDesktopFirst.xs]: {
      display: 'block',
    },
  }};
`;
const LogoImage = styled.img`
  border-radius: 50%;
  width: ${({ width }) => width};
  height: 80px;
  float: center;
`;
const InfoDiv = styled.div`
  display: block;
  color: white;
  text-align: justify;
  padding: 14px 14px;
  text-decoration: none;
  float: left;
`;
const NavBarLi = styled.li`
  display: block;
  color: white;
  text-align: justify;
  padding: 14px 16px;
  text-decoration: none;
  float: center;
`;
const P = styled.p`
  color: white;
`;
export function MobileFooter() {
  const { t } = useTranslation('footer');
  return (
    <FooterDiv>
      <ul>
        <Flexbox>
          <img
            alt="Photo of computers on a desk"
            width="150px"
            height="100px"
            src="../HomePage/Hero.jpg"
            style={{
              maxWidth: '100%',
              marginRight: '5px',
            }}
          />
          <Link href="/">
            <img
              alt="Logo Eukleia"
              width="160px"
              height="45px"
              src="../Logos/Eukleia_White.png"
              style={{
                maxWidth: '100%',
                margin: '25px',
                marginLeft: '5px',
              }}
            />
          </Link>
        </Flexbox>
        <InfoDiv>
          <P>
            +41 22 301 30 04
            <br />
            info@eukleia.eu
            <br />
          </P>
          <Link href="/privacy">{t('confidential')}</Link>
          <P>
            EUKLEIA Suisse <br />
            Rue Eugène Marziano 17A
            <br />
            1227 Carouge
            <br />
            <br />
          </P>
        </InfoDiv>
        <NavBarLi>
          <a
            target="_blank"
            href="https://www.linkedin.com/company/eukleia/"
            rel="noopener noreferrer"
          >
            <LogoImage width="80px" src="../Footer/linkedIn.jpg"></LogoImage>
          </a>
        </NavBarLi>
      </ul>
    </FooterDiv>
  );
}

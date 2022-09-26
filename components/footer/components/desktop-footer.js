/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { mediaQueriesDesktopFirst } from '../../../styles/utils';

const FooterDiv = styled.div`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #000;
  align-content: center;
  justify-content: center;
  ${{
    [mediaQueriesDesktopFirst.xs]: {
      display: 'none',
    },
  }};
`;
const CategoryDiv = styled.div`
  display: block;
  color: white;
  text-align: justify;
  padding: 25px;
  text-decoration: none;
  float: left;
`;
const NavBarLi = styled.li`
  display: block;
  color: white;
  text-align: justify;
  text-decoration: none;
  float: center;
`;
const LogoImage = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-top: 20px;
  float: center;
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

const Title = styled.h2`
  color: #fff;
  font-size: 17px;
  font-weight: bold;
`;

const Text = styled.p`
  color: #fff;
`;

const SpecialLinks = styled.a`
  display: block;
  color: #fff;
`;
const Image = styled.div`
  margin-right: 20px;
`;
const Clickable = styled.div`
  color: white;
  &:hover {
    cursor: pointer;
  }
`;

export function DesktopFooter() {
  const { t } = useTranslation('footer');
  return (
    <FooterDiv>
      <ul>
        <CategoryDiv>
          <NavBarLi>
            <Link href="/">
              <Image>
                <img
                  alt="Logo AVID"
                  width="100px"
                  height="auto"
                  src="../Logos/AVID.png"
                  style={{
                    maxWidth: '100%',
                  }}
                />
              </Image>
            </Link>
          </NavBarLi>
        </CategoryDiv>
      </ul>
      <CategoryDiv>
        <Title>{t('our-team')}</Title>
        <Link href="/join-us">
          <Clickable>
            <Text>{t('join-us')}</Text>
          </Clickable>
        </Link>
      </CategoryDiv>
      <CategoryDiv>
        <Title>{t('follow-us')}</Title>
        <NavBarLi>
          <a
            target="_blank"
            href="https://www.linkedin.com/company/eukleia/"
            rel="noopener noreferrer"
          >
            <LogoImage src="../Footer/linkedIn.jpg"></LogoImage>
          </a>
        </NavBarLi>
      </CategoryDiv>
      <CategoryDiv>
        <Title>
          <Clickable>
            <Text>{t('contact')}</Text>
          </Clickable>
        </Title>
        <NavBarLi>
          <SpecialLinks href="mailto:luciolle24@gmail.com">Send us an email</SpecialLinks>
        </NavBarLi>
      </CategoryDiv>
      <CategoryDiv>
        <NavBarLi>
          <Clickable>
            <Link href="/privacy">
              <Text>{t('confidential')}</Text>
            </Link>
          </Clickable>
        </NavBarLi>
      </CategoryDiv>
    </FooterDiv>
  );
}

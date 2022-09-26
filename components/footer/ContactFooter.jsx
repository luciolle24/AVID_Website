import Link from 'next/link';
import styled from 'styled-components';
import { mediaQueriesDesktopFirst } from '../../styles/utils';
import { useTranslation } from 'react-i18next';

const Footer = styled.div`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
const CategoryDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  padding: 14px 14px;
  text-decoration: none;
  float: left;
`;
const CategoryDivImage = styled.div`
  display: block;
  color: white;
  text-align: center;
  text-decoration: none;
  float: left;
`;

const HiddenImage = styled.img`
  display: block;
  ${{
    [mediaQueriesDesktopFirst.xs]: {
      display: 'none',
    },
  }};
`;

const QuestionText = styled.h2`
  color: #fff;
  margin-bottom: 10px;
`;

const Button = styled.button`
  border: none;
  background-color: #1366af;
  color: #fff;
  padding: 10px 50px;
  border-radius: 50px;
  font-size: 20px;
  cursor: pointer;
`;

function ContactFooter({ backgroundColor }) {
  const { t } = useTranslation('contactFooter');

  return (
    <Footer backgroundColor={backgroundColor}>
      <CategoryDiv>
        <QuestionText>{t('contactFooter.question')}</QuestionText>
        <Button>
          <Link href="/contact">{t('contactFooter.contactUs')}</Link>
        </Button>
      </CategoryDiv>
    </Footer>
  );
}

export default ContactFooter;

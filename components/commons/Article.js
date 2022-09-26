import styled from '@emotion/styled';
import { theme } from '../../styles/theme';
import { Flexbox } from './Flexbox';

export const Article = styled(Flexbox)`
  background-color: ${theme.colors.grays.light};
  margin: 10px;
  padding: 20px;
  width: ${({ width }) => width};
  border-radius: 10px;
  flex-direction: column;
`;

export const ArticleTitle = styled.h1`
  color: white;
  font-size: ${({ fontSize }) => fontSize};
  margin: ${({ margin }) => margin};
`;

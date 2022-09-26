import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';

export const NavigationLinkButton = styled.a`
  color: ${theme.text.link.color};
  font-size: ${theme.text.link.fontSize};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 20px;
  cursor: pointer;
  &:hover {
    color: ${theme.text.link.backgroundColor.hover};
  }
`;

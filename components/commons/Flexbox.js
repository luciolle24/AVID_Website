import styled from '@emotion/styled';

export const Flexbox = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex: ${({ flex }) => flex};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  padding-top: ${({ paddingTop }) => paddingTop};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ borderRadius }) => borderRadius};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  text-align: ${({ textAlign }) => textAlign};
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom};
`;

export const GridTemplate = styled.div`
  display: grid;
  flex: ${({ flex }) => flex};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ borderRadius }) => borderRadius};
  grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};
  grid-template-rows: ${({ gridTemplateRows }) => gridTemplateRows};
  gap: ${({ gap }) => gap};
  padding: ${({ padding }) => padding};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

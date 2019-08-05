import styled, { css } from 'styled-components';
import { PaperStylesInterface } from './Paper.interfaces';

export const Container = styled.div<PaperStylesInterface>`
  background: #fff;
  border-radius: 12px;
  display: inline-block;
  width: 100%;
  transition: all 0.25s ease-in;
  font-weight: 300;
  font-size: 12px;
  color: #565656;
  box-shadow: 0px 10px 14px 1px rgba(60, 64, 67, 0.08), 0px 6px 6px -3px rgba(60, 64, 67, 0.16);

  :hover {
    box-shadow: 0px 14px 21px 2px rgba(60, 64, 67, 0.08), 0px 6px 7px -4px rgba(60, 64, 67, 0.16);
  }
`;

export const Wrapper = styled.div<PaperStylesInterface>`
  margin: 15px;
`;

export const Title = styled.h2<PaperStylesInterface>`
  font-size: 18px;
  font-weight: 600;
  color: #aaaaaa;
  padding: 20px;
  display: block;
  ${({ hasChildren }) => css`
    ${hasChildren && 'padding-bottom: 10px;'}
  `}
`;

export const Children = styled.div<PaperStylesInterface>`
  padding: 20px;
  ${({ hasTitle }) => css`
    ${hasTitle && 'padding-top: 10px;'}
  `}
`;

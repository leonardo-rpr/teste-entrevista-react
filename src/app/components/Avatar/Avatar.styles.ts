import styled, { css } from 'styled-components';
import { AvatarStylesInterface } from './Avatar.interfaces';

export const Content = styled.div<AvatarStylesInterface>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 24px;
  border: 3px solid #ffa156;
  background-color: #f25c00;
  color: #fff;
  font-size: 16px;

  ${({ image }) => !!image
    && css`
      background: url(${image}) center center no-repeat;
      background-size: cover;
    `}
`;

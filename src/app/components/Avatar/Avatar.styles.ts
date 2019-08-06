import styled, { css } from 'styled-components';
import { AvatarStylesInterface } from './Avatar.interfaces';

export const Content = styled.div<AvatarStylesInterface>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 100%;
  background-color: #f2295b;
  color: #fff;
  font-size: 40px;

  ${({ image }) => !!image
    && css`
      background: url(${image}) center center no-repeat;
      background-size: cover;
    `}
`;

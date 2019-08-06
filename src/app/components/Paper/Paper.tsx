import React from 'react';
import { Container, Children, Title } from './Paper.styles';

import { PaperInterface } from './Paper.interfaces';

const Paper: React.FC<PaperInterface> = ({ title, children, width }) => (
  <Container width={width}>
    {title && <Title hasChildren={!!children}>{title}</Title>}
    {children && <Children hasTitle={!!title}>{children}</Children>}
  </Container>
);

Paper.defaultProps = {
  children: null,
  title: null,
  width: '100%',
};

export default Paper;

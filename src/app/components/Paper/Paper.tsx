import React from 'react';
import { Wrapper, Container, Children, Title } from './Paper.styles';

import { PaperInterface } from './Paper.interfaces';

const Paper: React.FC<PaperInterface> = ({ title, children }) => (
  <Wrapper>
    <Container>
      {title && <Title hasChildren={!!children}>{title}</Title>}
      {children && <Children hasTitle={!!title}>{children}</Children>}
    </Container>
  </Wrapper>
);

Paper.defaultProps = {
  children: null,
  title: null,
};

export default Paper;

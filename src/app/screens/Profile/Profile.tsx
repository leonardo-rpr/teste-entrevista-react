import React from 'react';

import { Header, Paper, TextField, Avatar, Title, Badge } from 'components';
import { Container, UserInformations, PositionAvatar, ContainerBadge } from './Profile.styles';

const Profile: React.FC<{}> = () => {
  console.log('test');

  return (
    <Container>
      <Header onClick={() => {}} />
      <UserInformations>
        <Paper width="65%">
          <PositionAvatar>
            <Avatar user={{ name: 'Leonardo Pinheiro', image: '' }} size="100px" />
          </PositionAvatar>

          <TextField disabled value="" label="Nome" placeholder="Nome" />
          <TextField disabled value="" label="E-mail" placeholder="E-mail" />

          <Title title="Seus cursos assinados" />
          <ContainerBadge>
            <Badge label="ProEnem Medicina" />
          </ContainerBadge>
        </Paper>
      </UserInformations>
    </Container>
  );
};

export default Profile;

import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';
import dispatchAction, { PersonActions, AuthActions } from '../../../core/redux/actions';

import { Header, Paper, TextField, Avatar, Title, Badge } from '../../components';
import { Container, UserInformations, PositionAvatar, ContainerBadge } from './Profile.styles';

const Profile: React.FC<{}> = () => {
  const image = useSelector((state: any) => state.person.user.avatar);
  const name = useSelector((state: any) => state.person.user.name);
  const email = useSelector((state: any) => state.person.user.email);
  const courses = useSelector((state: any) => state.person.user.courses);

  useEffect(() => {
    dispatchAction(PersonActions.person.request);
  }, []);

  const renderCourses = () => {
    const mappedCourses = courses.map((course: any) => (
      <Badge key={course.id} label={course.name} />
    ));

    return mappedCourses;
  };

  return (
    <Container>
      <Header onClick={() => dispatchAction(AuthActions.logout)} />
      <UserInformations>
        <Paper width="65%">
          <PositionAvatar>
            <Avatar user={{ name, image }} size="100px" />
          </PositionAvatar>

          <TextField disabled value={name} label="Nome" placeholder="Nome" />
          <TextField disabled value={email} label="E-mail" placeholder="E-mail" />

          <Title title="Seus cursos" />
          <ContainerBadge>{renderCourses()}</ContainerBadge>
        </Paper>
      </UserInformations>
    </Container>
  );
};

export default Profile;

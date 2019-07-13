import React, { Fragment } from 'react';

import { Container, Title, Description, Separator } from './styles';
import Simulator from '../../components/Simulator';

const Main = () => (
  <Fragment>
    <Container>
      <Title>FaleMais</Title>
      <Description>
        Com o novo produto FaleMais da Telzir Ut finibus, est non tristique
        cursus, urna ex facilisis lectus, nec porttitor lacus velit dapibus
        justo. Aenean ultricies nunc eu rutrum accumsan. Curabitur vel mauris
        hendrerit, faucibus nulla id, porttitor risus. Suspendisse molestie sed
        sem ut mollis. Nulla non tincidunt tortor. Vestibulum ipsum risus,
        interdum ut fermentum eget, egestas sit amet est. Phasellus vitae
        ullamcorper elit. Suspendisse vel mauris non ipsum scelerisque mollis.
      </Description>

      <Separator />
    </Container>

    <Simulator />
  </Fragment>
);

export default Main;

import React from 'react';
import Notifications from '~/components/Notifications';
import logo from '~/assets/logo-roxa.svg';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber"/>
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
        <Notifications />


          <Profile>
            <div>
              <strong>Leonio Santos</strong>
              <Link to="/profile" >Meu Perfil</Link>
            </div>
            <img src="https://api.adorable.io/avatars/50/abott@adorable.png" alt="Leonio Santos"/>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

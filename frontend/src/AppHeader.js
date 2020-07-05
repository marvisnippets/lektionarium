import React from 'react'
import {Container, Dropdown, Image, Menu} from 'semantic-ui-react'

const AppHeader = () => (
  <Menu fixed='top' inverted>
    <Container>
      <Menu.Item as='a' header>
        <Image
          size='mini'
          src='/logo_notext.svg'
          style={{marginRight: '1.5em'}}
        />
        Lektionarium
      </Menu.Item>
      <Dropdown item simple text='Ladda hem'>
        <Dropdown.Menu>
          <Dropdown.Item href='/ical/2020' target='_blank'>2020</Dropdown.Item>
          <Dropdown.Item href='/ical/2021' target='_blank'>2021</Dropdown.Item>
          <Dropdown.Item href='/ical/2022' target='_blank'>2022</Dropdown.Item>
          <Dropdown.Item href='/ical/2023' target='_blank'>2023</Dropdown.Item>
          <Dropdown.Item href='/ical/2024' target='_blank'>2024</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  </Menu>
);

export default AppHeader;

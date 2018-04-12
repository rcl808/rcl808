import React from 'react';
import { Header, Container, List, Item } from 'semantic-ui-react';

class CreateClub extends React.Component {
  render() {
    return (
        <div>
          <Header as='h1' textAlign='left'>Forming an RIO (Registered Independent Organization)</Header>
          <Container text>
            <Item>Forming an RIO requires at least 6 current UH Manoa students, faculty or staff members with a shared interest in establishing, developing, representing and being responsible for the proposed organization. All organizations must complete the folling registration steps:</Item>
            <List bulleted>
              <List.item>Submit RIO Application <a href="http://www.manoa.hawaii.edu/studentlife/studentorg/rio/forms/RIO_Application_AY_2017-2018.pdf">(Application)</a></List.item>
              <List.item>Create a Constitution <a href="http://www.manoa.hawaii.edu/studentlife/leadership/Sample_Constitution.pdf">(Sample Constitution)</a></List.item>
              <List.item>Attend the RIO Orientation <a href="http://www.manoa.hawaii.edu/studentlife/studentorg/rio/orientation.php">(Dates & Times)</a></List.item>
            </List>
            <Item>New clubs are only added to Rad Club List from the list of registered RIO's so please apply early in the semester.</Item>
          </Container>
        </div>
    );
  }
}

export default CreateClub;

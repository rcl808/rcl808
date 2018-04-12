import React from 'react';
import { Header, Container, List, Item, Grid } from 'semantic-ui-react';

class CreateClub extends React.Component {
  render() {
    return (
        <div>
          <div className='create-club-page'>
            <Grid divided='vertically' stackable center container>
              <Grid.Row columns={1}>
                <Grid.Column textAlign='center'>
                  <Header as='h1' inverted>Start a new Club</Header>
                  <Header as='h3' inverted>Time to #MakeManoaOurs</Header>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
          <div className='create-club-info'>
          <Container text>
            <Header as='h1' textAlign='left'>Forming an RIO (Registered Independent Organization)</Header>
            <Item>Forming an RIO requires at least 6 current UH Manoa students, faculty or staff members with a shared interest in establishing, developing, representing and being responsible for the proposed organization. All organizations must complete the folling registration steps:</Item>
            <List bulleted>
              <List.Item>Submit RIO Application <a href="http://www.manoa.hawaii.edu/studentlife/studentorg/rio/forms/RIO_Application_AY_2017-2018.pdf">(Application)</a></List.Item>
              <List.Item>Create a Constitution <a href="http://www.manoa.hawaii.edu/studentlife/leadership/Sample_Constitution.pdf">(Sample Constitution)</a></List.Item>
              <List.Item>Attend the RIO Orientation <a href="http://www.manoa.hawaii.edu/studentlife/studentorg/rio/orientation.php">(Dates & Times)</a></List.Item>
            </List>
            <Item>New clubs are only added to Rad Club List from the list of registered RIO so please apply early in the semester.</Item>
          </Container>
          </div>
        </div>
    );
  }
}

export default CreateClub;

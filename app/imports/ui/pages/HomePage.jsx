import React from 'react';
import { Grid, Header, Image, Container } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class HomePage extends React.Component {
  render() {
    return (
        <div className='homepage'>
          <Container>
            <Header as='h1'>Explore by Category</Header>
            <br/>
          </Container>
          <Grid stackable center container>
            <Grid.Row columns={4}>
              <Grid.Column textAlign='left'>
                <Image rounded src='/images/academic.jpg' />
                <Header as='h3'>Academic/Professional</Header>
              </Grid.Column>
              <Grid.Column textAlign='left'>
                <Image rounded src='/images/sport.jpg' />
                <Header as='h3'>Sports/Leisure</Header>
              </Grid.Column>
              <Grid.Column textAlign='left'>
                <Image rounded src='/images/religous.jpg' />
                <Header as='h3'>Religious/Recreational</Header>
              </Grid.Column>
              <Grid.Column textAlign='left'>
                <Image rounded src='/images/sorority.jpg' />
                <Header as='h3'>Sorority/Fraternity</Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={4}>
              <Grid.Column textAlign='left'>
                <Image rounded src='/images/culture.jpg' />
                <Header as='h3'>Ethnic/Cultural</Header>
              </Grid.Column>
              <Grid.Column textAlign='left'>
                <Image rounded src='/images/student.jpg' />
                <Header as='h3'>Student Affairs</Header>
              </Grid.Column>
              <Grid.Column textAlign='left'>
                <Image rounded src='/images/honor.jpg' />
                <Header as='h3'>Honorary Society</Header>
              </Grid.Column>
              <Grid.Column textAlign='left'>
                <Image rounded src='/images/election.JPG' />
                <Header as='h3'>Election</Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}

export default HomePage;

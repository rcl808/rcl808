import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Grid, Header, Image, Container, Button, Segment } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';


/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div>
        <div className='digits-background'>
          <Grid divided='vertically' stackable center container>
            <Grid.Row columns={1}>
              <Grid.Column textAlign='center'>
                <Header as='h1' inverted>What do you love?</Header>
                <Header as='h3' inverted>#MakeManoaYours with Rad Club List</Header>
                {Meteor.user() ? (
                    <Button as={NavLink} exact to="/allclub" content='Explore Clubs' color='google plus' />
                ) :
                    <Button as={NavLink} exact to="/signup" content='Sign Up' color='google plus' />
                }
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
          <div className='below-landing-picture'>
            <Container textAlign='center'>
              <Header as='h4' inverted>
            We are home of more than 200 current Registered Independent Organizations (RIOs) at the University of Hawaiʻi at Mānoa serve the campus and greater community by providing leadership development for students and by promoting community spirit, activism, public service, and social, recreational, and cultural interaction among UHM students, faculty, and staff.
              </Header>
            </Container>
          </div>
          <div className='homepage'>
            <Container>
              <Header as='h1'>Explore by Category</Header>
              <br/>
            </Container>
            <Grid stackable center container>
              <Grid.Row columns={4}>
                <Grid.Column textAlign='left'>
                  <a href="/#/allclub">
                    <Segment>
                      <Image rounded src='/images/academic.jpg' />
                      <Header as='h3'>Academic/Professional</Header>
                    </Segment>
                  </a>
                </Grid.Column>
                <Grid.Column textAlign='left'>
                  <a href="/#/allclub">
                    <Segment>
                      <Image rounded src='/images/sport.jpg' />
                      <Header as='h3'>Sports/Leisure</Header>
                    </Segment>
                  </a>
                </Grid.Column>
                <Grid.Column textAlign='left'>
                  <a href="/#/allclub">
                    <Segment>
                      <Image rounded src='/images/religous.jpg' />
                      <Header as='h3'>Religious/Recreational</Header>
                    </Segment>
                  </a>
                </Grid.Column>
                <Grid.Column textAlign='left'>
                  <a href="/#/allclub">
                    <Segment>
                      <Image rounded src='/images/sorority.jpg' />
                      <Header as='h3'>Sorority/Fraternity</Header>
                    </Segment>
                  </a>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={4}>
                <Grid.Column textAlign='left'>
                  <a href="/#/allclub">
                    <Segment>
                      <Image rounded src='/images/culture.jpg' />
                      <Header as='h3'>Ethnic/Cultural</Header>
                    </Segment>
                  </a>
                </Grid.Column>
                <Grid.Column textAlign='left'>
                  <a href="/#/allclub">
                    <Segment>
                      <Image rounded src='/images/student.jpg' />
                      <Header as='h3'>Student Affairs</Header>
                    </Segment>
                  </a>
                </Grid.Column>
                <Grid.Column textAlign='left'>
                  <a href="/#/allclub">
                    <Segment>
                      <Image rounded src='/images/honor.jpg' />
                      <Header as='h3'>Honorary Society</Header>
                    </Segment>
                  </a>
                </Grid.Column>
                <Grid.Column textAlign='left'>
                  <a href="/#/allclub">
                    <Segment>
                      <Image rounded src='/images/election.JPG' />
                      <Header as='h3'>Election</Header>
                    </Segment>
                  </a>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </div>
    );
  }
}


export default Landing;

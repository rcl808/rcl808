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
                <Image rounded src='/images/placeholder.png' />
                <Header as='h3'>Outdoors & Adventure</Header>
              </Grid.Column>
              <Grid.Column textAlign='left'>
                <Image rounded src='/images/placeholder.png' />
                <Header as='h3'>Tech</Header>
              </Grid.Column>
              <Grid.Column textAlign='left'>
                <Image rounded src='/images/placeholder.png' />
                <Header as='h3'>Family</Header>
              </Grid.Column>
              <Grid.Column textAlign='left'>
                <Image rounded src='/images/placeholder.png' />
                <Header as='h3'>Health & Wellness</Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={4}>
              <Grid.Column textAlign='left'>
                <Image rounded src='/images/placeholder.png' />
                <Header as='h3'>Sports & Fitness</Header>
              </Grid.Column>
              <Grid.Column textAlign='left'>
                <Image rounded src='/images/placeholder.png' />
                <Header as='h3'>Learning</Header>
              </Grid.Column>
              <Grid.Column textAlign='left'>
                <Image rounded src='/images/placeholder.png' />
                <Header as='h3'>Photography</Header>
              </Grid.Column>
              <Grid.Column textAlign='left'>
                <Image rounded src='/images/placeholder.png' />
                <Header as='h3'>Food & Drink</Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}

export default HomePage;

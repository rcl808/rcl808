import React from 'react';
import { Container, Grid, Header, Icon } from 'semantic-ui-react';


/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = { paddingTop: '60px', color: 'black' };
    return (
        <footer>
          <div className='footer-background'>
            <Container textAlign='center'>
              <Header as='h1' inverted>How Rad Club List Works</Header>
              <br/>
              <Grid container verticalAlign='middle' columns={4}>
                <Grid.Column textAlign='right'>
                  <Icon name='search' size='huge' color='blue' />
                </Grid.Column>
                <Grid.Column textAlign='left'>
                  <Header as='h2' inverted>Find a Club</Header>
                  Discover UH Clubs
                  <br/>
                  <a href="">
                    Explore
                    <Icon name='arrow right' color='blue' />
                  </a>
                </Grid.Column>
                <Grid.Column textAlign='right'>
                  <Icon name='add' size='huge' color='blue' />
                </Grid.Column>
                <Grid.Column textAlign='left'>
                  <Header as='h2' inverted>Create a Club</Header>
                  Create your own club to make UH Manoa the best place to be.
                  <br/>
                  <a href="">
                    Create a Club
                    <Icon name='right arrow' color='blue' />
                  </a>
                </Grid.Column>
              </Grid>
            </Container>
          </div>
        </footer>
    );
  }
}

export default Footer;

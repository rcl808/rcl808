import React from 'react';
import { Container, Grid, Header, Icon } from 'semantic-ui-react';


/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
      return (
        <footer>
          <div className='footer-background'>
            <Container textAlign='center'>
              <Grid container verticalAlign='middle' columns={4}>
                <Grid.Row>
                <Grid.Column textAlign='right'>
                  <Icon name='search' size='huge' color='blue' />
                </Grid.Column>
                <Grid.Column textAlign='left'>
                  <Header as='h3' inverted>Find a Club</Header>
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
                  <Header as='h3' inverted>Create a Club</Header>
                  Create your own club to make UH Manoa the best place to be.
                  <br/>
                  <a href="">
                    Create a Club
                    <Icon name='right arrow' color='blue' />
                  </a>
                </Grid.Column>
                </Grid.Row>
              <Grid.Row>
                <Container>
                  <div>
                  <hr/>
                  </div>
                </Container>
              </Grid.Row>
              </Grid>
              <Header as='h2' inverted>
                <Header.Content inverted>
                  Rad Club List
                  <Header.Subheader inverted>
                    University of Hawaii at Manoa
                    <br/>
                    Honolulu, HI 96822
                  </Header.Subheader>
                </Header.Content>
              </Header>
            </Container>
          </div>
        </footer>
    );
  }
}

export default Footer;

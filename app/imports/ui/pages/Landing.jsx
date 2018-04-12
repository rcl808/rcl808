import React from 'react';
import { Grid, Header, Button } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className='digits-background'>
          <Grid divided='vertically' stackable center container>
            <Grid.Row columns={1}>
              <Grid.Column textAlign='center'>
                <Header as='h1' inverted>What do you love?</Header>
                <Header as='h3' inverted>#MakeManoaYours with Rad Club List</Header>
                <Button content='Explore' color='google plus' />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}

export default Landing;

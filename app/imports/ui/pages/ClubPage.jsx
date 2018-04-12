import React from 'react';
import { Container, Header, Segment, Icon, Grid, Image } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class ClubPage extends React.Component {
  render() {
    return (
        <div>
          <Container className='clubpage-name' text center={true}>
            <p>Wednesday, April 11, 2018</p>
            <Header className='clubpage-name' as='h1'>Athletic Training Student Society</Header>
            <Grid>
              <Grid.Row columns={2}>
                <Grid.Column width={2}>
                  <Image src='/images/student.jpg' avatar/>
                </Grid.Column>
                <Grid.Column width={14}>
                  <p>Hosted by <a href="#">Jeff</a> <br/>
                    From <a href="#">Athletic Training Student Society</a></p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
          <Container className='clubpage-bottom-background'>
          <Grid columns={2} stackable centered className='bottomgrid'>
            <Grid.Column>
                  <Header size='large'>Details</Header>
                  <p>We will meet weekly on Wednesdays 12:15-1:15pm and brainstorm, feeding off each other's ideas of how
                    to #StepItUp in life, sharing our achievements and growing together. Everyone will pay it forward by referring their friends and we all rise together. Remember that there are no stupid questions. Jeff will moderate.<br/>
                    Capping it as we are striving for quality time.
                </p>
            </Grid.Column>
            <Grid.Column>
                <Segment compact>
                  <Icon size='small' name='wait'/>
                  <p>Wednesday, April 11, 2018<br/>
                    12:15 PM to 1:15 PM<br/>
                    Every Week on Wednesday<br/>
                    <a href="#">Add to calendar</a></p>
                </Segment>
            </Grid.Column>
          </Grid>
          </Container>
        </div>
    );
  }
}

export default ClubPage;

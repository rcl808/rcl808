import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Segment, Icon, Grid, Image, Button } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Clubs } from '/imports/api/club/club';
import { UserClubs } from '/imports/api/userclubs/userclubs';

/** A simple static component to render some text for the landing page. */
class ClubPage extends React.Component {
  OnClickJoin() {
    UserClubs.add
  }


render()
{
  return (
      <div>
        <Container className='clubpage-name' text center={true}>
          <Header className='clubpage-name' align="center" as='h1'>{this.props.club.nameOfOrganization}</Header>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column width={2}>
                <Image src='/images/student.jpg' avatar/>
              </Grid.Column>
              <Grid.Column width={14}>
                <p>Contact person <a href="#">{this.props.club.contactPerson}</a> <br/>
                  Email: <a href="#">{this.props.club.email}</a></p>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Button onClick={}
            </Grid.Row>
          </Grid>
        </Container>
        <Container className='clubpage-bottom-background'>
          <Grid columns={2} stackable centered className='bottomgrid'>
            <Grid.Column>
              <Header size='large'>Details</Header>
              <p>We will meet weekly on Wednesdays 12:15-1:15pm and brainstorm, feeding off each other's ideas of how
                to #StepItUp in life, sharing our achievements and growing together. Everyone will pay it forward by
                referring their friends and we all rise together. Remember that there are no stupid
                questions. {this.props.club.contactPerson} will moderate.<br/>
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

ClubPage.propTypes = {
  club: PropTypes.object.isRequired,
  clubs: PropTypes.array.isRequired,
  userClubs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

  /** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(( {match}) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const clubId = match.params._id;
  // Get access to the list of clubs.
  const subscription = Meteor.subscribe('Clubs');
  const subscription2 = Meteor.subscribe('UserClubs');
  return {
  club: Clubs.findOne(clubId),
  userClubs: UserClubs.find({}).fetch(),
  clubs: Clubs.find({}).fetch(),
  ready: subscription.ready() && subscription2.ready(),
};
})(ClubPage);

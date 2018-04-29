import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Segment, Icon, Grid, Image, Button } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Clubs } from '/imports/api/club/club';
import { UserClubs } from '/imports/api/userclubs/userclubs';
import { Bert } from 'meteor/themeteorchef:bert';
import { NavLink } from 'react-router-dom';

/** A simple static component to render some text for the landing page. */
class ClubPage extends React.Component {

  constructor(props) {
    super(props);
    this.onClickLeave = this.onClickLeave.bind(this);
    this.inClub = this.inClub.bind(this);
    this.insertCallback = this.insertCallback.bind(this);
    this.deleteCallback = this.deleteCallback.bind(this);
  }

  insertCallback(error) {
    if (error) {
      Bert.alert({ type: 'danger', message: `Error: ${error.message}` });
    } else {
      Bert.alert({ type: 'success', message: `You've joined ${this.props.club.nameOfOrganization}!` });
    }
  }

  deleteCallback(error) {
    if (error) {
      Bert.alert({ type: 'danger', message: `Error: ${error.message}` });
    } else {
      Bert.alert({ type: 'success', message: `You've left ${this.props.club.nameOfOrganization}.` });
    }
  }

  onClickJoin = () => {
    const user = Meteor.user().username;
    const club = this.props.club.nameOfOrganization;
    UserClubs.insert({ user, club }, this.insertCallback);
  }

  onClickLeave = () => {
    const username = Meteor.user().username;
    const clubName = this.props.club.nameOfOrganization;
    const id = _.findWhere(this.props.userClubs, { user: username, club: clubName });
    UserClubs.remove(id._id, this.deleteCallback);
  }

  inClub = () => {
    const myClubList = _.pluck(this.props.userClubs, 'club');
    console.log(myClubList);
    if (_.contains(myClubList, this.props.club.nameOfOrganization)) {
      return true;
    }
    return false;
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
              {/** Need the () for inClub, but not for onClickLeave & onClickJoin for some reason */}
              {this.inClub() ? (
                  <Button negative onClick={this.onClickLeave}>Leave Club</Button>
              ) :
                  <Button positive onClick={this.onClickJoin}>Join Club</Button>}
            </Grid.Row>
          </Grid>
        </Container>
        <Container className='clubpage-bottom-background'>
          <Grid columns={2} stackable centered className='bottomgrid'>
            <Grid.Column>
              <Header size='large'>Details</Header>
              <p>{this.props.club.description}</p>
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
export default withTracker(({ match }) => {
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

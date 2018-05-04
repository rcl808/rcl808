import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card } from 'semantic-ui-react';
import { Clubs } from '/imports/api/club/club';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import Club from '/imports/ui/components/Club';
import { UserClubs } from '/imports/api/userclubs/userclubs';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class MyClubs extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader>Getting data</Loader>;
  }

  /** Filtering by user is done by Meteor.publish. Reduces UserClubs database down to just club names, then matches
   * that club name field with the data in the Clubs database to create an array of the relevant clubs' data */
  filterClubs() {
    const myClubList = _.pluck(this.props.userClubs, 'club');
    const myClubs = _.sortBy(_.flatten(_.map(myClubList, (name) =>
        _.where(this.props.clubs, { nameOfOrganization: name }))), 'nameOfOrganization');
    return myClubs;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <div className='my-clubs-page'>
          <Container>
            <Header as="h2" textAlign="center">My Clubs</Header>
            <Card.Group>
              {this.filterClubs().map((clubs, index) => <Club key={index} club={clubs}/>)}
            </Card.Group>
          </Container>
        </div>
    );
  }
}

/** Require an array of Stuff documents in the props. */
MyClubs.propTypes = {
  clubs: PropTypes.array.isRequired,
  userClubs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to the list of clubs.
  const subscription = Meteor.subscribe('Clubs');
  const subscription2 = Meteor.subscribe('UserClubs');
  return {
    userClubs: UserClubs.find({}).fetch(),
    clubs: Clubs.find({}).fetch(),
    ready: subscription.ready() && subscription2.ready(),
  };
})(MyClubs);

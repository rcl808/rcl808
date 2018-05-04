import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Table, Button, Header, Loader, Card, Menu, Dropdown } from 'semantic-ui-react';
import { Clubs } from '/imports/api/club/club';
import Club from '/imports/ui/components/Club';
import ListClub from '/imports/ui/components/ListClub';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class MyClubsAdmin extends React.Component {

  state = { value: 'All' }

  handleButtonClick = () => this.setState({ active: !this.state.active })

  handleMenuClick = (e, { name }) => this.setState({ activeItem: name })

  handleDropdown = (e, { value }) => this.setState({ value })

  /** Options for the dropdown menu. The value field is passed to filterClubs to sort by category. */
  categories = [
    { key: 1, text: 'All', value: 'All' },
    { key: 2, text: 'Academic/Professional', value: 'Academic/Professional' },
    { key: 3, text: 'Sports/Leisure', value: 'Sports/Leisure' },
    { key: 4, text: 'Religious/Spiritual', value: 'Religious/Spiritual' },
    { key: 5, text: 'Sorority/Fraternity', value: 'Sorority/Fraternity' },
    { key: 6, text: 'Ethic/Cultural', value: 'Ethic/Cultural' },
    { key: 7, text: 'Student Affairs', value: 'Student Affairs' },
    { key: 8, text: 'Honorary Society', value: 'Honorary Society' },
    { key: 9, text: 'Election', value: 'Election' }
  ]

  filterClubs(category) {
    const clubList =
        (category === 'All' || category === '') ? this.props.clubs : _.where(this.props.clubs, { type: category });
    return clubList;
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    const { active } = this.state;
    const { value } = this.state;

    return (
        <div className='my-clubs-page'>
          <Container>
            <Header as="h2" textAlign="center">Clubs List</Header>
            <Menu>
              <Menu.Item header>Select Category</Menu.Item>
              <Menu.Item>
                <Dropdown onChange={this.handleDropdown} options={this.categories} selection defaultValue={'All'}
                          value={value}/>
              </Menu.Item>
              <Menu.Item position='right'>
                <Button.Group>
                  <Button toggle active={!active} onClick={this.handleButtonClick}>
                    Cards
                  </Button>
                  <Button toggle active={active} onClick={this.handleButtonClick}>
                    List
                  </Button>
                </Button.Group>
              </Menu.Item>
            </Menu>
            {active ? (
                    <Table fixed singleLine>
                      <Table.Header>
                        <Table.Row>
                          <Table.HeaderCell width={5}>Club Name</Table.HeaderCell>
                          <Table.HeaderCell width={3}>Category</Table.HeaderCell>
                          <Table.HeaderCell width={2}>Website</Table.HeaderCell>
                          <Table.HeaderCell width={6}>Description</Table.HeaderCell>
                        </Table.Row>
                      </Table.Header>

                      <Table.Body>
                        {this.filterClubs(value).map((club, index) => <ListClub key={index} club={club}/>)}
                      </Table.Body>
                    </Table>
                ) :
                (
                    <Card.Group>
                      {this.filterClubs(value).map((club, index) => <Club key={index} club={club}/>)}
                    </Card.Group>
                )}
          </Container>
        </div>
    );
  }
}

/** Require an array of Stuff documents in the props. */
MyClubsAdmin.propTypes = {
  clubs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Clubs');
  return {
    clubs: Clubs.find({}, { sort: { nameOfOrganization: 1 } }).fetch(),
    ready: subscription.ready(),
  };
})(MyClubsAdmin);

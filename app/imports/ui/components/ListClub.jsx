import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class ListClub extends React.Component {
  render() {
    return (
        <Table.Row>
          <Table.Cell>
            <Link to={`/club/${this.props.club._id}`}>
              {this.props.club.nameOfOrganization}
            </Link>
          </Table.Cell>
          <Table.Cell>{this.props.club.type}</Table.Cell>
          <Table.Cell>
            {this.props.club.rioWebsite ? (
                <a href={this.props.club.rioWebsite}>Website</a>
            ) : ''}
          </Table.Cell>
          <Table.Cell>{this.props.club.description}</Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
ListClub.propTypes = {
  club: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(ListClub);

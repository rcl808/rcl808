import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link, NavLink } from 'react-router-dom';
import {Bert} from 'meteor/themeteorchef:bert';
import { Clubs } from '/imports/api/club/club';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Club extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  deleteCallback(error) {
    if (error) {
      Bert.alert({ type: 'danger', message: `Delete failed: ${error.message}` });
    } else {
      Bert.alert({ type: 'success', message: 'Delete succeeded' });
    }
  }

  onClick() {
    Clubs.remove(this.props.club._id, this.deleteCallback);
  }

  render() {
    return (
        <Card centered>
          <Image src={this.props.club.image} />
          <Card.Content>
            <Card.Header>
              {this.props.club.nameOfOrganization}
            </Card.Header>
            <Card.Description>
              {this.props.club.type}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            {this.props.club.rioWebsite ? (
                <a href={this.props.club.rioWebsite}>Website</a>
            ) : ''}
            </Card.Content>
          <Card.Content extra>
            {this.props.club.facebook ? (
                [<a href={this.props.club.facebook} key={this.props.club.facebook}>
                  <Icon size='big' color='blue' name='facebook square' key={this.props.club.facebook}/>
                </a>]
            ) : ''}
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
Club.propTypes = {
  club: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Club);

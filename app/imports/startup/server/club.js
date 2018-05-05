import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Clubs } from '../../api/club/club.js';

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.nameOfOrganization} (${data.owner})`);
  Clubs.insert(data);
}

/** Initialize the collection if empty. */
if (Clubs.find().count() === 0) {
  if (Meteor.settings.defaultClubs) {
    console.log('Creating default clubs.');
    Meteor.settings.defaultClubs.map(data => addData(data));
  }
}

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Clubs', function publish() {
    return Clubs.find();
});

/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
Meteor.publish('ClubsAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Clubs.find();
  }
  return this.ready();
});

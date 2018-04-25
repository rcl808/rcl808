import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { UserClubs } from '../../api/userclubs/userclubs.js';

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.user} (${data.club})`);
  UserClubs.insert(data);
}

/** Initialize the collection if empty. */
if (UserClubs.find().count() === 0) {
  if (Meteor.settings.defaultUserClubs) {
    console.log('Creating User Clubs.');
    Meteor.settings.defaultUserClubs.map(data => addData(data));
  }
}

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('UserClubs', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return UserClubs.find({ user: username });
  }
  return this.ready();
});

/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
Meteor.publish('UserClubsAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return UserClubs.find();
  }
  return this.ready();
});

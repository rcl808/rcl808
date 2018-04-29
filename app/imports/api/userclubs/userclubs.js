import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const UserClubs = new Mongo.Collection('UserClubs');

/** Create a schema to constrain the structure of documents associated with this collection. */
const UserClubsSchema = new SimpleSchema({
  user: String,
  club: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
UserClubs.attachSchema(UserClubsSchema);

/** Make the collection and schema available to other code. */
export { UserClubs, UserClubsSchema };

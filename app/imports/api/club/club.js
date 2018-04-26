import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const Clubs = new Mongo.Collection('Clubs');

/** Create a schema to constrain the structure of documents associated with this collection. */
const ClubSchema = new SimpleSchema({
  nameOfOrganization: String,
  type: {
    type: String,
    allowedValues: ['Academic/Professional', 'Sports/Leisure', 'Religious/Recreational', 'Sorority/Fraternity', 'Ethic/Cultural', 'Student Affairs', 'Honorary Society', 'Election'],
    defaultValue: 'Academic/Professional',
  },
  contactPerson: String,
  image: String,
  email: {
    type: String,
    optional: true,
  },
  rioWebsite: {
    type: String,
    optional: true,
  },
  socialNetwork: {
    type: String,
    optional: true,
  },
  facebook: {
    type: String,
    optional: true,
  },
  description: String,
  owner: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Clubs.attachSchema(ClubSchema);

/** Make the collection and schema available to other code. */
export { Clubs, ClubSchema };

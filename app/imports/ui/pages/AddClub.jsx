import React from 'react';
import { Clubs, ClubSchema } from '/imports/api/club/club';
import { Grid, Segment, Header } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import LongTextField from 'uniforms-semantic/LongTextField';
import SelectField from 'uniforms-semantic/SelectField';
import SubmitField from 'uniforms-semantic/SubmitField';
import HiddenField from 'uniforms-semantic/HiddenField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import { Bert } from 'meteor/themeteorchef:bert';
import { Meteor } from 'meteor/meteor';

/** Renders the Page for adding a document. */
class AddClub extends React.Component {

  /** Bind 'this' so that a ref to the Form can be saved in formRef and communicated between render() and submit(). */
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.render = this.render.bind(this);
    this.insertCallback = this.insertCallback.bind(this);
    this.formRef = null;
  }

  /** Notify the user of the results of the submit. If successful, clear the form. */
  insertCallback(error) {
    if (error) {
      Bert.alert({ type: 'danger', message: `Add failed: ${error.message}` });
    } else {
      Bert.alert({ type: 'success', message: 'Add succeeded' });
      this.formRef.reset();
    }
  }

  /** On submit, insert the data. */
  submit(data) {
    const { nameOfOrganization, type, contactPerson, image, email, rioWebiste, socialNetwork, description } = data;
    const owner = Meteor.user().username;
    Clubs.insert({ nameOfOrganization, type, contactPerson, image, email, rioWebiste, socialNetwork, description, owner }, this.insertCallback);
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    return (
        <div>
          <div className='create-club-page'>
            <Grid divided='vertically' stackable center container>
              <Grid.Row columns={1}>
                <Grid.Column textAlign='center'>
                  <Header as='h1' inverted>Start a new Club</Header>
                  <Header as='h3' inverted>Time to #MakeManoaOurs</Header>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
          <div className='submit-form'>
        <Grid container centered>
          <Grid.Column>
            <AutoForm ref={(ref) => { this.formRef = ref; }} schema={ClubSchema} onSubmit={this.submit}>
              <Segment>
                <TextField name='nameOfOrganization'/>
                <SelectField name='type'/>
                <TextField name='contactPerson'/>
                <TextField name='image'/>
                <TextField name='email'/>
                <TextField name='rioWebsite'/>
                <TextField name='socialNetwork'/>
                <LongTextField name='description'/>
                <SubmitField value='Submit'/>
                <ErrorsField/>
                <HiddenField name='owner' value='fakeuser@foo.com'/>
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
          </div>
        </div>
    );
  }
}

export default AddClub;

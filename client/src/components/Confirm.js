import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { List, ListItem, ListItemText, Input } from "@material-ui/core/";
import Button from "@material-ui/core/Button";
import { postSighting } from "../services/profileService";

export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };



  render() {
    const {
      values: { firstName, lastName, email, descripition, postcode, image },
    } = this.props;
    const sighting={
      Name: firstName,
      Lastname: lastName,
      Email: email,
      Picture:image,
      Postcode: postcode
    }


    return (
      <>
        <Dialog open fullWidth maxWidth="sm">
          <AppBar title="Confirm User Data" />
          <List>
            <ListItem>
              <ListItemText primary="First Name" secondary={firstName} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Last Name" secondary={lastName} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Email" secondary={email} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Description" secondary={descripition} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Postcode" secondary={postcode} />
            </ListItem>
            <label htmlFor="contained-button-file">
              <Input
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
              />
             <Button color="primary" variant="contained" onClick={this.continue}>
              Upload Image
            </Button>
            </label>
          </List>

          <br />

          <Button color="secondary" variant="contained" onClick={this.back}>
            Back
          </Button>

          <Button color="primary" variant="contained" onClick={()=> postSighting(sighting)}>
            Confirm & Continue
          </Button>
        </Dialog>
      </>
    );
  }
}

export default Confirm;

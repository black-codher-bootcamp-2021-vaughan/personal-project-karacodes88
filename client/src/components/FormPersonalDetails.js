import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <>
        <div style={{ borderRadius: "20px" }}>
          <Dialog open fullWidth maxWidth="sm">
            <AppBar title="Enter Personal Details" />
            <TextField
              style={{ backgroundColor: "" }}
              placeholder="Enter where you seen asian Hornets"
              label="description"
              onChange={handleChange("description")}
              defaultValue={values.descrpition}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter the postcode"
              label="City"
              onChange={handleChange("postcode")}
              defaultValue={values.postcode}
              margin="normal"
              fullWidth
            />
            <br />

            <Button color="secondary" variant="contained" onClick={this.back}>
              Back
            </Button>

            <Button color="primary" variant="contained" onClick={this.continue}>
              Continue
            </Button>
          </Dialog>
        </div>
      </>
    );
  }
}

export default FormPersonalDetails;

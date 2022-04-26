const mongoose = require("mongoose");
const { Schema } = mongoose;

const profileSchema = new Schema({
  name: String,
  lastname: String,
  location: String,
  email: String,
  pictures:String,
  googleMaps: String,
});

mongoose.model("sightings", profileSchema);

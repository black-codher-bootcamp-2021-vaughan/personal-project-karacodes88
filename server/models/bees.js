const mongoose = require("mongoose");
const { Schema } = mongoose;

const profileSchema = new Schema({
  Name: String,
  Lastname: String,
  Email: String,
  Picture:String,
  Location: { 
    Latitude: Number,
    Longitude: Number,
    
  }
});

mongoose.model("sightings", profileSchema);
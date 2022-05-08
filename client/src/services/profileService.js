// You can create all the fetches to your own APIs and externals APIs here
// This example fetch is specifically for our Profile API and is why the file is called profileService.js
import axios from "axios";

const getAllProfiles = async () => {
  const response = await axios.get(`/api/bees`);

  return response.data || [];
};

const postSighting = async (userDetails)=> {
const postcodeResponse = await axios.get(`https://api.postcodes.io/postcodes/${userDetails.Postcode}`) 

console.log({userDetails, postcodeResponse})
  const sighting ={
    Name: userDetails.Name,
    Lastname: userDetails.Lastname,
    Email: userDetails.Email,
    Picture:userDetails.Picture,
    Location: { 
      Latitude: postcodeResponse.data.result.latitude,
      Longitude: postcodeResponse.data.result.longitude,
      
    }
  }
  const response = await axios.post(`/api/bees`, sighting);

  return response.data || [];
}
// All of the endpoints in this file can be exported below
export { getAllProfiles, postSighting };

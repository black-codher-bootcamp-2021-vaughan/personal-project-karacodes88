import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Map from "./components/Map";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import Info from "./components/Info";
import BasicCard from "./components/Info";
// SERVICES THAT CALL OUR API ENDPOINTS
import { getAllProfiles } from "./services/profileService";
import { UserForm } from "./components/UserForm";
import { Container, Grid, Stack } from "@mui/material";
import NavBar from "./components/NavBar";
import Home from "./components/Home";




function App() {
  const [profiles, setProfiles] = useState(null);

  useEffect(() => {
    console.log("profiles" + profiles);
    console.log("%j", profiles);
    async function getProfiles() {
      if (!profiles) {
        const response = await getAllProfiles();
        setProfiles(response);
      }
    }

    getProfiles();
  }, [profiles]);

  return (
    <Router>
      <Route
        exact
        path="/"
        render={() => (
          <div>
            <NavBar/>
            <Home/>
            <UserForm/>
          </div>
        )}
      />
      <Route
        exact
        path="/about"
        render={() => (
          <div>
           <NavBar/>
            <Container>
              <Grid container spacing={2}>
                
                {console.log(profiles + "profiles")}

                <Grid item xs={4}>
                  <Stack spacing={2}>
                    {profiles && profiles.length > 0 ? (
                      profiles.map((beeAlert) => (
                        <BasicCard sighting={beeAlert}></BasicCard>
                      ))
                    ) : (
                      <p>No profiles found</p>
                    )}
                  </Stack>
                </Grid>
              </Grid>
            </Container>
          </div>
        )}
      />
      <Route exact path="/Map" render={() => <Map profiles={profiles} />} />
    </Router>
  );
}

export default App;

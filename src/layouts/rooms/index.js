// @mui material components
import Grid from '@mui/material/Grid';

// Material Dashboard 2 React components
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';

// Material Dashboard 2 React example components
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import Footer from 'examples/Footer';
import DefaultProjectCard from 'examples/Cards/ProjectCards/DefaultProjectCard';

// Overview page components
import Header from 'layouts/profile/components/Header';

import  { Navigate } from 'react-router-dom'

// Images
import cpp from 'assets/images/Cpp.jpg';
import team1 from 'assets/images/team-1.jpg';
import team2 from 'assets/images/team-2.jpg';
import team3 from 'assets/images/team-3.jpg';
import team4 from 'assets/images/team-4.jpg';
import { useState, useEffect } from 'react';

import axios from 'axios';

function Overview() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://localhost:4003/v1/rooms',
    }).then((response) => {
      setRooms(response.data);
    }).catch((error) => {
      alert(JSON.stringify(error.response));
    });
  });

  if(!localStorage.getItem('isLoggedIn'))
  {
    return <Navigate to="/authentication/sign-in"/>
  }
  else
  {
    return (
      <DashboardLayout>
        <DashboardNavbar />

        <Header>
          <MDBox pt={2} px={2} lineHeight={1.25}>
            <MDTypography variant="h6" fontWeight="medium">
              Rooms
            </MDTypography>
            <MDBox mb={1} />
          </MDBox>
          <MDBox p={2}>
            <Grid container spacing={6}>
              {rooms.map((object, i) => (
                <Grid item xs={12} md={6} xl={3} key={object}>
                  <DefaultProjectCard id={object.id}
                    image={object.picture}
                    label={`Room ${i}`}
                    title={object.name}
                    description={object.description}
                    action={{
                      type: 'internal',
                      route: '/room_view',
                      color: 'info',
                      label: 'join room',
                      room_id: object.id,
                    }}
                    authors={[
                      { image: team1, name: 'Elena Morison' },
                      { image: team2, name: 'Ryan Milly' },
                      { image: team3, name: 'Nick Daniel' },
                      { image: team4, name: 'Peterson' },
                    ]}
                  />
                </Grid>
              ))}
            </Grid>
          </MDBox>
        </Header>
      </DashboardLayout>
    );
  }
}

export default Overview;

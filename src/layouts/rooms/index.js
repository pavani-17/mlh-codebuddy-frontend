/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

// @mui icons
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

// Material Dashboard 2 React components
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';

// Material Dashboard 2 React example components
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import Footer from 'examples/Footer';
import ProfileInfoCard from 'examples/Cards/InfoCards/ProfileInfoCard';
import ProfilesList from 'examples/Lists/ProfilesList';
import DefaultProjectCard from 'examples/Cards/ProjectCards/DefaultProjectCard';

// Overview page components
import Header from 'layouts/profile/components/Header';
import PlatformSettings from 'layouts/profile/components/PlatformSettings';

// Data
import profilesListData from 'layouts/profile/data/profilesListData';

// Images
import homeDecor1 from 'assets/images/home-decor-1.jpg';
import cpp from 'assets/images/Cpp.jpg';
import homeDecor2 from 'assets/images/home-decor-2.jpg';
import homeDecor3 from 'assets/images/home-decor-3.jpg';
import homeDecor4 from 'assets/images/home-decor-4.jpeg';
import team1 from 'assets/images/team-1.jpg';
import team2 from 'assets/images/team-2.jpg';
import team3 from 'assets/images/team-3.jpg';
import team4 from 'assets/images/team-4.jpg';

function Overview() {
  const rooms = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const roomObjects = [];
  const n = 5;
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
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
              <Grid item xs={12} md={6} xl={3}>
                <DefaultProjectCard
                  image={cpp}
                  label={`Room ${i}`}
                  title="C++"
                  description="This is a space for C++ developers. Please feel free to post your questions here."
                  numberOfAuthors={20}
                  action={{
                    type: 'internal',
                    route: '/pages/profile/profile-overview',
                    color: 'info',
                    label: 'view room',
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
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;

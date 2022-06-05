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

// Images
import cpp from 'assets/images/Cpp.jpg';
import team1 from 'assets/images/team-1.jpg';
import team2 from 'assets/images/team-2.jpg';
import team3 from 'assets/images/team-3.jpg';
import team4 from 'assets/images/team-4.jpg';

function Overview() {
  const rooms = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
              <Grid item xs={12} md={6} xl={3} key={object}>
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

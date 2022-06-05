// @mui material components
import Grid from '@mui/material/Grid';

// Material Dashboard 2 React components
import MDBox from 'components/MDBox';

// Material Dashboard 2 React example components
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import Footer from 'examples/Footer';
import ComplexStatisticsCard from 'examples/Cards/StatisticsCards/ComplexStatisticsCard';

// Data
import reportsLineChartData from 'layouts/dashboard/data/reportsLineChartData';

// Dashboard components
import Projects from 'layouts/dashboard/components/Projects';
import OrdersOverview from 'layouts/dashboard/components/OrdersOverview';

import Card from '@mui/material/Card';
import Icon from '@mui/material/Icon';

// Material Dashboard 2 React components
import MDTypography from 'components/MDTypography';

// Material Dashboard 2 React example components
import TimelineItem from 'examples/Timeline/TimelineItem';

// react-router-dom components
import { Link } from 'react-router-dom';

// @mui material components
import Checkbox from '@mui/material/Checkbox';

// Material Dashboard 2 React components
import MDInput from 'components/MDInput';
import MDButton from 'components/MDButton';

// Authentication layout components
import CoverLayout from 'layouts/authentication/components/CoverLayout';

// Images
import bgImage from 'assets/images/bg-sign-up-cover.jpeg';


function Dashboard() {
  const { sales, tasks } = reportsLineChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Bookings"
                count={281}
                percentage={{
                  color: 'success',
                  amount: '+55%',
                  label: 'than lask week',
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="Today's Users"
                count="2,300"
                percentage={{
                  color: 'success',
                  amount: '+3%',
                  label: 'than last month',
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title="Revenue"
                count="34k"
                percentage={{
                  color: 'success',
                  amount: '+1%',
                  label: 'than yesterday',
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="person_add"
                title="Followers"
                count="+91"
                percentage={{
                  color: 'success',
                  amount: '',
                  label: 'Just updated',
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <Card>
                    <MDBox
                    variant="gradient"
                    bgColor="info"
                    borderRadius="lg"
                    coloredShadow="success"
                    mx={2}
                    mt={3}
                    p={3}
                    mb={1}
                    textAlign="center"
                    >
                    <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                        Ask your question
                    </MDTypography>
                    <MDTypography display="block" variant="button" color="white" my={1}>
                        Enter a detailed description of your problem to get instant help!
                    </MDTypography>
                    </MDBox>
                    <MDBox pt={4} pb={3} px={3}>
                    <MDBox component="form" role="form">
                        <MDBox mb={2}>
                        <MDInput type="text" label="Problem Title" variant="standard" fullWidth />
                        </MDBox>
                        <MDBox mb={2}>
                        <MDInput type="text" label="Problem Description" variant="standard" fullWidth />
                        </MDBox>
                        <MDBox mb={2}>
                        <MDInput type="text" label="Priority (High or Normal)" variant="standard" fullWidth />
                        </MDBox>
                        <MDBox mb={2}>
                        <MDInput type="number" label="Tokens" variant="standard" fullWidth />
                        </MDBox>
                        <MDBox mb={2}>
                        <MDInput type="number" label="Time (minutes)" variant="standard" fullWidth />
                        </MDBox>
                        <MDBox mb={2}>
                        <MDInput type="text" label="Tags (comma seperated)" variant="standard" fullWidth />
                        </MDBox>
                        <MDBox mt={4} mb={1}>
                        <MDButton variant="gradient" color="info" fullWidth>
                            Post issue
                        </MDButton>
                        </MDBox>                        
                    </MDBox>
                    </MDBox>
                </Card>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;

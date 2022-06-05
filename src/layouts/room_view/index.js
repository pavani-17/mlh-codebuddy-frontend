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

import { useState } from 'react';
import { Modal} from '@mui/material';


// @mui material components
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

// Material Dashboard 2 React components

// Material Dashboard 2 React examples
import DataTable from 'examples/Tables/DataTable';
import logoXD from 'assets/images/small-logos/logo-xd.svg';
import MDAvatar from 'components/MDAvatar';


function Dashboard() {
  const { sales, tasks } = reportsLineChartData;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const data = () => {
    const avatars = (members) => members.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <MDAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { white } }) => `${borderWidth[2]} solid ${white.main}`,
            cursor: 'pointer',
            position: 'relative',
  
            '&:not(:first-of-type)': {
              ml: -1.25,
            },
  
            '&:hover, &:focus': {
              zIndex: '10',
            },
          }}
        />
      </Tooltip>
    ));
  
    const Company = ({ image, name }) => (
      <MDBox display="flex" alignItems="center" lineHeight={1}>
        <MDAvatar src={image} name={name} size="sm" />
        <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
          {name}
        </MDTypography>
      </MDBox>
    );
  
    return {
      columns: [
        {
          Header: 'issues', accessor: 'issues', width: '45%', align: 'left',
        },
        {
          Header: 'priority', accessor: 'priority', width: '10%', align: 'left',
        },
        { Header: 'tokens', accessor: 'tokens', align: 'center' },
        { Header: 'time', accessor: 'time', align: 'center' },
        { Header: 'tags', accessor: 'tags', align: 'center' },
        { Header: '', accessor: 'button', align: 'center' },
      ],
  
      rows: [
        {
          issues: <Company image={logoXD} name="Material UI XD Version" />,
          priority: (
            <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
            High
            </MDTypography>
          ),
          tokens: (
            <MDTypography variant="caption" color="text" fontWeight="medium">
              14,000
            </MDTypography>
          ),
          time: (
            <MDTypography variant="caption" color="text" fontWeight="medium">
              15
            </MDTypography>
          ),
          tags: (
            <MDBox>
              <MDBox>
              <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
              promises
              </MDTypography>
              </MDBox>
              <MDBox>
              <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
              async
              </MDTypography>
              </MDBox>
            </MDBox>
          ),
          button: (
            <MDBox mt={4} mb={1}>
            <MDButton variant="gradient" color="info" fullWidth onClick={handleOpen}>
                Help
            </MDButton>
            </MDBox>
          )
        }
      ],
    };
  }

  const { columns, rows } = data();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div className='container'>
        <Modal open={open} onClose={handleClose} style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
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
        </Modal>
      </div>
      
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
              <Card>
                <MDBox display="flex" alignItems="center" p={3}>
                  <MDTypography variant="h6" gutterBottom>
                    Unsolved issues
                  </MDTypography>
                </MDBox>
                <MDBox>
                  <DataTable
                    table={{ columns, rows }}
                    showTotalEntries={false}
                    isSorted={false}
                    noEndBorder
                    entriesPerPage={false}
                  />
                </MDBox>
              </Card>
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

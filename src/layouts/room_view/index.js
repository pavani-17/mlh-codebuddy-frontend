// @mui material components
import Grid from '@mui/material/Grid';

// Material Dashboard 2 React components
import MDBox from 'components/MDBox';

// Material Dashboard 2 React example components
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import ComplexStatisticsCard from 'examples/Cards/StatisticsCards/ComplexStatisticsCard';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';

import Card from '@mui/material/Card';

// Material Dashboard 2 React components
import MDTypography from 'components/MDTypography';

// Material Dashboard 2 React components
import MDInput from 'components/MDInput';
import MDButton from 'components/MDButton';

import { useState, useEffect } from 'react';
import { Modal } from '@mui/material';

// Material Dashboard 2 React examples
import DataTable from 'examples/Tables/DataTable';
import logoXD from 'assets/images/small-logos/logo-xd.svg';
import MDAvatar from 'components/MDAvatar';

import  { Navigate } from 'react-router-dom'

import Pusher from 'pusher-js';
import Push from 'push.js';

import axios from 'axios';

function Dashboard() {
  const [issues, setIssues] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [tokens, setTokens] = useState('');
  const [estimatedTime, setTime] = useState('');
  const [tags, setTags] = useState('');

  var pusher = new Pusher('ef60dccb025588632050', {
    cluster: 'ap2'
  });

  var channel = pusher.subscribe('general');
  channel.bind('general', function(data) {
    // alert(JSON.stringify(data));
    Push.create("Help Needed", {
      body: data.message,
      timeout: 10000,
      onClick: function () {
          window.open(data.meetLink);
          this.close();
      }
    });  
  });


  const onClickHelp = (event) => {
    let id = event.target.id;
    let cur_issue = issues.filter(issue => {
      if(issue.id == id)
      {
        return true;
      }
      return false;
    })
    let meet_link = cur_issue[0].meetLink;
    console.log(cur_issue);
    console.log(meet_link);
    window.open(meet_link);
  }

  const handleSubmit = () => {
    axios({
      method: 'POST',
      url: 'http://localhost:4003/v1/questions',
      data: {
        title,
        description,
        priority,
        tokens,
        estimatedTime,
        "tags" : tags.split(','),
      },
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("token"),
      },
    }).then((response) => {
      var meet_link = response.data.url;
      window.open(meet_link);
    }).catch((error) => {
      console.log(error);
    });
  };

  const data = () => {
    const Company = ({ image, name }) => (
      <MDBox display="flex" alignItems="center" lineHeight={1}>
        <MDAvatar src={image} name={name} size="sm" />
        <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
          {name}
        </MDTypography>
      </MDBox>
    );

    useEffect(() => {
      axios({
        method: 'GET',
        url: 'http://localhost:4003/v1/questions',
      }).then((response) => {
        setIssues(response.data);
      }).catch((error) => {
        console.log(error);
      });
    }, []);

    return {
      columns: [
        {
          Header: 'issues', accessor: 'issues', width: '20%', align: 'left',
        },
        {
          Header: 'description', accessor: 'description', width: '40%%', align: 'left',
        },
        {
          Header: 'priority', accessor: 'priority', width: '10%', align: 'left',
        },
        { Header: 'tokens', accessor: 'tokens', align: 'center' },
        { Header: 'time', accessor: 'time', align: 'center' },
        { Header: 'tags', accessor: 'tags', align: 'center' },
        { Header: '', accessor: 'button', align: 'center' },
      ],

      rows: issues.map((object, i) => (
        {
          issues: <Company image={logoXD} name={object.title} />,
          description: (
            <MDTypography variant="caption" color="text" fontWeight="medium">
            {object.description}
          </MDTypography>
          ),
          priority: (
            <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
              {object.priority}
            </MDTypography>
          ),
          tokens: (
            <MDTypography variant="caption" color="text" fontWeight="medium">
              {object.tokens}
            </MDTypography>
          ),
          time: (
            <MDTypography variant="caption" color="text" fontWeight="medium">
              {object.estimatedTime}
            </MDTypography>
          ),
          tags: (
            <MDBox>
              {object.tags.map((tag, i) => {
                return (
                  <MDBox>
                    <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
                      {tag}
                    </MDTypography>
                  </MDBox>
                )
              })}
            </MDBox>
          ),
          button: (
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth onClick={onClickHelp} id={object.id}>
                Help
              </MDButton>
            </MDBox>
          ),
        }
      )),
    };
  };

  const { columns, rows } = data();

  if(!localStorage.getItem('isLoggedIn'))
  {
    return <Navigate to="/authentication/sign-in" />
  }
  else
  {
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
                  title="New Users"
                  count={2810}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  icon="leaderboard"
                  title="Today's Users"
                  count="1000"
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  color="success"
                  icon="store"
                  title="Total tokens scored"
                  count="34k"
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  color="primary"
                  icon="person_add"
                  title="Total issues solved"
                  count="136"
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
                        <MDInput type="text" label="Problem Title" variant="standard" fullWidth value={title} onChange={(event) => { setTitle(event.target.value); }}/>
                      </MDBox>
                      <MDBox mb={2}>
                        <MDInput type="text" label="Problem Description" variant="standard" fullWidth value={description} onChange={(event) => { setDescription(event.target.value); }} />
                      </MDBox>
                      <MDBox mb={2}>
                        <MDInput type="text" label="Priority (High or Normal)" variant="standard" fullWidth value={priority} onChange={(event) => { setPriority(event.target.value); }} />
                      </MDBox>
                      <MDBox mb={2}>
                        <MDInput type="number" label="Tokens" variant="standard" fullWidth value={tokens} onChange={(event) => { setTokens(event.target.value); }}/>
                      </MDBox>
                      <MDBox mb={2}>
                        <MDInput type="number" label="Time (minutes)" variant="standard" fullWidth value={estimatedTime} onChange={(event) => { setTime(event.target.value); }} />
                      </MDBox>
                      <MDBox mb={2}>
                        <MDInput type="text" label="Tags (comma seperated)" variant="standard" fullWidth value={tags} onChange={(event) => { setTags(event.target.value); }}/>
                      </MDBox>
                      <MDBox mt={4} mb={1}>
                        <MDButton variant="gradient" color="info" fullWidth onClick={handleSubmit}>
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
      </DashboardLayout>
    );
  }
}

export default Dashboard;

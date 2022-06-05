import { useState } from 'react';

import axios from 'axios';

// react-router-dom components
import { Link } from 'react-router-dom';

// @mui material components
import Card from '@mui/material/Card';

// Material Dashboard 2 React components
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';
import MDInput from 'components/MDInput';
import MDButton from 'components/MDButton';

// Authentication layout components
import CoverLayout from 'layouts/authentication/components/CoverLayout';

// Images
import bgImage from 'assets/images/bg-sign-up-cover.jpeg';

function Cover() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    axios({
      method: 'POST',
      url: 'http://localhost:4000/v1/auth/register',
      data: {
        email,
        password,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      localStorage.setItem('token', response.data.accessToken);
      localStorage.setItem('user_id', response.data.user.id);
      localStorage.setItem('isLoggedIn', true);

      alert('Signup successful');
    }).catch((error) => {
      alert(JSON.stringify(error.response));
    });
  };

  return (
    <CoverLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Join us today
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Enter your email and password to register
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="email" label="Email" variant="standard" value={email} onChange={(event) => { setEmail(event.target.value); }} fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="Password" variant="standard" value={password} onChange={(event) => { setPassword(event.target.value); }} fullWidth />
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth onClick={handleSubmit}>
                sign up
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?
                {' '}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;

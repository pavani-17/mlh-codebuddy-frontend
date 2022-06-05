import { useState } from 'react';

// @mui material components
import Card from '@mui/material/Card';
import Icon from '@mui/material/Icon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

// Material Dashboard 2 React components
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';

// Material Dashboard 2 React examples
import DataTable from 'examples/Tables/DataTable';

// Data
import data from 'layouts/dashboard/components/Projects/data';

function Projects() {
  const { columns, rows } = data();

  return (
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
  );
}

export default Projects;

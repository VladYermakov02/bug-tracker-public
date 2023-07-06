import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { TeamData } from '../../data/TeamData';
import TableWrapper from '../../components/Table/TableWrapper';
import PageNaming from '../../utils/PageNaming';
import EmployeeInfoCard from '../../components/ChangeInfoCard/EmployeeInfoCard';
import { useUser } from '../../web/UserProvider';
import myFetch from '../../services/FetchService';

function Organization() {
  const columns = [
    { field: 'name', header: 'Name' },
    { field: 'surname', header: 'Surname' },
    { field: 'username', header: 'Email' },
    { field: 'phone', header: 'Phone' },
    { field: 'position', header: 'position' },
  ];

  const searchQueryKeys = ['name', 'surname', 'username', 'phone', 'position'];

  return (
    <Container>
      <TableWrapper
        // data={employees}
        url="/api/users"
        columns={columns}
        searchQueryKeys={searchQueryKeys}
        pageName={PageNaming.Organization}
        callInfoCard={EmployeeInfoCard}
      />
    </Container>
  );
}

export default Organization;

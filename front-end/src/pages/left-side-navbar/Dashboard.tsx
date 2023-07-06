import { Container } from 'react-bootstrap';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

import { TeamData } from '../../data/TeamData';
import TableWrapper from '../../components/Table/TableWrapper';
import PageNaming from '../../utils/PageNaming';
import ProjectInfoCard from '../../components/ChangeInfoCard/ProjectInfoCard';
import { useUser } from '../../web/UserProvider';

function Dashboard() {
  const columns = [
    { field: 'title', header: 'Title' },
    { field: 'description', header: 'Description' },
    { field: 'note', header: 'Note' },
  ];

  const searchQueryKeys = ['title', 'description', 'note'];
  return (
    <Container>
      <TableWrapper
        url="/api/projects"
        columns={columns}
        searchQueryKeys={searchQueryKeys}
        pageName={PageNaming.Project}
        callInfoCard={ProjectInfoCard}
      />
    </Container>
  );
}

export default Dashboard;

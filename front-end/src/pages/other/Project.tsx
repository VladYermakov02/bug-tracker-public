import { Container, Row } from 'react-bootstrap';

import { TeamData } from '../../data/TeamData';
import TableWrapper from '../../components/Table/TableWrapper';
import PageNaming from '../../utils/PageNaming';
import MyPieChart from '../../components/Chart/MyPieChart';
import EmployeeInfoCard from '../../components/ChangeInfoCard/EmployeeInfoCard';
import ProjectInfoCard from '../../components/ChangeInfoCard/ProjectInfoCard';
import TicketInfoCard from '../../components/ChangeInfoCard/TicketInfoCard';

const columns = [
  { field: 'id', header: '#' },
  { field: 'first_name', header: 'Name' },
  { field: 'last_name', header: 'Surname' },
  { field: 'email', header: 'Email' },
  { field: 'phone', header: 'Phone' },
];

const searchQueryKeys = ['first_name', 'last_name', 'email', 'phone'];

function Project() {
  // return <TableMUI />;
  return (
    <Container>
      <div className="align-me">
        <MyPieChart />
        <MyPieChart />
        <MyPieChart />
      </div>
      <Row>
        <ProjectInfoCard />
      </Row>

      <Row>
        <TableWrapper
          data={TeamData}
          columns={columns}
          searchQueryKeys={searchQueryKeys}
          pageName={PageNaming.Project}
        />
      </Row>
      <Row>
        <EmployeeInfoCard />
      </Row>
      <Row>
        <TableWrapper
          data={TeamData}
          columns={columns}
          searchQueryKeys={searchQueryKeys}
          pageName={PageNaming.Project_Organization}
        />
      </Row>
      <Row>
        <TicketInfoCard />
      </Row>
      <Row>
        <TableWrapper
          data={TeamData}
          columns={columns}
          searchQueryKeys={searchQueryKeys}
          pageName={PageNaming.Project_Tickets}
        />
      </Row>
      <Row>
        <h1>COMMENTS</h1>
      </Row>
    </Container>
  );
}

export default Project;

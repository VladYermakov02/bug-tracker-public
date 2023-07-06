import { Container } from 'react-bootstrap';
import { TeamData } from '../../data/TeamData';
import TableWrapper from '../../components/Table/TableWrapper';
import PageNaming from '../../utils/PageNaming';

const columns = [
  { field: 'id', header: '#' },
  { field: 'first_name', header: 'Name' },
  { field: 'last_name', header: 'Surname' },
  { field: 'email', header: 'Email' },
  { field: 'phone', header: 'Phone' },
];

const searchQueryKeys = ['first_name', 'last_name', 'email', 'phone'];

function Notifications() {
  // return <TableMUI />;
  return (
    <Container>
      <TableWrapper
        data={TeamData}
        columns={columns}
        searchQueryKeys={searchQueryKeys}
        pageName={PageNaming.Notifications}
      />
    </Container>
  );
}

export default Notifications;

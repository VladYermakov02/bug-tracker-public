import { Container, Row } from 'react-bootstrap';
import { TeamData } from '../../data/TeamData';
import TableWrapper from '../../components/Table/TableWrapper';
import PageNaming from '../../utils/PageNaming';
import MyPieChart from '../../components/Chart/MyPieChart';
import TicketInfoCard from '../../components/ChangeInfoCard/TicketInfoCard';
import MyPieChartTicketType from '../../components/Chart/MyPieChartTicketType';
import MyPieChartTicketPriority from '../../components/Chart/MyPieChartTicketPriority';
import MyPieChartTicketStatus from '../../components/Chart/MyPieChartTicketStatus';

const columns = [
  { field: 'ticket', header: 'Ticket' },
  { field: 'description', header: 'Description' },
  { field: 'note', header: 'Note' },
  { field: 'type', header: 'Type' },
  { field: 'status', header: 'Status' },
  { field: 'priority', header: 'Priority' },
];

const searchQueryKeys = [
  'ticket',
  'description',
  'note',
  'type',
  'status',
  'priority',
];

function Tickets() {
  // return <TableMUI />;
  return (
    <Container>
      <div className="align-me">
        {/* TODO: get back later */}
        {/* <MyPieChart />
        <MyPieChart />
        <MyPieChart /> */}
        <MyPieChartTicketType />
        <MyPieChartTicketPriority />
        <MyPieChartTicketStatus />
      </div>
      <Row>
        <TableWrapper
          url="/api/tickets"
          columns={columns}
          searchQueryKeys={searchQueryKeys}
          pageName={PageNaming.Tickets}
          callInfoCard={TicketInfoCard}
        />
      </Row>
    </Container>
  );
}

export default Tickets;

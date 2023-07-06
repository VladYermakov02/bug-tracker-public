import { Card, Container, Row } from 'react-bootstrap';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

function MyPieChartTicketStatus() {
  const COLORS: string[] = [
    '#8884d8',
    '#82ca9d',
    '#FFBB28',
    '#30b0f0',
    '#e64cce',
  ];
  // Sample data
  const data = [
    { name: 'None', value: 1 },
    { name: 'Low', value: 1 },
    { name: 'Medium', value: 1 },
    { name: 'High', value: 1 },
    { name: 'Very High', value: 0 },
  ];
  return (
    <Container fluid className="main-content-container mt-5">
      <Card className="overflow-hidden table-dark">
        <Card.Header as="h5">Status of tickets</Card.Header>
        <Card.Body>
          <Row className="justify-content-center">
            <PieChart width={300} height={250} title="Chart of PU x UV">
              <Pie
                dataKey="value"
                isAnimationActive
                data={data}
                nameKey="name"
                outerRadius={70}
                fill="#8884d8"
                label
                labelLine={false}
              >
                {data.map((entry, index) => (
                  <Cell
                    // eslint-disable-next-line react/no-array-index-key
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default MyPieChartTicketStatus;

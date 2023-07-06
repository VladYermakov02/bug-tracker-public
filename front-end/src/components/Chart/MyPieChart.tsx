import { Card, Container, Row } from 'react-bootstrap';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

function MyPieChart() {
  const COLORS: string[] = ['#8884d8', '#82ca9d', '#FFBB28'];
  // Sample data
  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
  ];
  return (
    <Container fluid className="main-content-container mt-5">
      <Card className="overflow-hidden table-dark">
        <Card.Header as="h5">Table header</Card.Header>
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

export default MyPieChart;

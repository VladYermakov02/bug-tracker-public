import React, { useEffect, useState } from 'react';
import { Row, Container, Card } from 'react-bootstrap';

import { getPaginatedData, getLength } from '../../data/DataGetter';
import SelectLimit from '../Pagination/SelectLimit';
import Pagination from '../Pagination/Pagination';
import Table from './Table';
import PageNaming from '../../utils/PageNaming';
import EmployeeInfoCard from '../ChangeInfoCard/EmployeeInfoCard';
import { useUser } from '../../web/UserProvider';
import myFetch from '../../services/FetchService';
import { TicketsData } from '../../data/TicketsData';

interface Props {
  // data: any;
  url: string;
  columns: { field: string; header: string }[];
  searchQueryKeys: string[];
  pageName: PageNaming;
  callInfoCard: any;
}

function TableWrapper({
  // data,
  url,
  columns,
  searchQueryKeys,
  pageName,
  callInfoCard,
}: Props) {
  const user = useUser();
  const [data, setData] = useState([]);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const totalPage = Math.ceil(getLength(data) / limit);

  // onLoad useEffect
  useEffect(() => {
    // TODO: get back later
    if (pageName === PageNaming.Tickets) {
      window.localStorage.setItem(pageName, JSON.stringify(TicketsData));
      const storedData = window.localStorage.getItem(pageName);
      if (storedData !== null) {
        setData(JSON.parse(storedData));
      }
    } else {
      myFetch(url, 'GET', user.jwt, null).then((responseData) => {
        // Set data to localStorage when data changes
        window.localStorage.setItem(pageName, JSON.stringify(responseData));
      });
      const storedData = window.localStorage.getItem(pageName);
      if (storedData !== null) {
        setData(JSON.parse(storedData));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let pageNo;
  if (page <= totalPage) {
    pageNo = page;
  } else {
    setPage(totalPage);
    pageNo = page;
  }

  function handlePageChange(value: any) {
    if (value === '&laquo;' || value === '... ') {
      setPage(1);
    } else if (value === '&lsaquo;') {
      if (page !== 1) {
        setPage(page - 1);
      }
    } else if (value === '&rsaquo;') {
      if (page !== totalPage) {
        setPage(page + 1);
      }
    } else if (value === '&raquo;' || value === ' ...') {
      setPage(totalPage);
    } else {
      setPage(value);
    }
  }

  const [doShowInfoCard, setDoShowInfoCard] = useState(false);

  function handleEditSubmit(doShowInfoCardVar: boolean) {
    setDoShowInfoCard(doShowInfoCardVar);
  }

  return (
    <Container fluid className="main-content-container my-3">
      {/* TODO: change later depending on the table */}
      {doShowInfoCard && (
        <Row>
          <EmployeeInfoCard />
        </Row>
      )}
      <Card className="overflow-hidden table-dark">
        <Card.Header as="h5">Table header</Card.Header>
        <Card.Body>
          <Row className="justify-content-center">
            <div className="pagination-container">
              <Pagination
                totalPage={totalPage}
                page={pageNo}
                limit={limit}
                siblings={2}
                // eslint-disable-next-line react/jsx-no-bind
                onPageChange={handlePageChange}
              />
              <SelectLimit
                dataLenght={getLength(data)}
                onLimitChange={setLimit}
              />
            </div>

            {/* <div className="pagination-container">
        </div> */}
          </Row>
          <Table
            url={url}
            paginatedData={getPaginatedData(data, page, limit)}
            paginatedDataLength={getLength(data)}
            columns={columns}
            searchQueryKeys={searchQueryKeys}
            pageName={pageName}
            // eslint-disable-next-line react/jsx-no-bind
            handleEditSubmit={handleEditSubmit}
          />
        </Card.Body>
      </Card>
    </Container>
  );
}

export default TableWrapper;

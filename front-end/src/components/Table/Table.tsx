import { useState, useEffect } from 'react';
import { Container, Row, Col, ListGroup, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import PageNaming from '../../utils/PageNaming';
import { getPaginatedData } from '../../data/DataGetter';
import { useUser } from '../../web/UserProvider';
import myFetch from '../../services/FetchService';

interface Props {
  url: string;
  paginatedData: any;
  paginatedDataLength: number;
  columns: { field: string; header: string }[];
  searchQueryKeys: string[];
  pageName: PageNaming;
  handleEditSubmit: (doShowInfoCard: boolean) => void;
}

interface CheckedItem {
  id: number | any;
  checked: boolean;
}

function Table({
  url,
  paginatedData,
  paginatedDataLength,
  columns,
  searchQueryKeys,
  pageName,
  handleEditSubmit,
}: Props) {
  const user = useUser();
  const [data, setData] = useState([]);
  const [dataLength, setDataLength] = useState(data.length);

  // for checkBoxes
  const [checkedCheckboxes, setCheckedCheckboxes] = useState(
    new Array(paginatedDataLength).fill(false)
  );

  useEffect(() => {
    // Get data from localStorage when component mounts
    const storedData = window.localStorage.getItem(pageName);
    if (storedData !== null) {
      setData(JSON.parse(storedData));
      setDataLength(data.length);
    }
    setCheckedCheckboxes(new Array(paginatedDataLength).fill(false));
    console.log('storedData', storedData);
    console.log('data', data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // for search
  const [query, setQuery] = useState('');

  // for sorting
  const [order, setOrder] = useState('ASC');

  const sort = (col: any) => {
    // const col: string = columns[colId].field;
    if (order === 'ASC') {
      const sorted = [...data].sort((a, b) =>
        a[col as keyof typeof a] > b[col as keyof typeof b] ? 1 : -1
      );
      setData(sorted);
      setOrder('DCS');
    }
    if (order === 'DCS') {
      const sorted = [...data].sort((a, b) =>
        a[col as keyof typeof a] < b[col as keyof typeof b] ? 1 : -1
      );
      setData(sorted);
      setOrder('ASC');
    }
  };

  // for selecting one row
  const [selectedRow, setSelectedRow] = useState(null);

  function handleRowClick(event: { currentTarget: any }) {
    const row = event.currentTarget;
    // console.log('row.id', selectedRow);

    setSelectedRow(row.id === selectedRow ? null : row.id);
  }

  // for doubleCLick
  function handleDoubleClick() {
    console.log('Row double-clicked!');
  }

  function fillListOfCheckedCheckboxes() {
    let listOfCheckedCheckboxes: CheckedItem[];
    // eslint-disable-next-line array-callback-return
    data.map((item: any) => {
      console.log('item.id', item.id);

      // const  id : any = item.id;
      // const falseVal : Boolean = false;
      // listOfCheckedCheckboxes.push({id, falseVal} : CheckedItem);
    });
    return null;
  }

  // for checkBoxes
  const [showEditButton, setShowEditButton] = useState(1);
  const [editItemIndex, setEditItemIndex] = useState(-1);

  // TODO: when there is real data, check last elem so it checks correctly
  // TODO: items on the next pages after the first one are not selected when you click on them
  // but if you first click SelectAll then they start working correctly
  const handleCheckboxOnChange = (elemId: number) => {
    let selectedElemPosition: number;
    let i = 0;
    data.forEach((elem: any) => {
      i += 1;
      if (elem.id === elemId) {
        selectedElemPosition = i;
      }
    });
    console.log('checkedCheckboxes', checkedCheckboxes);
    console.log('paginatedDataLength', paginatedDataLength);
    console.log('dataLength', dataLength);

    const updatedCheckedState = checkedCheckboxes.map(
      (item: boolean, index: number) => {
        console.log('item', item);
        console.log('index', index);
        return index === selectedElemPosition - 1 ? !item : item;
      }
    );
    setCheckedCheckboxes(updatedCheckedState);
    console.log('updatedCheckedState', updatedCheckedState);
    // console.log('selectedElemPosition', selectedElemPosition);
    setShowEditButton(checkedCheckboxes.filter(Boolean).length);
    setEditItemIndex(elemId);
    // console.log('showEditButton', showEditButton);
    // console.log('checkedCheckboxes', checkedCheckboxes);
  };

  // TODO: test when there a lot of data (more than one page)
  // for masterCheckBox
  const [isAllChecked, setIsAllChecked] = useState(false);

  const handleMasterCheckboxOnChange = () => {
    // working solution
    setIsAllChecked(!isAllChecked);
    setCheckedCheckboxes(new Array(dataLength).fill(!isAllChecked));

    // console.log('paginatedData', paginatedData.length);
  };

  // for delete button
  function showDeleteButton(): boolean {
    let showDelete = false;
    checkedCheckboxes.forEach((item) => {
      if (item) {
        showDelete = true;
      }
    });
    return showDelete;
  }

  function deleteCheckedItems() {
    if (isAllChecked) {
      data.forEach((item: number) => {
        console.log('delete item', item);
      });
    } else {
      checkedCheckboxes.forEach((item, index) => {
        if (item === true) {
          console.log('delete item', index);
        }
      });
    }
  }

  // to set hedders to upper case
  const setToUpperCaps = (str: string) => {
    return str.toUpperCase();
  };

  // edit
  const [editInfoCardShow, setEditInfoCardShow] = useState(false);

  // function handleCreate() {

  // }

  return (
    <Container fluid className="main-content-container mb-3">
      {/* Page Header */}
      <Row className="justify-content-center mx-1">
        {showDeleteButton() === true && (
          <Col sm={2}>
            <Button
              className="form-control rounded-pill"
              variant="danger"
              onClick={() => deleteCheckedItems()}
            >
              Delete
            </Button>
          </Col>
        )}
        <Col sm={6}>
          <Form>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 rounded-pill"
              aria-label="Search"
              onChange={(event) => setQuery(event.target.value)}
            />
          </Form>
        </Col>
        {showEditButton !== 1 && (
          <Col sm={2}>
            <Button
              className="form-control rounded-pill"
              variant="secondary"
              onClick={() => {
                setEditInfoCardShow(!editInfoCardShow);
                handleEditSubmit(!editInfoCardShow);
                console.log('Edit');
              }}
            >
              {!editInfoCardShow ? 'Edit' : 'Close'}
            </Button>
          </Col>
        )}
        {pageName !== PageNaming.Notifications && (
          <Col sm={2} className="align-self-end">
            <Button
              className="form-control rounded-pill"
              variant="secondary"
              onClick={() => {
                setEditInfoCardShow(!editInfoCardShow);
                handleEditSubmit(!editInfoCardShow);
                console.log('Create');
                // handleCreate();
              }}
            >
              Create
            </Button>
          </Col>
        )}
      </Row>
      <ListGroup variant="flush" as="ul">
        <table className="table table-dark mb-0">
          <thead className="thead-dark">
            <tr>
              <th scope="col" className="border-0">
                <div className="master-checkbox">
                  <input
                    type="checkbox"
                    id="master-checkbox"
                    value=""
                    onChange={() => handleMasterCheckboxOnChange()}
                  />
                </div>
              </th>
              {columns.map((head: any) => (
                <th
                  key={head.header}
                  scope="col"
                  className="border-0 unselectable"
                  onClick={() => sort(head.field)}
                >
                  <FontAwesomeIcon
                    icon={order === 'ASC' ? faSortUp : faSortDown}
                  />{' '}
                  {setToUpperCaps(head.header)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data
              .filter((item: any) => {
                return query.toLowerCase() === ''
                  ? item
                  : searchQueryKeys.some((key: string) =>
                      item[key].toLowerCase().includes(query)
                    );
              })
              .map((item: any) => (
                <tr
                  id="row"
                  key={item.id}
                  onClick={handleRowClick}
                  onDoubleClick={handleDoubleClick}
                  className="table-row-hover cell-class"
                >
                  <td
                    onClick={() => handleCheckboxOnChange(item.id)}
                    aria-hidden="true"
                  >
                    <div className="checkbox">
                      <input
                        type="checkbox"
                        value=""
                        id={`custom-checkbox-${item.id}`}
                        checked={checkedCheckboxes[item.id - 1]}
                        onChange={() => handleCheckboxOnChange(item.id)}
                      />
                    </div>
                  </td>
                  {columns.map((col: any) => (
                    <td key={item[col.field].id}>{item[col.field]}</td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </ListGroup>
      {data.length === 0 && (
        <Row className="justify-content-center mt-5">
          <h1>No item found in database</h1>
        </Row>
      )}
    </Container>
  );
}
export default Table;

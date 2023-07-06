import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

import YetToBeDoneAlert from './YetToBeDoneAlert';

function RegesterWith() {
  return (
    <div
      className="d-flex justify-content-between mx-auto"
      style={{ width: '40%' }}
    >
      <MDBBtn
        tag="a"
        color="none"
        style={{ color: '#1266f1' }}
        onClick={YetToBeDoneAlert()}
      >
        <MDBIcon fab icon="facebook-f" size="sm" />
      </MDBBtn>

      <MDBBtn
        tag="a"
        color="none"
        style={{ color: '#1266f1' }}
        onClick={YetToBeDoneAlert()}
      >
        <MDBIcon fab icon="twitter" size="sm" />
      </MDBBtn>

      <MDBBtn
        tag="a"
        color="none"
        style={{ color: '#1266f1' }}
        onClick={YetToBeDoneAlert()}
      >
        <MDBIcon fab icon="google" size="sm" />
      </MDBBtn>

      <MDBBtn
        tag="a"
        color="none"
        style={{ color: '#1266f1' }}
        onClick={YetToBeDoneAlert()}
      >
        <MDBIcon fab icon="github" size="sm" />
      </MDBBtn>
    </div>
  );
}

export default RegesterWith;

import React, { useEffect, useState } from 'react';
import {
  MDBBtn,
  MDBCheckbox,
  MDBContainer,
  MDBInput,
  MDBTabs,
  MDBTabsContent,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsPane,
  MDBRadio,
  MDBValidation,
  MDBValidationItem,
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import RegesterWith from '../../components/Login/RegesterWith';
import { useUser } from '../../web/UserProvider';

function Login() {
  // switch between login page and register tab
  const [justifyActive, setJustifyActive] = useState('tab1');

  const handleJustifyClick = (value: React.SetStateAction<string>) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };

  // old code Login
  const [loginFormValue, setLoginFormValue] = useState({
    email: '',
    password: '',
  });

  const loginOnChange = (event: any) => {
    setLoginFormValue({
      ...loginFormValue,
      [event.target.name]: event.target.value,
    });
  };

  // old code Registraction
  const [registrationFormValue, setRegistrationFormValue] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    organization: '',
    position: '',
    password: '',
    repeatPassword: '',
    administrationLevel: 0,
  });

  const registrationOnChange = (event: any) => {
    setRegistrationFormValue({
      ...registrationFormValue,
      [event.target.name]: event.target.value,
    });
  };

  const user = useUser();
  const navigate = useNavigate();
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [jwt, setJwt] = useLocalState('', 'jwt');

  // console.log(username);

  useEffect(() => {
    // if (user != null) navigate("/dashboard");
    if (user.jwt) navigate('/dashboard');
  }, [navigate, user]);

  async function authenticate() {
    // const reqBody = {
    //   username,
    //   password,
    // };

    fetch('api/auth/login', {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      method: 'post',
      body: JSON.stringify({
        username: loginFormValue.email,
        password: loginFormValue.password,
      }),
    })
      .then((response) => {
        if (response.status === 200)
          return Promise.all([response.json(), response.headers]);
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject('Invalid login attempt');
      })
      .then(([body, headers]) => {
        user.setJwt(headers.get('authorization'));
      })
      .catch((message) => {
        alert(message);
      });
  }

  return (
    <div className="login-page-font-color">
      <h2 className="text-center mt-5 default-font-color">Bug Tracker</h2>
      <MDBContainer
        className="bg-white p-3 d-flex flex-column w-50"
        style={{ borderRadius: '1rem', maxWidth: '400px' }}
      >
        <MDBValidation>
          <MDBTabs
            justify
            className="center mb-3 d-flex flex-row justify-content-between content-center"
          >
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleJustifyClick('tab1')}
                active={justifyActive === 'tab1'}
              >
                Login
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleJustifyClick('tab2')}
                active={justifyActive === 'tab2'}
              >
                Register
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>

          <MDBTabsContent>
            <MDBTabsPane show={justifyActive === 'tab1'}>
              <div className="text-center mb-3">
                <p>Sign in with:</p>

                <RegesterWith />

                <p className="text-center mt-3">or:</p>
              </div>

              <MDBValidationItem feedback="" invalid>
                <MDBInput
                  value={loginFormValue.email}
                  onChange={loginOnChange}
                  name="email"
                  wrapperClass="mb-4"
                  label="Email address"
                  placeholder="name@email.com"
                  id="email-login"
                  required
                  type="email"
                />
              </MDBValidationItem>
              <MDBValidationItem feedback="" invalid>
                <MDBInput
                  value={loginFormValue.password}
                  onChange={loginOnChange}
                  name="password"
                  wrapperClass="mb-4"
                  label="Password"
                  placeholder="Password"
                  id="password-login"
                  required
                  type="password"
                />
              </MDBValidationItem>

              <div className="d-flex justify-content-between mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="remember-me-check-login"
                  label="Remember me"
                />
                <a href="!#">Forgot password?</a>
              </div>

              <MDBBtn className="mb-4 w-100" onClick={() => authenticate()}>
                Sign in
              </MDBBtn>
              <p className="text-center">
                Not a member? <a href="#!">Register</a>
              </p>
            </MDBTabsPane>

            <MDBTabsPane show={justifyActive === 'tab2'}>
              <div className="text-center mb-3">
                <p>Sign up with:</p>

                <RegesterWith />

                <p className="text-center mt-3">or:</p>
              </div>

              <MDBValidationItem feedback="" invalid>
                <MDBInput
                  value={registrationFormValue.name}
                  onChange={registrationOnChange}
                  name="name"
                  wrapperClass="mb-4"
                  label="Name"
                  placeholder="Your Name"
                  id="name-registration"
                  type="text"
                  required
                />
              </MDBValidationItem>
              <MDBValidationItem feedback="" invalid>
                <MDBInput
                  value={registrationFormValue.surname}
                  onChange={registrationOnChange}
                  name="surname"
                  wrapperClass="mb-4"
                  label="Surname"
                  placeholder="Your Surname"
                  id="surname-registration"
                  type="text"
                  required
                />
              </MDBValidationItem>
              <MDBValidationItem feedback="" invalid>
                <MDBInput
                  value={registrationFormValue.email}
                  onChange={registrationOnChange}
                  name="email"
                  wrapperClass="mb-4"
                  label="Email"
                  id="email-registration"
                  type="email"
                  placeholder="name@email.com"
                  required
                />
              </MDBValidationItem>
              <MDBValidationItem feedback="" invalid>
                <MDBInput
                  value={registrationFormValue.phone}
                  onChange={registrationOnChange}
                  name="phone"
                  wrapperClass="mb-4"
                  label="Phone"
                  id="phone-registration"
                  type="tel"
                  placeholder="1234567890"
                  required
                />
              </MDBValidationItem>
              <MDBValidationItem feedback="">
                <MDBInput
                  value={registrationFormValue.organization}
                  onChange={registrationOnChange}
                  name="organization"
                  wrapperClass="mb-4"
                  label="Organization"
                  placeholder="Your Organization"
                  id="organization-registration"
                  type="text"
                  required
                />
              </MDBValidationItem>
              <MDBValidationItem feedback="">
                <MDBInput
                  value={registrationFormValue.position}
                  onChange={registrationOnChange}
                  name="position"
                  wrapperClass="mb-4"
                  label="Job Title"
                  placeholder="Job Title"
                  id="position-registration"
                  type="text"
                  required
                />
              </MDBValidationItem>
              <MDBValidationItem feedback="">
                <MDBInput
                  value={registrationFormValue.password}
                  onChange={registrationOnChange}
                  name="password"
                  wrapperClass="mb-4"
                  label="Password"
                  placeholder="Password"
                  id="password-registration"
                  type="password"
                  required
                />
              </MDBValidationItem>
              <MDBValidationItem feedback="">
                <MDBInput
                  value={registrationFormValue.repeatPassword}
                  onChange={registrationOnChange}
                  name="repeatPassword"
                  wrapperClass="mb-4"
                  label="Repeat Password"
                  placeholder="Repeat Password"
                  id="repeat-password-registration"
                  type="password"
                  required
                />
              </MDBValidationItem>

              <div className="mb-4">
                <MDBValidationItem feedback="">
                  <MDBRadio
                    value={registrationFormValue.administrationLevel}
                    onChange={registrationOnChange}
                    name="administration-level"
                    id="developer-radio-registration"
                    label="Developer"
                    inline
                    required
                  />
                  <MDBRadio
                    value={registrationFormValue.administrationLevel}
                    onChange={registrationOnChange}
                    name="administration-level"
                    id="submitter-radio-registration"
                    label="Submitter"
                    inline
                    required
                  />
                  <MDBRadio
                    value={registrationFormValue.administrationLevel}
                    onChange={registrationOnChange}
                    name="administration-level"
                    id="admin-radio-registration"
                    label="Admin"
                    inline
                    required
                  />
                </MDBValidationItem>
              </div>
              <MDBBtn className="mb-4 w-100">Sign up</MDBBtn>
            </MDBTabsPane>
          </MDBTabsContent>
          <p>&copy; Vlad Yermakov 2023</p>
        </MDBValidation>
      </MDBContainer>
    </div>
  );
}

export default Login;

import './App.css';
import { getAuth } from "firebase/auth";
import app from './firebase.init';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';

const auth = getAuth(app);
function App() {
  const emailHandel = (event) => {
    console.log(event.target.value)
  }

  const passworHandel = (event) => {
    console.log(event.target.value)
  }
  const submitHandel = (event) => {
    console.log('fgfh')
    event.preventDefault();
  }

  return (
    <div className="app">
      <div>
        <h2 className='text-center my-3 text-primary'>Registration Now</h2>
        <Form onSubmit={submitHandel} className='w-50 mx-auto mt-3'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={emailHandel} type="email" placeholder="Enter email" />

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={passworHandel} type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button  variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;

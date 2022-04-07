import './App.css';
import { getAuth } from "firebase/auth";
import app from './firebase.init';

const auth = getAuth(app);
function App() {
  const emailHandel=(event)=>{
    console.log(event.target.value)
  }
  
  const passworHandel=(event)=>{
    console.log(event.target.value)
  }
  const submitHandel=(event)=>{
    console.log('fgfh')
    event.preventDefault();
  }

  return (
    <div className="App">
      <h1>Firebase authentication</h1>
      <form onSubmit={submitHandel}  action="">
        <input onBlur={emailHandel} type="text" />
        <br></br>
        <br></br>
        <input onBlur={passworHandel} type="password" name="" id="" />
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;

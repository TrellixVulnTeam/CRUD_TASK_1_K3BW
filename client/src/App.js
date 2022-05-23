import './App.css';
// import ReactDOM from "react-dom/client";
// import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

import ListUsers from './pages/users/listUsers';
// import UpdateForm from './Component/CRUD/UpdateForm';

function App() {
  return (
    // <Router>
    //   <div className="App">
    //       <Route path="/" exact component={ListUsers} />
    //   </div>
    // </Router>
    <div className="App">
        <ListUsers/> 
    </div>
  );
}

export default App;

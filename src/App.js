 import React from 'react';
import  List  from './components/list';
import Add from './components/add';
import Edit from './components/edit'
import {
  BrowserRouter as Router,
  Routes,
  Route,Redirect
} from "react-router-dom";


// const App = () => {
//   const routes = useRoutes([
//     {path: '/employee/add', element: <Add />},
//     {path: '/employee/list', element: <List />},,
//     // ...
//   ]);
//   return routes;
// };

const AppWrapper = () => {
  return (
    <Router>
      <Route exact path="/employee/list" component={List} />
    <Route path="/employee/add" component={Add} />
  <Route exact path="/employee/Edit/:id" component={Edit} />
    <Route exact path="/">
 <Redirect to="/employee/list" />
</Route>
    </Router>
  );
};

export default AppWrapper;

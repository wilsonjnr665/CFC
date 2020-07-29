import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Layout from "../components/Layout.js"
import Home from "./home.js"

import ListStudents from "./list/listStudents"
import ListInstructors from "./list/listInstructors"
import ListVehicles from "./list/listVehicles"

import RegisterStudents from "./register/registerStudents"
import RegisterInstructors from "./register/registerInstructors"
import RegisterVehicles from "./register/registerVehicles"

const Pages = () => {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/list-students" component={ListStudents} />
        <Route path="/list-instructors" component={ListInstructors} />
        <Route path="/list-vehicles" component={ListVehicles} />
        <Route path="/register-students" component={RegisterStudents} />
        <Route path="/register-instructors" component={RegisterInstructors} />
        <Route path="/register-vehicles" component={RegisterVehicles} />        
      </Layout>
    </Router>
  );
};

export default Pages;
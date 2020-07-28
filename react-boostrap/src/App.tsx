import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavHeader from "./Header/Nav";
import Home from "./Body/Home";
import BusinessLoans from "./Body/Business-Loans";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
  Container,
  Row,
} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Container fluid>
          <Row>
            <NavHeader />
            <Route path="/">
              <Home />
            </Route>
            <Route path="/business-loans">
              <BusinessLoans />
            </Route>
          </Row>
        </Container>
      </Switch>
    </Router>
  );
}

export default App;

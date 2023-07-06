import React, { useState } from "react";
import ProductList from "./components/productlist";
import ProductDetail from './pages/ProductDetails';
import HomePage from "./pages/HomePage";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Await } from "react-router-dom";
import "./App.css";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e, searchQuery) => {
    e.preventDefault();
    console.log("Search Query:", searchQuery);
  };
  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">OnlineStore</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
            </Nav>
            <Form
              className="d-flex"
              onSubmit={(e) => handleSearch(e, searchQuery)}
            >
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage searchQuery={searchQuery}/>} />
          <Route path="/product/:id" element={<Await>  <ProductDetail /></Await>} />
        </Routes>
    </BrowserRouter>
      
    </div>
  );
};

export default App;

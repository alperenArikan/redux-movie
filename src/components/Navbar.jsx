import React, { useState, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Container,
  Input,
} from "reactstrap";
import { Link } from "@reach/router";
import { useDispatch, useSelector } from "react-redux";
import { searchMovies } from "../features/counter/movieSlice";
import SearchResults from "./SearchResults";
import { resetQuery } from "../features/counter/movieSlice";
const Brand = () => {
  return (
    <Link to="/">
      <span className="navbar-brand">Movie Trends</span>
    </Link>
  );
};

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { movieReducer } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  useEffect(() => {
    if (query.length === 0) {
      dispatch(resetQuery());
      return;
    }
    dispatch(searchMovies(query));
  }, [query]);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Container fluid="md">
          <Brand></Brand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Input
              style={{ maxWidth: "18rem", marginLeft: "auto" }}
              placeholder="Search Movie"
              onChange={handleChange}
            />
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/" className="nav-link"></Link>
              </NavItem>
              <NavItem>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
        {/* {movieReducer.searchedMovies.length > 0 && query.length > 0 ? (
          <SearchResults data={movieReducer.searchedMovies} />
        ) : (
          ""
        )} */}
      </Navbar>
    </div>
  );
};

export default NavbarComponent;

import { useRef } from "react";
import { Button, Container, Form, Nav, Navbar, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../redux/features/categorySlice";
import { setSearchValue } from "../../redux/features/searchSlice";
import { DarkMode } from "../../components/shared/DarkMode";
import { HideBanner } from "./HideBanner";
import "./Header.css"; // Import custom CSS for additional styling

export const Header = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const inputValue = useRef();

  const handleSearch = () => {
    dispatch(setSearchValue(inputValue.current.value));
  };

  const handleKeyDown = (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <Navbar
      expand="lg"
      className={`${theme ? "bg-primary" : "bg-secondary"} py-3 fixed-top shadow-sm`}
    >
      <Container fluid>
        <Navbar.Brand
          onClick={() => {
            dispatch(setCategory(""));
            dispatch(setSearchValue(""));
          }}
          className="brand-logo"
        >
          <Link to={"/"} className="nav-link">
            <span className="text-white h1 fw-bold">Tr</span>
            <span className="text-danger h1 fw-bolder">eNd</span>
            <span className="text-white h1 fw-bold">Zy</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle className="bg-white" aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            {["Electronics", "Clothing", "Footware", "Home&Kitchen", "Beauty"].map((item) => (
              <Link
                key={item}
                to={"/"}
                className="nav-link mt-2 mx-2"
                onClick={() => {
                  dispatch(setCategory(item.toLowerCase()));
                  dispatch(setSearchValue(""));
                }}
              >
                <span className="text-white h5 nav-item-hover">{item}</span>
              </Link>
            ))}
            <Link to={"/login"} className="nav-link mt-2 mx-2">
              <span className="text-white h5 nav-item-hover">Login</span>
            </Link>

            <NavItem className="mx-2" style={{ marginTop: 12 }}>
              <span>
                <DarkMode />
              </span>
            </NavItem>
           
          </Nav>
          <Form className="d-flex me-auto w-100 mt-2" onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 search-input"
              aria-label="Search"
              ref={inputValue}
              style={{ background: theme ? "#F5F0CD" : "#D9D9D9" }}
            />
            <Button
              variant="outline-light"
              className="search-button"
              onClick={handleSearch}
              onKeyDown={handleKeyDown}
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
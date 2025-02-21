import { useRef, useEffect, useState } from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
  NavItem,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../redux/features/categorySlice";
import { axiosInstance } from "../../config/axiosInstance";
import { setSearchValue } from "../../redux/features/searchSlice";
import { DarkMode } from "../../components/shared/DarkMode";
import { CartIcon } from "../shared/CartIcon";
import { setCartData } from "../../redux/features/cartSlice";
import { setWishlistData } from "../../redux/features/wishlistSlice";

export const UserHeader = () => {
  const inputValue = useRef();
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.items);
  const wishlist = useSelector((state) => state.wishlist.items);

  const fetchCart = async () => {
    try {
      const response = await axiosInstance.get("/cart/cart");
      dispatch(setCartData(response?.data?.data));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchWishlist = async () => {
    try {
      const response = await axiosInstance.get("/wishlist/wishlist");
      dispatch(setWishlistData(response?.data?.data));
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchCart();
    fetchWishlist();
  }, []);

  const handleLogout = async () => {
    try {
      await axiosInstance.post("/user/logout");
      localStorage.removeItem("token");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = () => {
    dispatch(setSearchValue(inputValue.current.value));
  };

  

  return (
    <Navbar expand="lg" className={theme ? "bg-primary py-4 fixed-top" : "bg-secondary py-4 fixed-top"}>
      <Container fluid>
        <Navbar.Brand
          onClick={() => {
            dispatch(setCategory(""));
            dispatch(setSearchValue(""));
          }}
        >
          <Link to="/" className="nav-link text-decoration-none">
            <span className="text-white h1 fw-bold">Tr</span>
            <span className="text-danger h1 fw-bolder">eNd</span>
            <span className="text-white h1 fw-bold">Zy</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle className="bg-white" aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0">
            {["electronics", "clothing", "footwear", "home&kitchen", "beauty"].map((category) => (
              <Link to="/" className="nav-link" key={category}>
                <span
                  onClick={() => {
                    dispatch(setCategory(category));
                    dispatch(setSearchValue(""));
                  }}
                  className="text-white h5 hover"
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </span>
              </Link>
            ))}
            <NavDropdown title={<span className="text-white h5 hover">Account ↓</span>}>
              <NavDropdown.Item as={Link} to="/user/profile">Profile</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/user/orders">Orders</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/user/cart" onClick={fetchCart}>Cart</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/user/wishlist" onClick={fetchWishlist}>Wishlist</NavDropdown.Item>
              <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
            </NavDropdown>
            <NavItem className="mx-2">
              <DarkMode />
            </NavItem>
          </Nav>
          <Form className="d-flex w-100" onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              ref={inputValue}
              style={{ background: theme ? "#F5F0CD" : "#D9D9D9" }}
            />
            <Button variant="outline-light" onClick={handleSearch}>Search</Button>
          </Form>
          <Link to="/user/cart" onClick={fetchCart}>
            <span className="me-2" style={{ marginTop: 15 }}>
              <CartIcon component={"header"} />
            </span>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

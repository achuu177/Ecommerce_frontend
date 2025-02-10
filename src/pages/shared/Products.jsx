import { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { axiosInstance } from "../../config/axiosInstance";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

export const Products = ({ action = "Update", role = "admin" }) => {
  const { theme } = useSelector((state) => state.theme);
  const { searchResult } = useSelector((state) => state.search);
  const navigate = useNavigate();

  const product = {
    products: "/product/products",
    productDelete: "/product/delete-product",
    searchProducts: "product/search-seller-products",
  };

  if (role === "seller") {
    product.products = "product/seller-products";
    product.searchProducts = "product/search-seller-products";
  } else if (role === "admin") {
    product.products = "product/products";
    product.searchProducts = "/product/search";
  }

  const [products, setProducts] = useState([]);
  const [deleteProduct, setDeleteProduct] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosInstance.get(product.products);
        setProducts(role === "seller" ? response.data.data.products : response.data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [product.products, searchResult, deleteProduct]);

  const handleAction = async (productId) => {
    try {
      if (action === "Delete") {
        const response = await axiosInstance.delete(product.productDelete, {
          data: { productId },
        });
        setDeleteProduct(response.data.data);
      } else {
        const path = role === "admin" ? `/admin/update-product/${productId}` : `/seller/update-product/${productId}`;
        navigate(path);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchSearchData = async () => {
      try {
        const response = await axiosInstance.post(product.searchProducts, { searchResult });
        setProducts(response?.data?.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (searchResult) fetchSearchData();
  }, [searchResult, deleteProduct]);

  return (
    <Container style={{ minHeight: "800px" }}>
      <h1 className={`text-center mt-5 ${theme ? "text-black" : "text-white"}`}>
         {action} Product
      </h1>
      <Row className="mt-5">
        {products?.map((product) => (
          <Col key={product._id} md={4} lg={3} className="mb-4">
            <Card
              className="shadow-sm border-0"
              style={{ borderRadius: "10px", overflow: "hidden", backgroundColor: theme ? "#FFF6E3" : "#d9d9d9" }}
            >
              <Card.Img
                variant="top"
                src={product.image || "https://via.placeholder.com/150"}
                style={{ height: "300px",  objectFit: "cover" }}
              />
              <Card.Body className="text-center">
                <Card.Title>
                  <Link
                    to={role === "admin" ? `/admin/product-details/${product._id}` : `/seller/product-details/${product._id}`}
                    className="text-decoration-none text-dark fw-bold"
                  >
                    {product.title}
                  </Link>
                </Card.Title>
                <Card.Text>Stock: {product.stock}</Card.Text>
                <Button
                  variant={theme ? "primary" : "dark"}
                  className="text-white btn-sm"
                  onClick={() => handleAction(product._id)}
                >
                  {action}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

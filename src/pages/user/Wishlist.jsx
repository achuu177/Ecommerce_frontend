import toast from "react-hot-toast";
import { Container, Button, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../config/axiosInstance";
import { UnHappy } from "../../components/shared/UnHappy";
import { setWishlistData } from "../../redux/features/wishlistSlice";

export const Wishlist = () => {
  const dispatch = useDispatch();

  // Get current theme
  const { theme } = useSelector((state) => state.theme);

  // Get current wishlist data
  const { wishlistData } = useSelector((state) => state.wishlist);

  // Function to fetch updated wishlist
  const fetchWishlist = async () => {
    try {
      const response = await axiosInstance.get("/wishlist/wishlist");
      dispatch(setWishlistData(response.data.data)); // Update Redux store
    } catch (error) {
      console.log(error);
    }
  };

  // Add to cart
  const addToCart = async (productId) => {
    try {
      await axiosInstance.post("/cart/add-product-wishlist-to-cart", { productId });
      toast.success("Product added to cart");
      fetchWishlist(); // Fetch updated wishlist after adding to cart
    } catch (error) {
      toast.error(error.response?.data?.message || "Error adding to cart");
      console.log(error);
    }
  };

  // Remove product
  const removeProduct = async (productId) => {
    try {
      await axiosInstance.delete("/wishlist/remove-product", {
        data: { productId },
      });
      toast.success("Product removed from wishlist");
      fetchWishlist(); // Fetch updated wishlist after removing product
    } catch (error) {
      toast.error("Error removing product");
      console.log(error);
    }
  };

  return (
    <Container style={{ minHeight: "400px" }}>
      {wishlistData?.products?.length !== 0 && (
        <h1 className="text-black h1 text-center fw-bold my-5">Wishlist</h1>
      )}
      {wishlistData?.products?.length === 0 && (
        <Link className="text-decoration-none" to={"/"}>
          <UnHappy message={"Your wishlist is currently empty!"} theme={theme} />
        </Link>
      )}
      {wishlistData?.products?.map((product) => (
        <Row
          className="d-flex justify-content-between align-items-center p-3 rounded-3 mx-2   my-3 "
          style={{
            backgroundColor: theme ? "#FAF0E6" : "#d9d9d9",
            minHeight: "300px",
          }}
          key={product.productId._id}
        >
          <Col xs={12} md={2}>
            <div>
              <img
                className=" img-fluid rounded-3 "
                src={product.productId.image}
                alt="product image"
              />
            </div>
          </Col>
          <Col xs={12} md={10}>
            <Link
              className="text-decoration-none text-black"
              to={`/product-details/${product.productId._id}`}
            >
              <div className="fw-bold mt-2">{product.productId.title}</div>
            </Link>

            <div className="fw-normal mt-2">
              {product.productId.description}
            </div>
            <div className="fw-bold mt-3">₹{product.productId.price}</div>

            <Col className="d-flex gap-2 mt-3">
              <div className="fw-normal ">
                <Button
                  onClick={() => addToCart(product.productId._id)}
                  className="text-white"
                  variant={theme ? "primary" : "dark"}
                >
                  Add to cart
                </Button>
              </div>
              <div className="fw-normal">
                <Button
                  onClick={() => removeProduct(product.productId._id)}
                  className="text-white"
                  variant={theme ? "danger" : "dark"}
                >
                  Remove
                </Button>
              </div>
            </Col>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

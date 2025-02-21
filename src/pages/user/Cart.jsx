import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Button, Card, Row, Col, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { axiosInstance } from "../../config/axiosInstance";
import { OrderIcon } from "../../components/shared/OrderIcon";
import { UnHappy } from "../../components/shared/UnHappy";
import { setCartData } from "../../redux/features/cartSlice"; // ✅ Redux action

export const Cart = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const { cartData } = useSelector((state) => state.cart);

  // Fetch fresh cart data
  const fetchCartData = async () => {
    try {
      const response = await axiosInstance.get("/cart");
      dispatch(setCartData(response.data)); // ✅ Update Redux store
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };

  // *Add quantity*
  const addQuantity = async (productId) => {
    try {
      const updatedCart = {
        ...cartData,
        products: cartData.products.map((product) =>
          product.productId._id === productId
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
        totalPrice: cartData.totalPrice + cartData.products.find(p => p.productId._id === productId).price, // ✅ Update total
      };
      dispatch(setCartData(updatedCart));

      await axiosInstance.post("/cart/add-cartQuantity", { productId });

      toast.success("Quantity increased");
      fetchCartData(); // ✅ Fetch fresh data for accuracy
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || "Error while adding the product");
    }
  };

  // *Remove quantity / Remove product if 0*
  const removeQuantity = async (productId) => {
    try {
      const product = cartData.products.find((p) => p.productId._id === productId);
      if (!product) return;

      if (product.quantity === 1) {
        // ✅ Remove product from cart when quantity becomes zero
        await axiosInstance.delete("/cart/remove-product", { data: { productId } });

        const updatedCart = {
          ...cartData,
          products: cartData.products.filter((p) => p.productId._id !== productId),
          totalPrice: cartData.totalPrice - product.price, // ✅ Update total
        };
        dispatch(setCartData(updatedCart));

        toast.success("Product removed from cart");
      } else {
        // ✅ Decrease quantity normally
        const updatedCart = {
          ...cartData,
          products: cartData.products.map((product) =>
            product.productId._id === productId
              ? { ...product, quantity: product.quantity - 1 }
              : product
          ),
          totalPrice: cartData.totalPrice - product.price, // ✅ Update total
        };
        dispatch(setCartData(updatedCart));

        await axiosInstance.delete("/cart/remove-product", { data: { productId } });
        toast.success("Quantity decreased");
      }

      fetchCartData(); // ✅ Fetch fresh data for accuracy
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || "Error while removing the product");
    }
  };

  // *Make payment*
  const makePayment = async () => {
    try {
      const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
      const session = await axiosInstance.post("/payment/create-checkout-session", {
        products: cartData?.products,
      });
      await stripe.redirectToCheckout({ sessionId: session.data.sessionId });
    } catch (error) {
      console.error(error);
    }
  };

  if (!cartData?.products?.length) {
    return (
      <Link className="text-decoration-none" to={"/"}>
        <UnHappy message={"Your cart is empty!"} theme={theme} />
      </Link>
    );
  }

  return (
    <Container style={{ minHeight: "500px" }}>
      <h1 className="text-black h1 text-center fw-bold my-5">Cart</h1>

      {cartData?.products?.map((product) => (
        <Row
          className="d-flex justify-content-between align-items-center gap-3 my-2 p-3 rounded-3 mx-1 shadow"
          key={product.productId._id}
          style={{ backgroundColor: theme ? "#FAF0E6" : "#d9d9d9" }}
        >
          <Col xs={12} md={2}>
            <Card.Img
              className="img-fluid object-fit-contain rounded-3"
              src={product.productId.image}
              style={{ minHeight: "210px" }}
            />
          </Col>
          <Col xs={12} md={3}>
            <Card.Title className="fw-bold">
              {product.productId.title}
            </Card.Title>
          </Col>
          <Col xs={12} md={2}>
            <Card.Text className="fw-normal">
              <Button
                onClick={() => removeQuantity (product.productId._id)}
                className="btn-sm rounded-5 me-1 text-black fw-bolder"
                variant={theme ? "white" : "gray"}
                style={{ border: "1px solid black" }}
              >
                -
              </Button>

              Qty:{product.quantity}

              <Button
                className="btn-sm rounded-5 fw-bolder ms-1 text-black"
                variant={theme ? "white" : "gray"}
                style={{ border: "1px solid black" }}
                onClick={() => addQuantity(product.productId._id)}
              >
                +
              </Button>
            </Card.Text>
          </Col>
          <Col xs={12} md={2}>
            <Card.Text className="fw-bold">
              ₹{product.price * product.quantity}
            </Card.Text>
          </Col>
        </Row>
      ))}

      <Row
        style={{ backgroundColor: theme ? "#FAF0E6" : "#d9d9d9" }}
        className="d-flex justify-content-between align-items-center p-5 rounded-3 mx-1 mt-2 gap-3"
      >
        <Col className="fw-bold fs-5">Total</Col>
        <Col className="fw-bold fs-5">₹{cartData.totalPrice || 0}</Col>
        <Col>
          <Button
            onClick={makePayment}
            className="w-100 text-white "
            variant={theme ? "primary" : "dark"}
          >
            <span className="me-1">
              <OrderIcon height={"25px"} />
            </span>
            Place order
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
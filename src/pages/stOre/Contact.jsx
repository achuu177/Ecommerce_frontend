import { Container, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

export const Contact = () => {
  // Get current theme
  const { theme } = useSelector((state) => state.theme);

  return (
    <Container fluid className="p-5">
      <div className="text-white d-flex justify-content-center align-items-center my-5 flex-column gap-2 flex-wrap">
        <div className="my-5">
          <h1
            className={
              theme ? "text-center text-black" : "text-white text-center"
            }
          >
            Contact Us
          </h1>
        </div>
        <div className={theme ? "text-center text-black" : "text-center"} style={{maxWidth: 500}}>
          <p>
          Have a question or need assistance? We’re here for you! Whether you’re looking for product recommendations,
           need help with an order, or simply want to share your thoughts, our team is ready to assist.
           Don’t hesitate to reach out—we’d love to connect with you! <br /> <br />
            <strong>Get in Touch with Us</strong>
          </p>

          <Form className="my-4 mx-auto" style={{maxWidth: 500}}>
            <Form.Group controlId="formName">
              <Form.Label> Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formEmail" className="my-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formMessage" className="my-3">
              <Form.Label> Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Write your message"
              />
            </Form.Group>

            <Button className="text-white" variant={theme ? 'primary' : 'dark'} type="submit">
              Send Message
            </Button>
          </Form>

          <p>
            <strong>Contact Information:</strong> <br />
            Email: <a href="mailto:support@TreNdzY.com">support@TreNdzY.com</a>{" "}
            <br />
            Phone: +1 (900) 123-4567 <br />
            Address: TreNdzY ABC Street, Bangalore, Karnataka, 670672
          </p>

          <p><strong>We look forward to hearing from you!</strong></p>
        </div>
      </div>
    </Container>
  );
};

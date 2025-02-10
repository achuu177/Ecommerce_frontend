import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

export const Design = () => {
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
            Design at TreNdzY
          </h1>
        </div>
        <div className={theme ? "text-center text-black" : "text-center"}>
          <p>
            At <strong>TreNdzY</strong>, we believe that exceptional design is key to delivering outstanding user experiences. Whether it’s our website or product pages, we prioritize visually appealing, intuitive, and responsive designs to elevate every interaction. <br />
            <br />
            <strong>Our Design Philosophy:</strong> <br />
            Our approach to design emphasizes minimalism, seamless navigation, and high-quality visuals that showcase the premium essence of Apple products. We strive to create an effortless shopping experience where aesthetics and functionality blend harmoniously to delight our users.<br />
            <br />
            <strong>Design Process:</strong> <br />
            We follow a collaborative, iterative, and user-focused design process, working closely with our development team to ensure that every element aligns with our brand identity and user expectations. Our process includes:
            <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
              <li>
                <strong>Research:</strong> Analyzing user needs, market trends, and industry best practices.
              </li>
              <li>
                <strong>Wireframing:</strong> Designing low-fidelity wireframes to establish the structure of key pages.
              </li>
              <li>
                <strong>Prototyping:</strong> Creating interactive prototypes to visualize user journeys and interactions.
              </li>
              <li>
                <strong>UI Design:</strong> Crafting high-fidelity user interfaces with carefully selected color schemes, typography, and icons.
              </li>
              <li>
                <strong>User Testing:</strong>Gathering and implementing feedback to enhance and refine the design.
                </li>
            </ul>
            <br />
           
             
            <br />
            If you have any questions or need further design resources, feel
            free to contact our design team at{" "}
            <a href="mailto:design@TreNdzY.com">design@TreNdzY.com</a>.
          </p>
        </div>
      </div>
    </Container>
  );
};

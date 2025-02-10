import { Container, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

export const PressKit = () => {
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
            TreNdzY Press Kit
          </h1>
        </div>
        <div className={theme ? "text-center text-black" : "text-center"}>
          <p>
          Welcome to the official press kit for TreNdzY. This page provides media professionals, 
          journalists, and partners with all the essential 
          resources they need, including brand assets, company information, and press inquiries. <br />{" "}
            <br />
            <strong>Company Overview</strong> <br />
            TreNdzY is a leading online marketplace dedicated to offering high-quality products with an exceptional
             shopping experience. Since our launch, we have built a reputation for reliability, innovation, and customer satisfaction. 
             Our mission is to make online shopping seamless, personalized, and enjoyable for everyone.{" "}
             
             <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
              <li><strong>Founded:</strong> 2020</li>
              <li><strong>Headquarters:</strong>Bangalore, India</li>
              <li><strong>CEO/Founder:</strong>Ramesh Narayanan</li>
             </ul>
            <br />
            <strong>Press Releases</strong> <br />
            Stay updated with our latest announcements, product launches, and company news.
            <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
              <li><strong>1. New Product Launch: Footware – </strong>12/12/2024</li>
              <li>
                <Button
                  variant="link"
                  href="/press-release1.pdf"
                  target="_blank"
                >
                  TreNdzY Launches New Footware Collection - Press Release
                </Button>
              </li>
              <li><strong>2. New Partnership or Expansion Announcement –</strong>05/01/20256 </li>
              <li>
                <Button
                  variant="link"
                  href="/press-release2.pdf"
                  target="_blank"
                >
                  TreNdzY Expands to International Markets - Press Release
                </Button>
              </li>
            </ul>
            <br />
            <strong>Brand Assets</strong> <br />
            Download our official brand assets, including logos, product images, and marketing materials. 
            Please follow our brand guidelines to maintain consistency.
            <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
              <li>
                <Button variant="link" href="/logo.png" target="_blank">
                TreNdzY Logo (PNG)
                </Button>
              </li>
              <li>
                <Button variant="link" href="/iphone-image.jpg" target="_blank">
                TreNdzY New product Collection Image
                </Button>
              </li>
              <li>
                <Button variant="link" href="/store-front.jpg" target="_blank">
                  Brand Guidelines
                </Button>
              </li>
            </ul>
            <br />
            <strong>Contact for Press Inquiries</strong> <br />
            <br />
            For interviews, media requests, or further information, please reach out to our press team.{" "}
           <strong> Email: </strong><a href="mailto:press@TreNdzY.com">press@TreNdzY.com</a>.
          </p>
        </div>
      </div>
    </Container>
  );
};

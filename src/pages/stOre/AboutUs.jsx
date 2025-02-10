import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";


export const AboutUs = () => {
  // Get current theme
  const { theme } = useSelector((state) => state.theme);

  return (
    <Container fluid className="p-3">
      <div className="text-white d-flex justify-content-center align-items-center my-5 flex-column gap-2 flex-wrap">
        <div className="my-5">
          <h1
            className={
              theme ? "text-center text-black" : "text-white text-center"
            }
          >
            About Us
          </h1>
        </div>
        <div className={theme ? "text-center text-black" : "text-center"}>
          <p>
            Welcome to <strong>TreNdZy</strong>
          </p>
          <p>your ultimate online shopping destination! </p>
          <p>
          We are passionate about bringing you the best products, seamless shopping experiences,
           and top-notch customer service. Whether you're looking for the latest fashion, high-tech gadgets,
            home essentials, or unique gifts, we've got everything you need—all in one place.


          </p>
          <p>
          At TreNdZy, we believe that shopping should be easy, enjoyable, and accessible to everyone. 
          Our mission is to provide a diverse collection of high-quality products at competitive prices while 
          ensuring convenience and reliability. We are not just another e-commerce platform—we are a community built on trust, innovation, and customer satisfaction.
          </p>
          <p>
          We carefully curate a wide selection of products across various categories, ensuring that you get the best value for your money. 
          Our platform is designed with user-friendly navigation, advanced search features, and secure payment gateways to make your shopping 
          experience smooth and hassle-free.
          </p>
          <br/>
          <ul>
            <li>
            <strong>Why Choose Us?</strong>
            </li>
            <li><strong>Quality & Authenticity – </strong>We work with trusted brands and verified sellers to bring you genuine products.</li>
            <li><strong>Seamless Shopping Experience –</strong>Our website is designed for quick browsing, effortless checkout, and fast delivery.</li>
            <li><strong>Customer-Centric Approach – </strong>We prioritize your satisfaction and provide 24/7 customer support for all your queries.</li>
            <li><strong>Secure Transactions –  </strong> Your privacy and security are our top concerns, with encrypted payments and secure data handling.</li>
            <li><strong>Exciting Offers & Discounts – </strong>We regularly offer deals, flash sales, and exclusive discounts to enhance your shopping experience.</li>
          </ul>
          <br/>
          <strong>Our Vision</strong>
          <p>
          We aim to become the most trusted online marketplace by continuously evolving and improving our services.
           Our goal is to make online shopping not just a necessity but an enjoyable experience, where customers feel valued and appreciated.
           <br/>
          
          </p>
          <strong>Join Our Community</strong>
          <p>
          We love connecting with our customers! Follow us on social media for the latest updates, exclusive offers,
           and behind-the-scenes content. Your feedback matters to us, so feel free to share your thoughts and suggestions to help us grow together.</p>


          <p>
       Thank you for choosing TreNdZy—where quality meets convenience. Happy shopping!

For any inquiries, feel free to reach out to us at <a href="mailto:support@TreNdzY.com">Support@TreNdzY.com</a>.
          </p>
        </div>
      </div>
    </Container>
  );
};

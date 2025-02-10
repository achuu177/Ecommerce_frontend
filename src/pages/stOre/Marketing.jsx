import { Container, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

export const Marketing = () => {
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
            Marketing at TreNdzY
          </h1>
        </div>
        <div className={theme ? "text-center text-black" : "text-center"}>
          <p>
            At <strong>TreNdzY</strong>,  our marketing approach is all about creating meaningful connections with our audience. We blend data-driven strategies with engaging content and innovative techniques to maximize brand visibility, drive conversions, and enhance customer loyalty. By leveraging multiple marketing channels, we ensure that our messaging reaches the right people at the right time, delivering a seamless and personalized shopping experience. <br /> <br />
            <strong>Our Marketing Approach:</strong> <br /><br />
            Our strategy is built on creativity, analytics, and customer engagement. We prioritize understanding consumer preferences, crafting compelling content, and optimizing our marketing efforts to boost brand recognition and sales. Here’s how we make it happen:
            
            <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
              <li>
                <strong>Social Media Engagement:</strong>We create interactive and visually appealing content on platforms like Instagram, Facebook, and Twitter to foster community engagement and brand loyalty.
              </li>
              <li>
                <strong>Search Engine Optimization (SEO):</strong>Through keyword-rich content, blog posts, and optimized product descriptions, we improve search rankings and attract organic traffic.
              </li>
              <li>
                <strong>Partnership & Affiliate Marketing:</strong>We collaborate with influencers, bloggers, and affiliates to extend our reach and build trust among potential customers.

              </li>
              <li>
                <strong>Personalized Email & SMS Campaigns:</strong>  By delivering tailored promotions, product recommendations, and exclusive deals, we keep customers engaged and encourage repeat purchases.
              </li>
            </ul>
            <br />
            <strong>Ongoing Marketing Campaigns:</strong> <br />
            We are actively running various campaigns designed to showcase our newest products, highlight special promotions, and enhance brand awareness. Some of our ongoing initiatives include:
            <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
              <li>
              <strong>New Arrivals Spotlight:</strong><br />🌟 Explore our latest collection of Footwear with exclusive early-bird discounts!
              </li>
              <li>
              <strong>Flash Sale – Limited Time Offer!:</strong><br />💥 Get up to 50% OFF on selected items. Hurry, sale ends soon!<br />
              🕒 Offer valid until: [25/3/2025]
              </li>
              <li>
              <strong>Refer & Earn Rewards:</strong><br />👥 Invite your friends & both of you get ₹500 off on your next purchase!<br />
              
              </li>
            </ul>
            <br />
            
            <br />
            For more details on our marketing strategy, collaboration requests,
            or to get involved with our campaigns, feel free to reach out to our
            marketing team at{" "}
            <a href="mailto:marketing@TreNdzY.com">marketing@TreNdzY.com</a>.
          </p>
        </div>
      </div>
    </Container>
  );
};

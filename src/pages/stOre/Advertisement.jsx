import { Container, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

export const Advertisement = () => {
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
            Advertise with TreNdzY
          </h1>
        </div>
        <div className={theme ? "text-center text-black" : "text-center"}>
          <p>
          Want to showcase your brand to a highly engaged audience? Partner with{" "}
            <strong>TreNdzY</strong>! and gain access to a wide community of online shoppers. Whether you’re looking to boost brand visibility, drive traffic, or increase sales, we provide tailored advertising solutions to help your business grow. <br /> <br />
            <strong>Our Advertising Solutions:</strong> <br />
            We offer a range of <strong>strategic advertising options </strong>designed to meet your business goals. Here’s how you can promote your brand with us:
            <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
              <li>
                <strong>Featured Brand Placement:</strong> Secure premium visibility by having your brand highlighted on our homepage and key category pages.
              </li>
              <li>
                <strong>Sponsored Product Listings:</strong>  Get your products showcased at the top of search results and relevant product recommendations.
              </li>
              <li>
                <strong>Targeted Display Ads:</strong> Run engaging banner ads on our platform, reaching shoppers interested in your niche.
              </li>
              <li>
                <strong>Influencer & Affiliate Partnerships:</strong> Expand your reach by collaborating with influencers and earning through our affiliate program.
              </li>
              <li>
                <strong>Social Media Promotions:</strong>  Leverage our social media platforms for sponsored posts, stories, and giveaways.
              </li>
              <li>
                <strong> Email Marketing & Newsletters:</strong>  Promote exclusive deals and new arrivals directly to our subscriber base.
              </li>
            </ul>
            <br />
            <strong>Advertisement Resources:</strong> <br />
            If you're considering advertising with us, explore these resources:
            <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
            <li>
                <strong>Advertising Guidelines-</strong> Learn about ad specifications and placement options.
              </li>
              <li>
                <strong>Press Kit –</strong>  Download our latest press kit with audience demographics and ad rates.
              </li>
              <li>
                <strong>Affiliate & Influencer Program Details –</strong> Get information on how to partner with us and earn commissions.
              </li>
            </ul>
            <br />
            <strong>Current Advertising Campaigns:</strong> <br />
            We are actively running high-impact campaigns to enhance brand engagement 
            and drive conversions. Here are some of our ongoing promotions:
            <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
              <li>
                <Button
                  variant="link"
                  href="/advertisement/promotion-campaign"
                  target="_blank"
                >
                  Limited-Time Featured Product Showcase
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  href="/advertisement/seasonal-deals"
                  target="_blank"
                >
                  Seasonal Advertising Packages 
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  href="/advertisement/retargeting"
                  target="_blank"
                >
                 Retargeting & Personalized Ads
                </Button>
              </li>
            </ul>
            <br />
            <strong>Let's Collaborate!</strong> <br />
            Want to grow your brand with [Your E-commerce Brand]? Connect with our advertising team to explore tailored solutions.
            
            <br />
            Contact us at <a href="mailto:ads@TreNdzY.com">ads@TreNdzY.com</a> for rates and partnership details.
          
          </p>
        </div>
      </div>
    </Container>
  );
};

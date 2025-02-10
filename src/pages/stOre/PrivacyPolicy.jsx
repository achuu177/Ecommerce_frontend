import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

export const PrivacyPolicy = () => {
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
            Privacy Policy
          </h1>
        </div>
        <div className={theme ? "text-center text-black" : "text-center"}>
          <p>
            Welcome to <strong>TreNdzY</strong>. Your privacy is of the utmost importance to us, and we are fully committed to safeguarding your personal information. 
            This Privacy Policy explains how we collect, use, share, and protect your data when you interact with our website and services. By using our platform, you consent to the collection, 
            processing, and handling of your information in accordance with this policy. 
            We encourage you to read this policy carefully to understand how your data is managed.

             <br /> <br /> <strong>1. Information We Collect:</strong> We collect personal details that you provide when creating an account, making a purchase, or interacting with our customer support team.
              This includes, but is not limited to, your name, email address, contact number, shipping and billing addresses, and payment details. Additionally, we automatically collect certain technical data,
               such as your IP address, browser type, device information, operating system, and browsing behavior on our website. This helps us enhance user experience, track site performance, and detect potential security threats.
                We may also collect information from cookies and similar tracking technologies to personalize content, remember your preferences, and improve website functionality. <br /> <br />{" "}

            <strong>2. How We Use Your Information:</strong>The personal information we collect is primarily used to facilitate and process your orders,
             ensure timely delivery, and provide efficient customer support. We also use your data to personalize your shopping experience, 
             recommend products, and offer promotions tailored to your interests. If you have subscribed to our newsletters, we may send you updates on new arrivals, 
             special discounts, and exclusive offers. Additionally, we process your information to maintain security, prevent fraudulent activities, enforce our terms and policies, 
             and comply with applicable laws and regulations. Usage data collected from website analytics helps us identify trends, improve website design, and enhance overall service quality. <br /> <br />{" "}

            <strong>3. Information Sharing:</strong>Your privacy is a priority, and we do not sell, rent, or trade your personal information to third parties. 
            However, in order to provide essential services such as payment processing, order fulfillment, and logistics, we may share your data with trusted partners,
             including payment gateways, shipping providers, and analytics services. These third-party partners are required to use your information solely for the purpose of delivering services
              and must adhere to strict data protection standards. Additionally, we may disclose your information if required by law, in response to legal requests, to protect our legal rights,
               or to prevent fraudulent activities and security threats. <br /> <br />{" "}

            <strong>4. Data Protection & Security:</strong>We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
             Our website uses encryption protocols, secure servers, and firewall protection to ensure safe transactions and data storage.
              We also regularly monitor our systems for potential vulnerabilities and security threats. However, while we take all reasonable precautions to safeguard your data,
               no method of electronic transmission or storage is entirely secure. Therefore, we cannot guarantee absolute protection, and we encourage users to take additional security measures, 
               such as using strong passwords and avoiding sharing sensitive information over unsecured networks. <br /> <br />

            <strong>5. Your Rights:</strong> As a valued user, you have full control over your personal information. You have the right to access, update, or delete your account details
             and personal data at any time by visiting your profile settings or contacting our support team. If you wish to opt out of marketing communications,
              you can do so by clicking the unsubscribe link in our emails or adjusting your notification preferences. Additionally,
               you can request information about how your data is used and ask for restrictions on data processing under applicable privacy laws. We are committed to respecting your rights and ensuring transparency in data handling. <br /> <br />{" "}

            <strong>6. Use of Cookies & Tracking Technologies:</strong>
            Our website utilizes cookies and similar tracking technologies to provide an optimized browsing experience. Cookies are small text files stored on your 
            device that help us remember your preferences, enable core site functionality, and enhance navigation. These cookies assist in analyzing website traffic, 
            offering personalized product recommendations, and displaying relevant advertisements. You have the option to manage cookie settings through your browser
             and can choose to disable certain cookies if preferred. However, please note that disabling cookies may impact site performance and limit access to certain features. <br /> <br />

            <strong>7. Policy Updates:</strong> We may update this Privacy Policy periodically to reflect changes in our services, technology advancements, legal obligations,
             or security practices. Any modifications will be posted on this page, and the date of the most recent update will be indicated at the top. In the event of significant changes 
             that affect your rights or how your data is processed, we will notify you through email or other communication channels. We encourage users to review this policy regularly to stay 
             informed about how we handle their information. Your continued use of our services following any updates constitutes acceptance of the revised policy.<br /> <br />

            <strong>8. Contact Us:</strong> If you have any questions, concerns, or requests regarding this Privacy Policy or how your data is handled, please do not hesitate to reach out to us.
             Our dedicated support team is available to address your queries and provide assistance. You can contact us via email at <a href="mailto:support@TreNdzY.com">Support@TreNdzY.com</a> or through our customer service portal on our website. 
             We are committed to ensuring transparency and building trust with our users by maintaining open communication regarding data privacy and security.
              <br /> <br /> 
              Thank you for trusting TreNdzY with your personal information. We are dedicated to maintaining a secure and reliable shopping environment while respecting your privacy. Your trust and satisfaction are our top priorities. – The TreNdzY Team
          </p>
        </div>
      </div>
    </Container>
  );
};

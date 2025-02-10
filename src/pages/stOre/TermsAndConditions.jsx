import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

export const TermsAndConditions = () => {
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
            Terms and Conditions
          </h1>
        </div>
        <div className={theme ? "text-center text-black" : "text-center"}>
          <p>
            Welcome to <strong>TreNdzY</strong> –  your trusted destination for high-quality products and a seamless shopping experience.
             By accessing or using our platform, you agree to comply with these Terms and Conditions. If you do not agree, please refrain from using our services.
              You may use our website for lawful purposes only, and any fraudulent activity is strictly prohibited. 
              To make a purchase, you may need to create an account, ensuring that all provided information is accurate and up to date. 
              You are responsible for maintaining the security of your account credentials. Prices are subject to change without prior notice, 
              and while we strive for accuracy, occasional errors may occur. Payments must be made in full at checkout using accepted methods, 
              including credit/debit cards and digital wallets. We offer multiple shipping options, and estimated delivery times vary based on location and method selected.
               Any applicable shipping fees will be displayed at checkout. If you are not satisfied with your purchase, please refer to our Return & Refund Policy for details,
                as certain conditions may apply. We are committed to protecting your privacy and personal data; please review our Privacy Policy to understand how we collect and safeguard your 
                information. While we aim to provide a smooth and reliable shopping experience, TreNdzY is not liable for indirect, incidental, or consequential damages arising 
                from the use of our platform. Our liability, if applicable, is limited to the total amount paid for the product in question. These Terms and Conditions may be updated periodically, 
                and changes will be posted on this page. It is your responsibility to review them regularly. These terms are governed by the laws of the jurisdiction in which TreNdzY operates,
                 and any disputes will be subject to the exclusive jurisdiction of the relevant courts. If you have any questions, 
            feel free to contact our support team at <a href="mailto:support@TreNdzY.com">Support@TreNdzY.com</a>. Thank you for shopping with us!
          
          </p>
        </div>
      </div>
    </Container>
  );
};

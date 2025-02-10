import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

export const CookiePolicy = () => {
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
            Cookie Policy
          </h1>
        </div>
        <div className={theme ? "text-center text-black" : "text-center"}>
          <p>
            Welcome to <strong>TreNdzY</strong>. We use cookies and similar tracking technologies to improve your browsing experience, enhance website functionality,
             and personalize the services we offer. This Cookies Policy explains what cookies are, how we use them, and how you can manage your preferences. By continuing to use our website, 
            you agree to our use of cookies as described in this policy.
            policy. <br /> <br />

            <strong>1. Understanding Cookies</strong> Cookies are small text files stored on your device when you visit a website. These files help websites
             recognize your device, remember your preferences, and improve overall usability. Cookies allow us to provide a smooth browsing experience,
              analyze website performance, and deliver personalized content and advertisements. <br /> <br />

            <strong>2.  Types of Cookies We Utilize:</strong> We use different categories of cookies to enhance your experience: <br />-{" "}
            <strong>Essential Cookies:</strong> These cookies are required for the core functionality of our website. They enable you to navigate pages, access secure areas, and use key features such as shopping carts and account logins. <br />
            - <strong>Performance Cookies:</strong> These cookies help us analyze how visitors interact with our website, such as tracking popular pages and monitoring loading speeds. The insights gained allow us to optimize performance and enhance user experience. <br />-{" "}
            <strong>Functionality Cookies:</strong> These cookies store your preferences, such as language selection and region settings, ensuring a more customized and convenient browsing experience. <br />-{" "}
            <strong>Targeting and Advertising Cookies:</strong> These cookies help us deliver advertisements relevant to your interests. They also track the effectiveness of marketing campaigns and limit the number of times you see certain ads. <br /> <br />

            <strong>3. Controlling Your Cookie Preferences:</strong>You have control over how cookies are used on your device. 
            Most web browsers allow you to adjust cookie settings, block cookies, or delete stored cookies. However, please be aware 
            that disabling certain cookies may impact your ability to access certain website features or degrade your browsing experience. <br /> <br />

            <strong>4. Third-Party Cookies:</strong> Some of our trusted partners, such as analytics providers and advertising networks,
             may place cookies on your device to help us understand user behavior, track website performance, and deliver targeted advertisements. 
             These third parties are obligated to comply with data protection regulations and cannot use your information for unauthorized purposes. <br /> <br />

            <strong>5.  Your Consent and Choices:</strong>By using our website, you consent to our use of cookies in accordance with this policy.
             If you prefer to opt out, you can manage your cookie settings through your browser or refrain from using our website. You can also
              review your preferences through our cookie settings panel, where available. <br /> <br />

            <strong>6. Updates to This Policy:</strong> We may revise this Cookies Policy periodically to reflect changes in technology, legal requirements,
             or our business practices. Any updates will be posted on this page, and we encourage you to review the policy regularly to stay informed. <br /> <br />

            <strong>7. Contact Us:</strong>If you have any questions or concerns regarding our use of cookies or this policy, 
            please reach out to us at <a href="mailto:support@TreNdzY.com">Support@TreNdzY.com</a>.  <br /> <br />
            Thank you for choosing TreNdzY. We are committed to providing you with a secure and personalized shopping experience!
             – The TreNdzY Team
          </p>
        </div>
      </div>
    </Container>
  );
};

import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

export const Jobs = () => {
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
            Careers at TreNdzY
          </h1>
        </div>
        <div className={theme ? "text-center text-black" : "text-center"}>
          <p>
          Are you ready to be part of a dynamic and innovative team? At <strong>TreNdzY</strong> , we’re on a mission to revolutionize online shopping by offering high-quality products and
           seamless customer experiences. We’re always looking for creative, driven, and passionate individuals to join us in shaping the future of e-commerce.
            If you’re looking for a career where your ideas matter and your skills make a difference,
           we’d love to have you on board!
             <br /> <br />
            <strong>Current Job Openings:</strong> <br /> <br />
            <strong>1. Frontend Developer</strong> <br />
            As a Frontend Developer, you will be responsible for creating visually stunning and highly interactive
             web experiences that enhance customer engagement and usability. <br />
            <strong>Responsibilities:</strong>
            <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
              <li>
              Develop and implement user-friendly web interfaces using React.js and modern frameworks.
              </li>
              <li>
              Collaborate with designers and backend developers to create seamless functionality.
              </li>
              <li>Optimize applications for speed, scalability, and cross-browser compatibility.
              </li>
              <li>Stay updated with the latest UI/UX trends and technologies.</li>
            </ul>
            <strong>Requirements:</strong>
            <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
              <li>Proficiency in HTML, CSS, JavaScript, and React.js.</li>
              <li>Strong understanding of APIs, databases and experience with responsive design and frontend performance optimization</li>
              <li>Strong problem-solving skills and attention to detail.</li>
            </ul>
            <br />
            <strong>2. E-commerce Operations Specialist</strong> <br />
            As an E-commerce Operations Specialist, you will manage the daily operations of our online store,
             ensuring smooth order fulfillment and excellent customer experiences. <br />
            <strong>Responsibilities:</strong>
            <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
              <li>
              Monitor order processing, shipping, and inventory management.
              </li>
              <li>Coordinate with vendors and logistics partners for efficient delivery.</li>
              <li>Analyze sales trends and provide insights to optimize product listings.</li>
              <li>Handle customer escalations and provide resolutions.</li>
            </ul>
            <strong>Requirements:</strong>
            <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
              <li>Experience in e-commerce operations, logistics, or supply chain management.</li>
              <li>Strong analytical and problem-solving skills.</li>
              <li>Ability to multitask and work in a fast-paced environment.</li>
            </ul>
            <br />
            <strong>3. UI/UX Designer</strong> <br />
            As a UI/UX Designer, you will play a key role in shaping the look, feel, and usability of our e-commerce platform, 
            ensuring a seamless and engaging shopping experience for our customers. <br />
            <strong>Responsibilities:</strong>
            <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
              <li>
              Design user-friendly and visually appealing interfaces for web and mobile.
              </li>
              <li>Conduct user research and analyze feedback to improve UI/UX.</li>
              <li>Create wireframes, prototypes, and design mockups.</li>
              <li>Handle customer escalations and provide resolutions.</li>
            </ul>
            <strong>Requirements:</strong>
            <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
              <li>Proficiency in design tools like Figma, Adobe XD, or Sketch.</li>
              <li>Strong understanding of user-centered design principles.</li>
              <li>Experience in e-commerce or product design is a plus.</li>
            </ul>
            <br />
            <strong>How to Apply:</strong> <br />
            Interested in joining our team? Send your resume and a brief cover letter to{" "}
            <a href="mailto:careers@TreNdzY.com">careers@TreNdzY.com</a>.with the job title in the subject line.
             We look forward to hearing from you! <br /> <br />
             We’re excited to learn more about you and how you can contribute to our growing success!
          </p>
        </div>
      </div>
    </Container>
  );
};

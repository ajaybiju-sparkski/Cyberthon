import { useEffect } from "react";

const DisplaySection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollValue =
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
      document.body.style.setProperty("--scroll", scrollValue);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="display-section wrapper">
      <img className="img-name" src="CYBERTHON.png" alt="Cyberthon banner" />
      <div className="section-move">
        <div style={{ height: "200vh" }}>
          {" "}
          <img
            className="img-vis"
            src="vision.pro.png"
            alt="Rotating and Zooming Element"
          />
        </div>
        <h1 className="display-h1">ABOUT US</h1>
        <p className="display-p">
          Cyberthon by SRM Institute of Science and Technology is a global
          36-hour hackathon, open to teams of 1-4, held both online and offline.
          Dive into fields like Data Science, AI, Robotics, IoT, AR/VR, and
          Blockchain to build innovative solutions. Join us for non-stop
          learning, problem-solving, and a chance to win fantastic prizes. Don’t
          miss out on this unforgettable journey!
        </p>
        <button className="display-button">
          REGISTER NOW
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;
        </button>
        <div className="date-sec">
          <h1 className="display-date">Feb 20 & 21</h1>
          <p className="display-dcon">
            A high-stakes arena where top minds tackle real-world problems.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisplaySection;

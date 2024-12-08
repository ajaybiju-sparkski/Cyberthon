import React from "react";

const HackathonPage = () => {
  return (
    <div className="hackathon-page">
      <section className="timeline-section">
        <h1 className="timeline-title">TIMELINE</h1>
        <div className="timeline">
          <div className="timeline-item">
            <div className="dot"></div>
            <div className="time">08:30 AM</div>
            <div className="event">Inauguration</div>
          </div>
          <div className="line"></div>
          <div className="timeline-item">
            <div className="dot"></div>
            <div className="time">10:00 AM</div>
            <div className="event">Hackathon Starts</div>
          </div>
          <div className="line"></div>
          <div className="timeline-item">
            <div className="dot"></div>
            <div className="time">01:00 AM</div>
            <div className="event">Judging-1</div>
          </div>
          <div className="line"></div>
          <div className="timeline-item">
            <div className="dot"></div>
            <div className="time">09:00 AM</div>
            <div className="event">Judging-2</div>
          </div>
          <div className="line"></div>
          <div className="timeline-item">
            <div className="dot"></div>
            <div className="time">10:00 AM</div>
            <div className="event">Hackathon Ends</div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <h1 className="faq-title">FAQ</h1>
        <div className="faq-list">
          <div className="faq-item">What is a Hackathon?</div>
          <div className="faq-item">Who can participate?</div>
          <div className="faq-item">
            Can we bring our own team or form a team at the event?
          </div>
          <div className="faq-item">Is there any registration fee?</div>
          <div className="faq-item">
            What should you bring with you for the hackathon?
          </div>
          <div className="faq-item">Have a question aside from these?</div>
        </div>
      </section>
    </div>
  );
};

export default HackathonPage;

import Nav from "./components/Nav.jsx";
import DisplaySection from "./components/DisplaySection.jsx";
import Tracks from "./components/Tracks.jsx";
import { useRef } from "react";
import HackathonTimeline from "./components/HackathonTimeline.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  const webgiViewerRef = useRef();
  const contentRef = useRef();

  const handlePreview = () => {
    webgiViewerRef.current.triggerPreview();
  };
  return (
    <div>
      <Nav />
      <DisplaySection />
      <Tracks />
      <HackathonTimeline />
      <Footer />
    </div>
  );
}

export default App;

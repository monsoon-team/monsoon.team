import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import monsoonLogo from "../public/monsoon-logo.png";

export default function Index() {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        style={{
          objectFit: "cover",
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: "0",
          left: "0",
          zIndex: "0",
        }}
      >
        <source src="/monsoon_video_background.mp4" type="video/mp4" />
      </video>
      <div
        style={{
          backdropFilter: "blur(4px) saturate(125%)",
          backgroundColor: "rgba(0, 0, 0, 0.25)",
          height: "100vh",
          width: "100vw",
        }}
      >
        <Navbar active={"home"} />
        <Image
          className="centerImage"
          src={monsoonLogo}
          placeholder="blur"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "1",
            height: "300px",
            objectFit: "scale-down",
          }}
        />
      </div>
      <Footer />
    </>
  );
}

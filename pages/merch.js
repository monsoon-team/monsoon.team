import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

import monsoonMousePad from "../public/images/merch/monsoon-mouse-pad.png";

export default function Merch() {
  const merchData = [
    {
      name: "Monsoon Mouse Pad",
      image: monsoonMousePad,
      price: 28.95,
      shipping: 15,
      stripeLinkLive: "https://buy.stripe.com/dR64hy6Vfg8u4WA144",
    },
  ];

  const merchCards = merchData.map((merch) => (
    <a
      href={merch.stripeLinkLive}
      className="col-12 col-md-6 col-lg-4"
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
      target="_blank"
      key={merch.name}
    >
      <div className="card text-center">
        <Image
          src={merch.image}
          alt={merch.name}
          placeholder="blur"
          style={{
            width: "100%",
            height: "150px",
            objectFit: "cover",
          }}
        />
        <div className="card-body">
          <h5 className="card-title">{merch.name}</h5>
          <p className="card-text">
            ${merch.price} + ${merch.shipping} shipping
          </p>
        </div>
      </div>
    </a>
  ));

  return (
    <>
      <Navbar active={"home"} />
      <div className="container">
        <h1 className="text-center mt-5 display-1 fw-normal">Merch</h1>
        <div className="row mt-5">{merchCards}</div>
      </div>
      <Footer />
    </>
  );
}

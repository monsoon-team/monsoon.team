import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitch,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import Image from "next/image";

import krankyImage from "../public/roster/KrankyGuy.png";
import yowazImage from "../public/roster/Yowaz.png";
import tinycrusaderImage from "../public/roster/Tinycrusader.png";
import fiftyImage from "../public/roster/FiftyFree.png";
import oooImage from "../public/roster/Ooo.png";

import tankIcon from "../public/TankIcon.webp";
import damageIcon from "../public/DamageIcon.webp";
import supportIcon from "../public/SupportIcon.webp";

export default function Roster() {
  // This is a hack to prevent the page from having issues rehydrating
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  const rosterData = [
    {
      name: "KrankyGuy",
      role: "Main Tank",
      roleImage: tankIcon,
      number: "24",
      rank: "Masters 5",
      image: krankyImage,
      socials: {
        twitch: "",
        twitter: "KrankyGuy_",
        youtube: "",
      },
    },
    {
      name: "Yowaz",
      role: "Flex Tank",
      roleImage: tankIcon,
      number: "05",
      rank: "Masters 5",
      image: yowazImage,
      socials: {
        twitch: "",
        twitter: "Yowaz_ow",
        youtube: "",
      },
    },
    {
      name: "Tinycrusader",
      role: "Main Support",
      roleImage: supportIcon,
      number: "13",
      rank: "Masters 5",
      image: tinycrusaderImage,
      socials: {
        twitch: "",
        twitter: "tinycrusader",
        youtube: "",
      },
    },
    {
      name: "FiftyFree",
      role: "Flex Support",
      roleImage: supportIcon,
      number: "29",
      rank: "Masters 5",
      image: fiftyImage,
      socials: {
        twitch: "",
        twitter: "FiftyFree_",
        youtube: "",
      },
    },
    {
      name: "Ooo",
      role: "Flex Support",
      roleImage: supportIcon,
      number: "47",
      rank: "Masters 5",
      image: oooImage,
      socials: {
        twitch: "",
        twitter: "lilooo47",
        youtube: "",
      },
    },
  ].sort(() => 0.5 - Math.random());

  const Roster = rosterData.map((player) => (
    <div className="col-12 col-md-6 col-lg-4 mb-4" key={player.name}>
      <div
        className="card"
        style={{ backgroundColor: "#000", borderRadius: "0" }}
      >
        <Image
          src={player.image}
          className="card-img-top"
          alt={player.name}
          placeholder="blur"
          style={{
            height: "150px",
            objectFit: "cover",
            borderRadius: "0",
          }}
        />
        <div className="card-body" style={{ padding: "15px 5px" }}>
          <div className="card-title">
            <h2
              className="card-title"
              style={{
                marginLeft: "-10px",
                marginRight: "28px",
              }}
            >
              <Image
                src={player.roleImage}
                alt={player.role}
                placeholder="blur"
                height={30}
                style={{
                  verticalAlign: "top",
                  marginTop: "3px",
                }}
              />
              {player.name}
            </h2>
          </div>
          <h5 className="card-text">
            #{player.number} - {player.rank} - {player.role}
          </h5>
          <h3 className="row mb-0">
            {player.socials.twitch ? (
              <a
                href={"https://twitch.tv/" + player.socials.twitch}
                target="_blank"
                className="col"
              >
                <FontAwesomeIcon icon={faTwitch} />
              </a>
            ) : null}
            {player.socials.twitter ? (
              <a
                href={"https://twitter.com/" + player.socials.twitter}
                target="_blank"
                className="col"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            ) : null}
            {player.socials.youtube ? (
              <>
                <a
                  href={"https://youtube.com/" + player.socials.youtube}
                  target="_blank"
                  className="col"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </>
            ) : null}
          </h3>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <Navbar active={"roster"} />
      <div className="container mt-5 text-center">
        <h1 className="display-1 fw-normal">Active Roster</h1>
        <div className="row text-center text-white mt-5">{Roster}</div>
      </div>
      <Footer />
    </>
  );
}

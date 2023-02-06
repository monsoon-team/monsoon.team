import React from "react";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitch,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

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
      image: "/roster/KrankyGuy.png",
      socials: {
        twitch: "",
        twitter: "KrankyGuy_",
        youtube: "",
      },
    },
    {
      name: "Yowaz",
      role: "Flex Tank",
      image: "/roster/Yowaz.png",
      socials: {
        twitch: "",
        twitter: "Yowaz_ow",
        youtube: "",
      },
    },
    {
      name: "Tinycrusader",
      role: "Main Support",
      image: "/roster/Tinycrusader.png",
      socials: {
        twitch: "",
        twitter: "tinycrusader",
        youtube: "",
      },
    },
    {
      name: "FiftyFree",
      role: "Flex Support",
      image: "/roster/FiftyFree.png",
      socials: {
        twitch: "",
        twitter: "FiftyFree_",
        youtube: "",
      },
    },
    {
      name: "Ooo",
      role: "Flex Support",
      image: "/roster/Ooo.png",
      socials: {
        twitch: "",
        twitter: "lilooo47",
        youtube: "",
      },
    },
  ].sort((a, b) => 0.5 - Math.random());

  const Roster = rosterData.map((player) => (
    <div className="col-12 col-md-6 col-lg-4 mb-4" key={player.name}>
      <div className="card">
        <img
          src={player.image}
          className="card-img-top"
          alt={player.name}
          style={{
            height: "150px",
            objectFit: "cover",
          }}
        />
        <div className="card-body">
          <h2 className="card-title">{player.name}</h2>
          <h5 className="card-text">{player.role}</h5>
          <h3 className="row">
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
        <h1>Active Roster</h1>
        <div className="row text-center text-white mt-5">{Roster}</div>
      </div>
    </>
  );
}

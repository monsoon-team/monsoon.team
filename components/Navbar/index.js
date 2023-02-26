import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitch,
  faTwitter,
  faYoutube,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

export default (props) => {
  const links = [
    // { name: "About", href: "/about", text: "About" },
    { name: "Roster", href: "/roster", text: "Roster" },
    // { name: "Academy", href: "/academy", text: "Academy" },
    // {
    //   name: "More",
    //   href: "#",
    //   text: "More",
    //   children: [{ name: "Merch", href: "/merch", text: "Merch" }],
    // },
    {
      name: "Twitch",
      href: "https://www.twitch.tv/ow_monsoon",
      text: <FontAwesomeIcon icon={faTwitch} />,
      external: true,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/ow_monsoon",
      text: <FontAwesomeIcon icon={faTwitter} />,
      external: true,
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/channel/UCHH4jd80mnYNEvmYbAQKBOA",
      text: <FontAwesomeIcon icon={faYoutube} />,
      external: true,
    },
    {
      name: "Discord",
      href: "https://discord.gg/TAJ9BT3zfG",
      text: <FontAwesomeIcon icon={faDiscord} />,
      external: true,
    },
  ].map((link) => {
    if (link.children)
      return (
        <li className="nav-item dropdown" key={link.name}>
          <a
            className="nav-link dropdown-toggle"
            href={link.href}
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {link.text}
          </a>
          <ul className="dropdown-menu">
            {link.children.map((child) => (
              <li key={child.name}>
                <a
                  className="dropdown-item"
                  href={child.href}
                  target={child.external ? "_blank" : ""}
                >
                  {child.text}
                </a>
              </li>
            ))}
          </ul>
        </li>
      );

    return (
      <li className="nav-item" key={link.name}>
        <a
          className={
            props.active === link.name.toLowerCase()
              ? "nav-link active"
              : "nav-link"
          }
          href={link.href}
          target={link.external ? "_blank" : ""}
        >
          {link.text}
        </a>
      </li>
    );
  });

  return (
    <nav className="navbar navbar-expand-sm navbar-dark">
      <div className="container">
        <a
          className="navbar-brand"
          href="/"
          style={{
            fontSize: "2rem",
          }}
        >
          <b>MONSOON</b>
        </a>
        <ul
          className="navbar-nav"
          style={{
            fontSize: "1.3rem",
          }}
        >
          {links}
        </ul>
      </div>
    </nav>
  );
};

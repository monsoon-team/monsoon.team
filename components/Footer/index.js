import React from "react";

export default () => {
  // This is a hack to prevent the page from having issues rehydrating
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  const favouriteVoicelines = [
    {
      voiceline: "Good kitty.",
      character: "Ana",
      requestee: "capyblapy",
    },
    {
      voiceline: "Someone call the whambulance.",
      character: "Mercy",
      requestee: "capyblapy",
    },
    {
      voiceline: "It's in the refridgerator.",
      character: "Reaper",
      requestee: "capyblapy",
    },
    {
      voiceline: "I'm on auto pilot.",
      character: "Pharah",
      requestee: "Athena",
    },
    {
      voiceline: "I've got a few tricks.",
      character: "Kiriko",
      requestee: "Athena",
    },
    {
      voiceline: "I got a present for you.",
      character: "Brigitte",
      requestee: "Athena",
    },
    {
      voiceline: "Crushing Machine",
      character: "Reinhardt",
      requestee: "Artemis",
    },
    {
      voiceline: "100% German Power!",
      character: "Reinhardt",
      requestee: "Artemis",
    },
    {
      voiceline: ";)",
      character: "D.Va",
      requestee: "Artemis",
    },
    {
      voiceline: "Put me in, coach!",
      character: "Lucio",
      requestee: "KrankyGuy",
    },
    {
      voiceline: "Hit me!",
      character: "Lucio",
      requestee: "Tinycrusader",
    },
    {
      voiceline: "Croissant?",
      character: "Sojourn",
      requestee: "FiftyFree",
    },
    {
      voiceline: "Curses and madness be upon you all.",
      character: "Zenyatta",
      requestee: "idiota",
    },
  ];

  const randomVoiceline =
    favouriteVoicelines[Math.floor(Math.random() * favouriteVoicelines.length)];

  return (
    <div
      className="container fixed-bottom"
      style={{
        pointerEvents: "none",
      }}
    >
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
        <p className="col-md-4 mb-0 text-muted">Est. 2022</p>

        <a
          href="https://unnamed.group"
          target={"_blank"}
          className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <img
            className="bi me-2"
            src="/unnamed-group-logo.gif"
            width="50"
            height="50"
          />
        </a>

        <p className="col-md-4 mb-0 text-muted text-end">
          {`
            "${randomVoiceline.voiceline}" - ${randomVoiceline.character} (${randomVoiceline.requestee})
          `}
        </p>
      </footer>
    </div>
  );
};

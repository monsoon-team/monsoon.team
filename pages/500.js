import React from "react";

export default function Custom500() {
  // This is a hack to prevent the page from having issues rehydrating
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  const array500Images = [
    "/reaper-walkaway.gif",
    "/ow2-mech.gif",
    "/doolanbouncemin.gif",
    "/firestrike.gif",
  ];

  const random500 =
    array500Images[Math.floor(Math.random() * array500Images.length)];

  setInterval(() => {
    let countdown = document.getElementById("countdown");

    if (countdown.innerHTML == 0) {
      window.location.href = "/";
    } else {
      countdown.innerHTML = countdown.innerHTML - 1;
    }
  }, 1000);

  return (
    <div className="perfectCenter">
      <img
        className="mx-auto d-block"
        src={random500}
        style={{
          height: "420px",
          width: "420px",
          objectFit: "cover",
        }}
      />
      <p className="text-center text-white mt-5">
        <h1>500 - Internal Server Error</h1>
        Redirecting to <a href="/">home</a> in <span id="countdown">3</span>{" "}
        seconds...
      </p>
    </div>
  );
}

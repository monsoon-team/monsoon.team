import React from "react";

export default function Custom404() {
  // This is a hack to prevent the page from having issues rehydrating
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  const array404Images = [
    "/confused-widow.png",
    "/confused-lucio.png",
    "/shocked-windings.png",
  ];

  const random404 =
    array404Images[Math.floor(Math.random() * array404Images.length)];

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
        src={random404}
        style={{
          height: "420px",
          width: "420px",
          objectFit: "cover",
        }}
      />
      <p className="text-center text-white mt-5">
        <h1>404 - Page Not Found</h1>
        Redirecting to <a href="/">home</a> in <span id="countdown">3</span>{" "}
        seconds...
      </p>
    </div>
  );
}

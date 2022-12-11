import React from "react";
import "./Hero.scss";
import heroImage from "../../assets/heroImage.png";
import client1 from "../../assets/client-audiophile.svg";
import client2 from "../../assets/client-databiz.svg";
import client3 from "../../assets/client-maker.svg";
import client4 from "../../assets/client-meet.svg";
const clientArray = [client2, client1, client4, client3];
function Hero() {
  return (
    <div className="heroWrapper">
      <div className="heroContentWrapper">
        <h1>
          Make remote work
        </h1>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button>Learn More</button>
        <div>
          {clientArray.map((client) => (
            <img src={client} alt="" srcset="" />
          ))}
        </div>
      </div>
      <div className="heroImageWrapper">
        <img src={heroImage} alt="" />
      </div>
    </div>
  );
}

export default Hero;

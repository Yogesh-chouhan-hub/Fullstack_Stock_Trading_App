import React from "react";
import Hero from "./Hero";
import Universe from "./Universe";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
const ProductPage = () => {
  return (
    <div>
      <Hero />
      <LeftSection
        imageUrl="../public/Kite.png"
        lsTitle="Kite"
        lsDes="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.

"
      />
      <RightSection
        imageUrl="console.png"
        rsTitle="Console"
        rsDes="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
      />
      <LeftSection
        imageUrl="../public/coin.png"
        lsTitle="Coin"
        lsDes="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.

"
      />
      <RightSection
        imageUrl="../public/kiteconnect.png"
        rsTitle="Kite Connect API"
        rsDes="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
      />
      <LeftSection
        imageUrl="../public/varsity.png"
        lsTitle="Varsity mobile"
        lsDes="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.

"
      />
      <Universe />
    </div>
  );
};

export default ProductPage;

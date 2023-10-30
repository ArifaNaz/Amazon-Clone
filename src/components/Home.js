import React, { useEffect, useState } from "react";
import background from "../images/home-bg.jpg";
import background2 from "../images/home-bg-2.jpg";
import "../styles/Home.css";
import Product from "./Product";

// Images
import iphone from "../images/product-iphone13.png";
import samsungs21 from "../images/product-samsungs21.png";
import amazonecho from "../images/product-amazonecho.png";
import ipadpro from "../images/product-ipadpro.png";
import applewatch from "../images/product-applewatch.png";
import samsungtv from "../images/product-samsungtv.png";
import smarttv from "../images/product-smarttv.jpg";
import LGtv from "../images/product-LGtv.jpg";

import KeyboardMouse from "../images/product-KeyboardMouse.jpg";
import { useSelector } from "react-redux";

function Home({ mediaWidth }) {
  const cart = useSelector((state) => state.cart);
  const [alert, setAlert] = useState(null);
  const [timeOutID, setTimeOutID] = useState(null);

  useEffect(() => {
    if (cart.length) {
      setAlert("Item added to cart");
      
      if (timeOutID) clearTimeout(timeOutID);

      const TID = setTimeout(() => {
        setAlert(null);
      }, 1000);
      setTimeOutID(TID);
    }
  }, [cart]);

  return (
    <div className="home">
      <div className="home__container">
        <img src={mediaWidth > 840 ? background : background2} alt="home-background" className="home__image" />

        <h1 className="category">ShopBy Category|Computers </h1>

<div className="home__row">
  <Product
    key="537343"
    id="537343"
    image={KeyboardMouse}
    title="Logitech MK270 Wireless Keyboard And Mouse Combo For Windows, 2.4 GHz Wireless, Compact Mouse, 8 Multimedia And Shortcut Keys, For PC, Laptop - Black"
    price="99.99"
    rating={4.5}
  />
  <Product
    key="537343"
    id="537343"
    image={samsungtv}
    title="SAMSUNG Odyssey 32-Inch WQHD (2560x1440) Gaming Monitor"
    price="199.99"
    rating={3.5}
  />
  <Product
    key="537343"
    id="537343"
    image={samsungtv}
    title="SAMSUNG Odyssey 32-Inch WQHD (2560x1440) Gaming Monitor"
    price="199.99"
    rating={3.5}
  />
</div>








        <h1 className="category">ShopBy Category|Electronics </h1>
        <div className="home__row">

          <Product
            key="537338"
            id="537338"
            image={iphone}
            title="Apple iPhone 13, 128GB, Blue - Unlocked (Renewed)"
            price="814.99"
            rating={4.5}
          />
          <Product
            key="537339"
            id="537339"
            image={samsungs21}
            title="Samsung Galaxy S21 5G, 128GB, Phantom Gray"
            price="599.99"
            rating={4.5}
          />
        </div>



        <div className="home__row">
          <Product
            key="537338"
            id="12321341"
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price="11.96"
            rating={5}
          />
          <Product
            key="537339"
            id="49538094"
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price="238.99"
            rating={4}
          />
        </div>






        <div className="home__row">
          <Product
            key="537340"
            id="537340"
            image={amazonecho}
            title="Echo (4th generation) With Alexa"
            price="1299.99"
            rating={5}
          />
          <Product
            key="537341"
            id="537341"
            image={ipadpro}
            title="2021 Apple iPad Pro (Wi-Fi, 128GB) - Silver"
            price="599.99"
            rating={5}
          />
          <Product
            key="537342"
            id="537342"
            image={applewatch}
            title="Apple Watch Series 3 - Silver Aluminum Case"
            price="139.00"
            rating={4.5}
          />
        </div>


        <h1 className="category">ShopBy Category|Smart Home </h1>

        <div className="home__row">
          <Product
            key="537343"
            id="537343"
            image={smarttv}
            title="VIZIO 40-inch D-Series Full HD 1080p Smart TV with Apple AirPlay and Chromecast Built-in, Alexa Compatibility, D40f-J09, 2022 Model"
            price="178.99"
            rating={4.3}
          />

          <Product
            key="537343"
            id="537343"
            image={LGtv}
            title="LG C1 Series 65-Inch Class OLED Smart TV OLED65C1PUB, 2021 - 4K TV, Alexa Built-in"
            price="178.99"
            rating={4.7}
          />


        </div>






        {/* <h1 className="category">ShopBy Category|Computers </h1>

        <div className="home__row">
          <Product
            key="537343"
            id="537343"
            image={KeyboardMouse}
            title="Logitech MK270 Wireless Keyboard And Mouse Combo For Windows, 2.4 GHz Wireless, Compact Mouse, 8 Multimedia And Shortcut Keys, For PC, Laptop - Black"
            price="99.99"
            rating={4.5}
          />
          <Product
            key="537343"
            id="537343"
            image={samsungtv}
            title="SAMSUNG Odyssey 32-Inch WQHD (2560x1440) Gaming Monitor"
            price="199.99"
            rating={3.5}
          />
          <Product
            key="537343"
            id="537343"
            image={samsungtv}
            title="SAMSUNG Odyssey 32-Inch WQHD (2560x1440) Gaming Monitor"
            price="199.99"
            rating={3.5}
          />
        </div>


 */}

      </div>
      {mediaWidth > 840 && (
        <div
          className={
            alert === "Item added to cart"
              ? "home__alert active"
              : "home__alert"
          }
        >
          {alert}
        </div>
      )}
    </div>
  );
}

export default Home;

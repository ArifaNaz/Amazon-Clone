import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { auth } from "../config/firebase";
import { setUser } from "../redux/actions";
import Payment from "./Payment";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
import SignUp from "./SignUp";


const promise = loadStripe(
  // "pk_test_51Md6n4B7qP54G0Nz0n5738QPXE6iFTJepOhh9SOADjebV0XOp0itbzfYI3xNEn6ADxzcBCDrKCo7R7Wr3ttpSigs005fruoYVi"

  "pk_test_51Md6n4B7qP54G0Nz0n5738QPXE6iFTJepOhh9SOADjebV0XOp0itbzfYI3xNEn6ADxzcBCDrKCo7R7Wr3ttpSigs005fruoYVi"
);

function App() {
  //this is the start code of amazonclone
  const dispatch = useDispatch();

  // Detect size of screen
  const [mediaWidth, setMediaWidth] = useState(null);
  useEffect(() => setMediaWidth(window.innerWidth), []);
  window.addEventListener("resize", (event) =>
    setMediaWidth(event.target.innerWidth)
  );

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // The user logged in / was logged in
        dispatch(setUser(authUser));
      } else {
        // The user logged out
        dispatch(setUser(null));
      }
    });
  });

  return (
  
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header mediaWidth={mediaWidth}/>
                <Home mediaWidth={mediaWidth}/>
              </>
            }
          />
          <Route
            path="/orders"
            element={
              <>
                <Header mediaWidth={mediaWidth}/>
                <Orders />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/checkout"
            element={
              <>
                <Header mediaWidth={mediaWidth}/>
                <Checkout />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Header mediaWidth={mediaWidth}/>
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
        </Routes>
      </div>
    </Router>

  );
}

export default App;

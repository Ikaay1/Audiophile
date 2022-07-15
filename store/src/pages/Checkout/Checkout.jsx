import React, { useState } from "react";
import Header from "../../components/Product/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Checkout.css";
import { useStateContext } from "../../App";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, setCart } = useStateContext();
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    state: "",
    country: "",
    pin: "",
    num: "",
  });

  const [payment, setPayment] = useState(null);

  const [showthanks, setShowthanks] = useState(false);

  const handleChange = (e) => {
    setDetails((prevDetails) => ({
      ...prevDetails,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = (e) => {
    setPayment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowthanks(true);
    setDetails({
      name: "",
      email: "",
      phone: "",
      address: "",
      zip: "",
      state: "",
      country: "",
      pin: "",
      num: "",
    });
  };

  const handleReturn = () => {
    localStorage.removeItem("cart");
    setCart([]);
    navigate("/");
  };

  return (
    <div className="checkout">
      <Header />
      <form className="checkoutflex" onSubmit={handleSubmit}>
        <div className="checkoutform">
          <p>Checkout</p>
          <div className="billinginfo">
            <p>Billing Details</p>
            <div className="billingdetails">
              <div className="bname">
                <p>Name</p>
                <input
                  type="text"
                  autoComplete="off"
                  required
                  name="name"
                  value={details.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                />
              </div>
              <div className="bemail">
                <p>Email Address</p>
                <input
                  type="text"
                  autoComplete="off"
                  required
                  name="email"
                  value={details.email}
                  onChange={handleChange}
                  placeholder="johndoe@gmail.com"
                />
              </div>
              <div className="bphone">
                <p>Phone Number</p>
                <input
                  type="number"
                  autoComplete="off"
                  required
                  name="phone"
                  value={details.phone}
                  onChange={handleChange}
                  placeholder="+2348055667788"
                />
              </div>
            </div>
            <div className="shippinginfo">
              <p>Shipping Info</p>
              <div className="saddress">
                <p>Address</p>
                <input
                  type="text"
                  autoComplete="off"
                  required
                  name="address"
                  value={details.address}
                  onChange={handleChange}
                  placeholder="113 Williams Avenue, Oko-oba Agege, Lagos Nigeria"
                />
              </div>
              <div className="shippingflex">
                <div className="szip">
                  <p>ZIP Code</p>
                  <input
                    type="number"
                    autoComplete="off"
                    required
                    name="zip"
                    value={details.zip}
                    onChange={handleChange}
                    placeholder="101101"
                  />
                </div>
                <div className="sstate">
                  <p>State</p>
                  <input
                    type="text"
                    autoComplete="off"
                    required
                    name="state"
                    value={details.state}
                    onChange={handleChange}
                    placeholder="New York"
                  />
                </div>
                <div className="scountry">
                  <p>Country</p>
                  <input
                    type="text"
                    autoComplete="off"
                    required
                    name="country"
                    value={details.country}
                    onChange={handleChange}
                    placeholder="Nigeria"
                  />
                </div>
              </div>
            </div>
            <div className="paymentinfo">
              <p>Payment Details</p>
              <div className="paymentmethod">
                <p>Payment Method</p>
                <div>
                  <div className="emoney">
                    <input
                      type="radio"
                      required
                      name="payment"
                      id="eMoney"
                      value="e-M"
                      onClick={handleClick}
                    />{" "}
                    <label htmlFor="e-money">e-Money</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      required
                      name="payment"
                      id="cash"
                      value="bycash"
                      onClick={handleClick}
                    />{" "}
                    <label htmlFor="cash">Cash on Delivery</label>
                  </div>
                </div>
              </div>
              {payment === "e-M" ? (
                <div className="cardnum">
                  <div className="enum">
                    <p>e-Money Number</p>
                    <input
                      type="number"
                      autoComplete="off"
                      required
                      name="num"
                      value={details.num}
                      onChange={handleChange}
                      placeholder="203456789"
                    />
                  </div>
                  <div className="epin">
                    <p>e-Money PIN</p>
                    <input
                      type="number"
                      autoComplete="off"
                      required
                      name="pin"
                      value={details.pin}
                      onChange={handleChange}
                      placeholder="0891"
                    />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="summary">
          <p>Summary</p>
          <div className="checkoutitem">
            {cart.map((item) => (
              <div key={item._id} className="checkoutproductflex">
                <div className="checkoutproduct">
                  <div className="checkoutimagecontainer">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="checkoutdesc">
                    <div>{item.name}</div>
                    <p>N{item.amount}</p>
                  </div>
                </div>
                <div className="checkoutamount">
                  <p>x{item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="checkouttotal">
            <div>Total</div>
            <p>N{cart.reduce((a, b) => a + b.quantity * b.amount, 0)}</p>
          </div>
          <div className="checkouttotal">
            <div>Shipping</div>
            <p>N5000</p>
          </div>
          <div className="checkouttotal">
            <div>Vat (Included)</div>
            <p>N2500</p>
          </div>
          <div className="checkoutgrandtotal">
            <div>Grand Total</div>
            <p>
              N
              {cart.reduce((a, b) => a + b.quantity * b.amount, 0) +
                5000 +
                2500}
            </p>
          </div>
          <button
            type="submit"
            style={{ cursor: "pointer" }}
            className="checkoutbtn"
          >
            Continue & Pay
          </button>
        </div>
      </form>
      <Footer />
      {showthanks ? (
        <div>
          <div className="modal"></div>
          <div className="success">
            <img src="/assets/success.png" alt="" />
            <div className="thanks">Thank you for your order</div>
            <p>You will receive an email confirmation shortly</p>
            <div className="successflex">
              <div className="successproductflex">
                <div className="successproduct">
                  <div className="successimagecontainer">
                    <img src={cart[0].image} alt="" />
                  </div>
                  <div className="successdesc">
                    <div>{cart[0].name}</div>
                    <p>N{cart[0].amount}</p>
                  </div>
                </div>
                <div className="successamount">
                  <p>x{cart[0].quantity}</p>
                </div>
                <p className="successother">
                  and {cart.length - 1} other items
                </p>
              </div>
              <div className="successgrandtotal">
                <div>GRAND TOTAL</div>
                <p>$5,446</p>
              </div>
            </div>
            <div
              className="checkoutbtn"
              style={{ cursor: "pointer" }}
              onClick={handleReturn}
            >
              Back to home
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Checkout;

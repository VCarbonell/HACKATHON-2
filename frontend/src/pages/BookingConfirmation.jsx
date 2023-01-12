/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import allCarPicure from "@services/allCarPicture";
import api from "@services/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@components/Header";
import BookingElement from "@components/BookingElement";
import PaymentCard from "@components/PaymentCard";
import Button from "@components/Button";
import { useFilter } from "../contexts/filterContext";
import { useUser } from '../contexts/userContext';
import "./BookingConfirmation.css";

function BookingConfirmation() {
  const {userInfo} = useUser();
  const { filter, actualCar } = useFilter();
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [carPic, setcarPic] = useState();
  const [day, setDay] = useState();
  const handleBook = (event) => {
    console.log(userInfo)
    api
      .post("booking/new", {
        email: userInfo.email,
        company: actualCar.company,
        car: actualCar.model,
        start_date: filter.start_date,
        end_date: filter.end_date,
        city: actualCar.name,
        car_id: actualCar.id,
        user_id: userInfo.id,
      })
      .then((res) => {
        if (res.status === 201) {
          // navigate("/");
        }
      })
      .catch((err) => setError(err.response.data.error));
    event.preventDefault();
  };

  const handleSubmit = (e) => {
    handleBook(e);
    navigate("/confirmation");
  };

  useEffect(() => {
    if (actualCar) {
      const [myCar] = allCarPicure.filter(
        (pic) => pic.name === actualCar.model
      );
      setcarPic(myCar.src);
    }
    const dayStart = Number(filter.start_date.slice(8));
    const dayEnd = Number(filter.end_date.slice(8));
    setDay(dayEnd - dayStart);
  }, [actualCar]);

  return (
    <div className="BookingConfirmation">
      <Header value="Booking" back="/city" />
      <BookingElement value="PAYMENT" src="true">
        <p id="BookingSelection">YOUR SELECTION : PAY ONLINE</p>
      </BookingElement>
      <PaymentCard />
      <p id="BookingCardInfo">
        If you use a credit card, it must be issued in the driver's name. Debit
        cards are accepted at certain locations and for certain categories of
        cars.
      </p>
      <BookingElement value="CHECK AND BOOK">
        {actualCar && (
          <div className="Check">
            <div className="CheckCarInfo">
              <h1>{actualCar.model}</h1>
              <p>Collect and return to this agency : {actualCar.name}</p>
            </div>
            <div className="CheckCarImg">
              {carPic && <img src={carPic} alt="Car" />}
            </div>
          </div>
        )}
      </BookingElement>
      <BookingElement value="YOUR OFFER INCLUDES">
        <ul className="Offer">
          <li>Third party insurance</li>
          <li>Theft and collision protection</li>
          <li>Kilometers included 400, 0.23 EUR per additional kilometer</li>
        </ul>
      </BookingElement>
      <BookingElement value="RENTAL PERIOD">
        {actualCar && (
          <div className="Rental">
            <p>Rental duration {`(${day} x ${actualCar.price})`}</p>
            <p>{day * actualCar.price} €</p>
          </div>
        )}
      </BookingElement>
      <BookingElement value="PROTECTIONS AND OPTIONS">
        <div className="Protections">
          <p className="ProtectionsInstructions">
            Theft and collision protection ZAR 11,000 deductible
          </p>
          <p>0,00 €</p>
        </div>
      </BookingElement>
      <BookingElement value="COSTS">
        <div className="Costs">
          <div>
            <p>Local supplement</p>
            <p>9,41 €</p>
          </div>
          <div>
            <p>Statutory contract fees</p>
            <p>5,74 €</p>
          </div>
        </div>
      </BookingElement>
      <BookingElement value="TOTAL">
        {actualCar && (
          <div className="Total">
            <div>
              <h1 id="TotalPrice">{day * actualCar.price + 9.41 + 5.74} €</h1>
              <p>Taxes included</p>
            </div>
          </div>
        )}
      </BookingElement>
      <p className="AcceptConditions">
        By clicking on the button, I confirm that I have read and accepted the
        rental information and the terms and conditions
      </p>
      <Button
        value="BOOK AND PAY ONLINE"
        className="btn"
        handle={handleSubmit}
      />
      <p className="Avertissements">
        I acknowledge that I am booking a prepaid rate, where the full rental
        price shown above is immediately charged to the credit card provided. I
        accept the charges associated with this tariff in the event
      </p>
    </div>
  );
}

export default BookingConfirmation;

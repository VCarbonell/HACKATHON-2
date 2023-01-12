/* eslint-disable import/no-unresolved */
import "./PaymentCard.css";
import card1 from "@assets/icons/AECard.png";
import card2 from "@assets/icons/Mastercard.png";
import card3 from "@assets/icons/VisaCard.png";

function PaymentCard() {
  return (
    <div className="PaymentCard">
      <div className="PaymentCardContainer">
        <input
          type="text"
          placeholder="Card Number"
          className="PaymentCardBigInput"
        />
        <input
          type="text"
          placeholder="Card holder"
          className="PaymentCardBigInput"
        />
        <div className="PaymentCardLittleInput">
          <input type="text" placeholder="Month" />
          <input type="text" placeholder="Year" />
          <input type="text" placeholder="CVV" />
        </div>
        <div className="PaymentCardLogo">
          <img src={card1} alt="card" />
          <img src={card2} alt="card" />
          <img src={card3} alt="card" />
        </div>
      </div>
    </div>
  );
}

export default PaymentCard;

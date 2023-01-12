/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import "./BookingElement.css";
import paymentCard from "@assets/icons/paymentCard.png";

function BookingElement({ value, children, src }) {
  return (
    <div className="BookingElement">
      <div className="BookingElmentTitle">
        <h1>{value}</h1>
        {src && <img src={paymentCard} alt="picto" />}
      </div>
      <div className="BookingElementChildren">{children}</div>
    </div>
  );
}

export default BookingElement;

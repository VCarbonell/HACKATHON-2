/* eslint-disable import/no-unresolved */
import "./Confirmation.css";
import Header from "@components/Header";
import Button from "@components/Button";
import { useNavigate } from "react-router-dom";
import confirmationData from "@services/confirmationData";

function Confirmation() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div className="Confirmation">
      <Header value="Confirmation" />
      <div className="ConfirmationContainer">
        <h1>Thank you for your reservation !</h1>
        <p>You can now check your emails</p>
        <p id="ConfirmationPub">And now, get ready !</p>
        <div className="ConfirmationCarousel">
          {confirmationData.map((data) => (
            <div className="CCOneElement">
              <img src={data.pic} alt={data.phrase} />
              <p>{data.phrase}</p>
              <img src={data.logo} alt="AmazonLogo" id="CCAmazonLogo" />
            </div>
          ))}
        </div>
        <Button value="Back to Home" className="btn" handle={handleNavigate} />
      </div>
    </div>
  );
}

export default Confirmation;

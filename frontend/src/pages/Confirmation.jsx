/* eslint-disable import/no-unresolved */
import "./Confirmation.css";
import Header from "@components/Header";
import Button from "@components/Button";
import check from "@assets/icons/check.png";
import { useNavigate } from "react-router-dom";

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
        <img src={check} alt="check" className="ConfirmationCheck" />
        <Button value="Back to Home" className="btn" handle={handleNavigate} />
      </div>
    </div>
  );
}

export default Confirmation;

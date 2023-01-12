/* eslint-disable */
import React from "react";
import "./addCar.scss";
import Header from "@components/Header";
import Button from "@components/Button";
import addPhotoIcon from "@assets/icons/galleryadd.png";
import { useCompany } from "../contexts/companyContext";
import axios from "axios";
import rightArrow from "../assets/icons/arrowright.png";
import Button from '@components/Button';
import addPhotoIcon from '@assets/icons/galleryadd.png'
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const AddCar = () => {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [carMakes, setCarMakes] = useState([]);
  const [carMake, setCarMake] = useState();
  const [price, setPrice] = useState(50)
  const [year, setYear] = useState(2000)
  const [milleage, setMilleage] = useState(60000)
  const [fuel, setFuel] = useState("");

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleYear = (e) => {
    setYear(e.target.value);
  };
  const handleMilleage = (e) => {
    setMilleage(e.target.value)
  }

  const handleMake = (e) => {
    setCarMake(e.target.value);
    console.log(carMake);
  }

  const fetchMakes = () => {
    axios.get('http://localhost:8000/api/car/makes')
    .then((response)=> setCarMakes(response.data))
  }
const handleSubmit = (event) => {
  event.preventDefault();
  const payload = { model: carMake, year: Number(year), price: Number(price), mileage: Number(milleage), fuel: fuel, company_id: 6 }
  console.log(payload);
  const formData = new FormData();
  formData.append("car", inputRef.current.files[0]);
  axios.post("http://localhost:8000/api/car/imageUpload", formData);
  axios.post("http://localhost:8000/api/car/addCar", { ...payload });
  // navigate();
};
  
  useEffect(()=>{
    fetchMakes()
  },[])
  return <div className="addCar">
   <Header value="Add a vehicule" back={true} />
   <form encType="multipart/form-data"   className="addCar__form">
     <div className="addCar__photoWrap">
     <img className='addCar__icon' src={addPhotoIcon} alt="" />
       <input ref={inputRef} className='addCar__addPic' type="file" name="picture" id="" />
     </div>
     {/* <button onClick={handleSubmit}>testYOLO</button> */}
  <select name="make" id="" onChange={handleMake}>
  <option value="">Select a make</option>
    <option value="Focus">Ford</option>    
    <option value="C-Class">Mercedes</option>
    <option value="Zoe">Renault</option>
    <option value="Model Y Performance">Tesla</option>

  </select>
     <select>
       <option value="">Select vehicule type</option>
       <option value="1">Sedan</option>
       <option value="5">Convertible</option>
       <option value="2">SUV</option>
       <option value="3">Truck</option>
       <option value="4">Coupe</option>
     </select>
     <div className="addCar__rangeWrap">
     <label htmlFor="price">Price/day</label>
      <span className='addCar__state'>{price}$</span>
     <input onChange={handlePrice} min="10"
            max="150"
            step="5" className='addCar__price' id='price' type="range"></input>
     </div>
     <div className="addCar__rangeWrap">
     <label htmlFor="year">Year of construction</label>
     <span className='addCar__state'>{year}</span>

     <input onChange={handleYear} min='1980' max='2023' id='year' type="range"></input>
     </div>
     <div className="addCar__rangeWrap">
     <label htmlFor="milleage">Milleage</label>
     <span className='addCar__state'>{milleage}Km</span>

     <input onChange={handleMilleage} min='1000' step='1000' max='120000' id='milleage' type="range"></input>
     </div>
      <select name="Fuel" id="fuel" onChange={(e) => setFuel(e.target.value)}>
      <option value="">Fuel</option>
        <option value="Gasoline">Gasoline</option>
        <option value="Electric">Electric</option>
        <option value="Diesel">Diesel</option>

      </select> 
      {/* <select name="seats" id="seats">
      <option value="">Number of seats</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
      </select> */}
    <Button type="submit" value='Add' className='btn' handle={handleSubmit}/>
   </form>
  </div>;
};

export default AddCar;

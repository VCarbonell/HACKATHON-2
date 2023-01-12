import React from 'react';
import './companyCar.scss'
import Header from '@components/Header';
import CarCardCompany from '@components/CarCardCompany';
import carIconOrange from '@assets/icons/Vector.png';
const CompanyCar = () => {
  return (
    <div className='companyCar'>
    <Header value='Our cars' back={true}/>
    <CarCardCompany isCompany={true} src={carIconOrange}/>
    <CarCardCompany isCompany={true} src={carIconOrange}/>
    <CarCardCompany isCompany={true} src={carIconOrange}/>
    <CarCardCompany isCompany={true} src={carIconOrange}/>

    </div>
  );
};

export default CompanyCar;
import React, { useEffect, useState } from 'react'

import Design from "@/public/hr.webp";
import EngineeringV2 from "@/public/engineering-v2.png";
import DesignV2 from "@/public/design-v2.png";
import ProductV2 from "@/public/product.png";
import MarketingV2 from "@/public/marketing.png";
import OperationsV2 from "@/public/operations.png";
import hrV2 from "@/public/hr-v2.png";

import GirlSide from "@/public/engineering-wiki-V2.png";
import Image from 'next/image';
export default function UpperCarosal() {
  const [isActive1, setIsActive1] = useState(true);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const [isActive5, setIsActive5] = useState(false);
  const [isActive6, setIsActive6] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setTimeout(handleClickEngineer, 3000);
      setTimeout(handleClickDesign, 6000);
      setTimeout(handleClickProduct, 9000);
      setTimeout(handleClickMarketing, 12000);
      setTimeout(handleClickOperations, 15000);
      setTimeout(handleClickHR, 18000);
    }, 20000);
  }, [])

  const handleClickEngineer = () => {
    setIsActive1(true);
    setIsActive2(false);
    setIsActive3(false);
    setIsActive4(false);
    setIsActive5(false);
    setIsActive6(false);
  };
  const handleClickDesign = () => {
    setIsActive1(false);
    setIsActive2(true);
    setIsActive3(false);
    setIsActive4(false);
    setIsActive5(false);
    setIsActive6(false);
  };
  const handleClickProduct = () => {
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(true);
    setIsActive4(false);
    setIsActive5(false);
    setIsActive6(false);
  };
  const handleClickMarketing = () => {
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(false);
    setIsActive4(true);
    setIsActive5(false);
    setIsActive6(false);
  };
  const handleClickOperations = () => {
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(false);
    setIsActive4(false);
    setIsActive5(true);
    setIsActive6(false);
  };
  const handleClickHR = () => {
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(false);
    setIsActive4(false);
    setIsActive5(false);
    setIsActive6(true);
  };
  return (
    <>
      <div className="CustomContainer">
        <div className="col-12">
          <div className='d-block d-xl-none d-sm-flex justify-content-center py-3 gap-1'>
            <button className={isActive1 ? 'btn btn-white border rounded-2 py-0 px-1' : 'border rounded-2 py-0 px-1  btn bg-secondary-subtle'} onClick={handleClickEngineer}>Engineer</button>
            <button className={isActive2 ? 'btn btn-white border rounded-2 py-0 px-1 ms-1 ms-sm-0 ' : ' ms-1 ms-sm-0 border rounded-2 py-0 px-1  btn bg-secondary-subtle'} onClick={handleClickDesign}> Design</button>
            <button className={isActive3 ? 'btn btn-white border rounded-2 py-0 px-1 my-1 ms-1 ms-sm-0 my-sm-0 ' : ' my-1 ms-1 ms-sm-0 my-sm-0 border rounded-2 py-0 px-1  btn bg-secondary-subtle'} onClick={handleClickProduct}> Product</button>
            <button className={isActive4 ? 'btn btn-white border rounded-2 py-0 ms-1 ms-sm-0  px-1' : 'ms-1 ms-sm-0  border rounded-2 py-0 px-1  btn bg-secondary-subtle'} onClick={handleClickMarketing}> Marketing</button>
            <button className={isActive5 ? 'btn btn-white border rounded-2 py-0 px-1ms-1 ms-sm-0 ' : 'border rounded-2 py-0 ms-1 ms-sm-0 px-1  btn bg-secondary-subtle'} onClick={handleClickOperations}> Operations</button>
            <button className={isActive6 ? 'btn btn-white border rounded-2 py-0 ms-1 ms-sm-0 px-1' : 'border ms-1 ms-sm-0 rounded-2 py-0 px-1  btn bg-secondary-subtle'} onClick={handleClickHR}> HR</button>
          </div>
          {/* <div className='d-sm-none d-block'>
            <div className='d-flex justify-content-between mb-3'>
              <button style={{ fontSize: 'x-small' }} className={isActive1 ? 'btn btn-white border border-3 rounded-1 py-0 px-1 ' : ' border border-3 rounded-1 py-0 px-1 btn bg-secondary-subtle'} onClick={handleClickEngineer}>Engineer</button>
              <button style={{ fontSize: 'x-small' }} className={isActive2 ? 'btn btn-white border border-3 rounded-1 py-0 px-1 ' : ' border border-3 rounded-1 py-0 px-1 btn bg-secondary-subtle'} onClick={handleClickDesign}>Design</button>
              <button style={{ fontSize: 'x-small' }} className={isActive3 ? 'btn btn-white border border-3 rounded-1 py-0 px-1 ' : ' border border-3 rounded-1 py-0 px-1 btn bg-secondary-subtle'} onClick={handleClickProduct}>Product</button>
              <button style={{ fontSize: 'x-small' }} className={isActive4 ? 'btn btn-white border border-3 rounded-1 py-0 px-1 ' : ' border border-3 rounded-1 py-0 px-1 btn bg-secondary-subtle'} onClick={handleClickMarketing}>Marketing</button>
              <button style={{ fontSize: 'x-small' }} className={isActive5 ? 'btn btn-white border border-3 rounded-1 py-0 px-1 ' : ' border border-3 rounded-1 py-0 px-1 btn bg-secondary-subtle'} onClick={handleClickOperations}>Operations</button>
              <button style={{ fontSize: 'x-small' }} className={isActive6 ? 'btn btn-white border border-3 rounded-1 py-0 px-1 ' : ' border border-3 rounded-1 py-0 px-1 btn bg-secondary-subtle'} onClick={handleClickHR}>HR</button>
            </div>
          </div> */}
          {/* <div className='d-sm-block d-none d-xl-none'>
            <div className='d-flex justify-content-between mb-3'>
              <button style={{ fontSize: 'small' }} className={isActive1 ? 'btn btn-white border border-3 rounded-1 py-0 px-1 ' : ' border border-3 rounded-1 py-0 px-1 btn bg-secondary-subtle'} onClick={handleClickEngineer}>Engineer</button>
              <button style={{ fontSize: 'small' }} className={isActive2 ? 'btn btn-white border border-3 rounded-1 py-0 px-1 ' : ' border border-3 rounded-1 py-0 px-1 btn bg-secondary-subtle'} onClick={handleClickDesign}>Design</button>
              <button style={{ fontSize: 'small' }} className={isActive3 ? 'btn btn-white border border-3 rounded-1 py-0 px-1 ' : ' border border-3 rounded-1 py-0 px-1 btn bg-secondary-subtle'} onClick={handleClickProduct}>Product</button>
              <button style={{ fontSize: 'small' }} className={isActive4 ? 'btn btn-white border border-3 rounded-1 py-0 px-1 ' : ' border border-3 rounded-1 py-0 px-1 btn bg-secondary-subtle'} onClick={handleClickMarketing}>Marketing</button>
              <button style={{ fontSize: 'small' }} className={isActive5 ? 'btn btn-white border border-3 rounded-1 py-0 px-1 ' : ' border border-3 rounded-1 py-0 px-1 btn bg-secondary-subtle'} onClick={handleClickOperations}>Operations</button>
              <button style={{ fontSize: 'small' }} className={isActive6 ? 'btn btn-white border border-3 rounded-1 py-0 px-1 ' : ' border border-3 rounded-1 py-0 px-1 btn bg-secondary-subtle'} onClick={handleClickHR}>HR</button>
            </div>
          </div> */}
          <div className="d-none d-xl-block">
            <div className='d-flex justify-content-between mb-3'>
              <button className={isActive1 ? 'btn btn-white border border-3 rounded-4 px-custom' : 'px-custom border border-3 rounded-4 btn bg-secondary-subtle'} onClick={handleClickEngineer}><Image className='' src={EngineeringV2} style={{ width: "auto", height: "auto" }} alt="Logo" /> <br />Engineer</button>
              <button className={isActive2 ? 'btn btn-white border border-3 rounded-4 px-custom' : 'px-custom border border-3 rounded-4 btn bg-secondary-subtle'} onClick={handleClickDesign}><Image className='' src={DesignV2} style={{ width: "auto", height: "auto" }} alt="Logo" /> <br /> Design</button>
              <button className={isActive3 ? 'btn btn-white border border-3 rounded-4 px-custom' : 'px-custom border border-3 rounded-4 btn bg-secondary-subtle'} onClick={handleClickProduct}><Image className='' src={ProductV2} style={{ width: "auto", height: "auto" }} alt="Logo" /> <br /> Product</button>
              <button className={isActive4 ? 'btn btn-white border border-3 rounded-4 px-custom' : 'px-custom border border-3 rounded-4 btn bg-secondary-subtle'} onClick={handleClickMarketing}><Image className='' src={MarketingV2} style={{ width: "auto", height: "auto" }} alt="Logo" /> <br /> Marketing</button>
              <button className={isActive5 ? 'btn btn-white border border-3 rounded-4 px-custom' : 'px-custom border border-3 rounded-4 btn bg-secondary-subtle'} onClick={handleClickOperations}><Image className='' src={OperationsV2} style={{ width: "auto", height: "auto" }} alt="Logo" /> <br /> Operations</button>
              <button className={isActive6 ? 'btn btn-white border border-3 rounded-4 px-custom' : 'px-custom border border-3 rounded-4 btn bg-secondary-subtle'} onClick={handleClickHR}><Image className='' src={hrV2} style={{ width: "auto", height: "auto" }} alt="Logo" /> <br /> HR</button>
            </div>
          </div>
          <div style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
            <Image src={GirlSide} className={isActive1 ? 'w-100 h-auto d-block' : 'w-100 h-auto d-none'} onClick={handleClickEngineer} alt="Logo" />
            <Image src={Design} className={isActive2 ? 'w-100 h-auto d-block' : 'w-100 h-auto d-none'} onClick={handleClickDesign} alt="Logo" />
            <Image src={GirlSide} className={isActive3 ? 'w-100 h-auto d-block' : 'w-100 h-auto d-none'} onClick={handleClickProduct} alt="Logo" />
            <Image src={Design} className={isActive4 ? 'w-100 h-auto d-block' : 'w-100 h-auto d-none'} onClick={handleClickMarketing} alt="Logo" />
            <Image src={GirlSide} className={isActive5 ? 'w-100 h-auto d-block' : 'w-100 h-auto d-none'} onClick={handleClickOperations} alt="Logo" />
            <Image src={Design} className={isActive6 ? 'w-100 h-auto d-block' : 'w-100 h-auto d-none'} onClick={handleClickHR} alt="Logo" />
          </div>
        </div>
      </div>
    </>
  )
}

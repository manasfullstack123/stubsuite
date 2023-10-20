import React from 'react'
import { AiFillCaretDown, AiOutlineSearch } from 'react-icons/ai';
import { GrLanguage, GrLinkNext, GrLinkPrevious } from 'react-icons/gr';
import { MdOutlineDone, MdOutlineNavigateNext } from 'react-icons/md';
import Sherpa from "@/public/sherpa.png";
import JsCollege from "@/public/jscollege.png";
import { useState } from "react";
import Image from 'next/image';

export default function CustomCarosal() {
  const [isActive1, setIsActive1] = useState(true);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const handleClick1 = () => {
    setIsActive1(true);
    setIsActive2(false);
    setIsActive3(false);
  };
  const handleClick2 = () => {
    setIsActive1(false);
    setIsActive2(true);
    setIsActive3(false);
  };
  const handleClick3 = () => {
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(true);
  };
  return (
    <>
      <div className="d-none d-xl-block">
        <div className="row">
          <div className="col-5">
            <div style={{ position: 'absolute' }}>
              <div className="rounded-5 text-white py-5 px-4 d-flex align-content-between flex-wrap" style={{ backgroundColor: '#0067FF', height: '435px', width: '440px', position: "relative" }}>
                <h1 className={isActive1 ? 'd-block' : 'd-none'}>Reduced lead to real prospect time by 60%</h1>
                <h1 className={isActive2 ? 'd-block' : 'd-none'}>$1 million to $20 million in just two years</h1>
                <h1 className={isActive3 ? 'd-block' : 'd-none'}>An increase of repeat sales from 20% up to 40%</h1>
                <div className="ms-auto d-flex">
                  <button className={isActive1 ? 'me-1 btn btn-outline-light d-block' : 'd-non me-1 btn bg-secondary-subtle'} onClick={handleClick1}><GrLinkPrevious /></button>
                  <button className={isActive2 ? 'me-1 btn btn-outline-light d-block' : 'd-non me-1 btn bg-white'} onClick={handleClick2}><GrLinkNext /></button>
                  <button className={isActive3 ? 'me-1 btn btn-outline-light d-block' : 'd-none me-1 btn bg-white'} onClick={handleClick3}><GrLinkNext /></button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-7">
            <div className={isActive1 ? 'd-block d-flex align-content-between flex-wrap' : 'd-none'} style={{ height: '300px' }}>
              <h4 className="mt-3">With Zoho CRM, we experienced a 65% increase in our sales pipeline. We also managed to reduce our lead to real prospect time by 60%, which is huge. I would definitely recommend Zoho CRM to companies that are experiencing complexity with sales and marketing and witnessing rapid growth.</h4>
              <div className="d-flex">
                <div>
                  <b>K.C Watson</b> <br />
                  <p>CEO & Founder, Sherpa Digital Media</p>
                </div>
                <Image className="w-50 h-75 ms-5 ps-5" src={Sherpa} alt="Picture of the author" />
              </div>
            </div>
            <div className={isActive2 ? 'd-block d-flex align-content-between flex-wrap' : 'd-none'} style={{ height: '300px' }}>
              <h4 className="mt-3">Since switching to Zoho CRM, JusCollege has effectively managed the large volume of contacts flowing through the sales pipeline and has already increased its sales from $1 million to $20 million in just two years. We attribute this to Zoho – being organized, getting more visibility, seeing where the problem points are, and restructuring our business.</h4>
              <div className="d-flex">
                <div>
                  <b>Allan Teruel</b> <br />
                  <p>Co-Founder/CTO-Jus College</p>
                </div>
                <Image className="w-50 h-75 ms-5 ps-5" src={JsCollege} alt="Picture of the author" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

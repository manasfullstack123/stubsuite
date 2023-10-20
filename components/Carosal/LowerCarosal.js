import React from 'react'
import Image from "next/image";
import { useEffect, useState } from "react";

import Gallery from "@/public/gallery.png";
import Calendar from "@/public/calendar.png";
import Timeline from "@/public/timeline.png";
import Table from "@/public/table.png";
import Kanban from "@/public/kanban.png";
import List from "@/public/list.png";
export default function LowerCarosal() {
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
      {/* <div className=''> */}
      <div style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
        <Image src={Kanban} className={isActive1 ? 'w-100 h-auto d-block' : 'w-100 h-auto d-none'} onClick={handleClickEngineer} height={350} alt="Logo" />
        <Image src={Table} className={isActive2 ? 'w-100 h-auto d-block' : 'w-100 h-auto d-none'} onClick={handleClickDesign} height={350} alt="Logo" />
        <Image src={Timeline} className={isActive3 ? 'w-100 h-auto d-block' : 'w-100 h-auto d-none'} onClick={handleClickProduct} height={350} alt="Logo" />
        <Image src={Calendar} className={isActive4 ? 'w-100 h-auto d-block' : 'w-100 h-auto d-none'} onClick={handleClickMarketing} height={350} alt="Logo" />
        <Image src={Gallery} className={isActive5 ? 'w-100 h-auto d-block' : 'w-100 h-auto d-none'} onClick={handleClickOperations} height={350} alt="Logo" />
        <Image src={List} className={isActive6 ? 'w-100 h-auto d-block' : 'w-100 h-auto d-none'} onClick={handleClickHR} height={350} alt="Logo" />
      </div>
      <div className="containerCarosa">
        <div className='d-block d-sm-flex justify-content-center py-3 gap-1'>
          <button className={isActive1 ? 'btn btn-white border rounded-2 py-0 px-1' : 'border rounded-2 py-0 px-1  btn bg-secondary-subtle'} onClick={handleClickEngineer}>Board</button>
          <button className={isActive2 ? 'btn btn-white border rounded-2 py-0 px-1 ms-1 ms-sm-0 ' : ' ms-1 ms-sm-0 border rounded-2 py-0 px-1  btn bg-secondary-subtle'} onClick={handleClickDesign}>Table</button>
          <button className={isActive3 ? 'btn btn-white border rounded-2 py-0 px-1 my-1 ms-1 ms-sm-0 my-sm-0 ' : ' my-1 ms-1 ms-sm-0 my-sm-0 border rounded-2 py-0 px-1  btn bg-secondary-subtle'} onClick={handleClickProduct}>Timeline</button>
          <button className={isActive4 ? 'btn btn-white border rounded-2 py-0 ms-1 ms-sm-0  px-1' : 'ms-1 ms-sm-0  border rounded-2 py-0 px-1  btn bg-secondary-subtle'} onClick={handleClickMarketing}>Calendar</button>
          <button className={isActive5 ? 'btn btn-white border rounded-2 py-0 px-1ms-1 ms-sm-0 ' : 'border rounded-2 py-0 ms-1 ms-sm-0 px-1  btn bg-secondary-subtle'} onClick={handleClickOperations}>Gallery</button>
          <button className={isActive6 ? 'btn btn-white border rounded-2 py-0 ms-1 ms-sm-0 px-1' : 'border ms-1 ms-sm-0 rounded-2 py-0 px-1  btn bg-secondary-subtle'} onClick={handleClickHR}>List</button>
        </div>
      </div>
      {/* <section className="splide">
                  <div className="splide__slider">
                    <div className="splide__track">
                      <ul className="splide__list">
                        <li className="splide__slide" data-splide-interval="1000"><Image src={List} className='w-7 rounded-3 border' style={{ width: "-webkit-fill-available", height: '88%' }} alt="Logo" /></li>
                        <li className="splide__slide" data-splide-interval="1000"><Image src={List} className='w-7 rounded-3 border' style={{ width: "-webkit-fill-available", height: '88%' }} alt="Logo" /></li>
                        <li className="splide__slide" data-splide-interval="1000"><Image src={List} className='w-7 rounded-3 border' style={{ width: "-webkit-fill-available", height: '88%' }} alt="Logo" /></li>
                      </ul>
                    </div>
                  </div>

                  <button className="splide__toggle" type="button">
                    <span className="splide__toggle__play">Play</span>
                    <span className="splide__toggle__pause">Pause</span>
                  </button>
                </section> */}

      {/* <Splide hasTrack={false} options={ options }  aria-label="My Favorite Images">
                        <SplideTrack>
                          <SplideSlide data-splide-interval="4000">
                            <Image src={List} className='w-7 rounded-3 border' style={{ width: "-webkit-fill-available", height: '88%' }} alt="Logo" />
                          </SplideSlide>
                          <SplideSlide data-splide-interval="4000">
                            <Image src={List} className='w-7 rounded-3 border' style={{ width: "-webkit-fill-available", height: '88%' }} alt="Logo" />
                          </SplideSlide >
                          <SplideSlide data-splide-interval="4000">
                            <Image src={List} className='w-7 rounded-3 border' style={{ width: "-webkit-fill-available", height: '88%' }} alt="Logo" />
                          </SplideSlide>
                        </SplideTrack>
                    <div className="splide__arrows d-none">
                      <button className="splide__arrow splide__arrow--prev"></button>
                      <button className="splide__arrow splide__arrow--next"></button>
                    </div>
                </Splide> */}
      {/* </div> */}
    </>
  )
}

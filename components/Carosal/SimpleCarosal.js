import React from 'react'
import CommunitySlide03 from "@/public/community-slide-03.png";
import CommunitySlide01 from "@/public/community-slide-01.png";
import CommunitySlide02 from "@/public/community-slide-02.png";
import Carousel from 'react-bootstrap/Carousel';
import Image from "next/image";
export default function SimpleCarosal() {
  return (
    <>
      <div className="col-lg-8 col-8 d-none d-lg-block rounded-3 py-4 px-3" style={{ backgroundColor: '#F6F5F4', paddingBottom: '1%' }}>
        <Carousel slide={false}>
          <Carousel.Item interval={4000}>
            <Image src={CommunitySlide01} className='w-auto rounded-3 border carousel-img' alt="Logo" />
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <Image src={CommunitySlide02} className='w-auto rounded-3 border carousel-img' alt="Logo" />
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <Image src={CommunitySlide03} className='w-auto rounded-3 border carousel-img' alt="Logo" />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  )
}

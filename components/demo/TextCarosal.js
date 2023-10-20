import React from 'react'
import Image from "next/image"
import { Carousel } from "react-bootstrap"
import White from "@/public/white.png";
export default function TextCarosal() {
  return (
    <>
      <Carousel data-bs-theme="dark" controls="">
        <Carousel.Item interval={3000}>
          <Image src={White} className="w-100" alt="Picture of the author" />
          <Carousel.Caption >
            <h3 className="text-black text-start">First slide label</h3>
            <p className="text-black text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, optio corrupti architecto eum veniam odit odio accusantium quam consequatur placeat dicta voluptatum officia sed maiores exercitationem alias. Animi, dolores fuga.</p>
            <p className="text-black text-start d-none d-sm-block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, optio corrupti architecto eum veniam odit odio accusantium quam consequatur placeat dicta voluptatum officia sed maiores exercitationem alias. Animi, dolores fuga.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <Image src={White} className="w-100" alt="Picture of the author" />
          <Carousel.Caption >
            <h3 className="text-black text-start">Second slide label</h3>
            <p className="text-black text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, optio corrupti architecto eum veniam odit odio accusantium quam consequatur placeat dicta voluptatum officia sed maiores exercitationem alias. Animi, dolores fuga?</p>
            <p className="text-black text-start d-none d-sm-block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, optio corrupti architecto eum veniam odit odio accusantium quam consequatur placeat dicta voluptatum officia sed maiores exercitationem alias. Animi, dolores fuga?</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <Image src={White} className="w-100" alt="Picture of the author" />
          <Carousel.Caption >
            <h3 className="text-black text-start">Third slide label</h3>
            <p className="text-black text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, optio corrupti architecto eum veniam odit odio accusantium quam consequatur placeat dicta voluptatum officia sed maiores exercitationem alias. Animi, dolores fuga?</p>
            <p className="text-black text-start d-none d-sm-block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, optio corrupti architecto eum veniam odit odio accusantium quam consequatur placeat dicta voluptatum officia sed maiores exercitationem alias. Animi, dolores fuga?</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <Image src={White} className="w-100" alt="Picture of the author" />
          <Carousel.Caption >
            <h3 className="text-black text-start">Fourth slide label</h3>
            <p className="text-black text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, optio corrupti architecto eum veniam odit odio accusantium quam consequatur placeat dicta voluptatum officia sed maiores exercitationem alias. Animi, dolores fuga.</p>
            <p className="text-black text-start d-none d-sm-block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, optio corrupti architecto eum veniam odit odio accusantium quam consequatur placeat dicta voluptatum officia sed maiores exercitationem alias. Animi, dolores fuga.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <Image src={White} className="w-100" alt="Picture of the author" />
          <Carousel.Caption >
            <h3 className="text-black text-start">Fifth slide label</h3>
            <p className="text-black text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, optio corrupti architecto eum veniam odit odio accusantium quam consequatur placeat dicta voluptatum officia sed maiores exercitationem alias. Animi, dolores fuga?</p>
            <p className="text-black text-start d-none d-sm-block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, optio corrupti architecto eum veniam odit odio accusantium quam consequatur placeat dicta voluptatum officia sed maiores exercitationem alias. Animi, dolores fuga?</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <Image src={White} className="w-100" alt="Picture of the author" />
          <Carousel.Caption >
            <h3 className="text-black text-start">Sixth slide label</h3>
            <p className="text-black text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, optio corrupti architecto eum veniam odit odio accusantium quam consequatur placeat dicta voluptatum officia sed maiores exercitationem alias. Animi, dolores fuga?</p>
            <p className="text-black text-start d-none d-sm-block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, optio corrupti architecto eum veniam odit odio accusantium quam consequatur placeat dicta voluptatum officia sed maiores exercitationem alias. Animi, dolores fuga?</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

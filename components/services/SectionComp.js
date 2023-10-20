import React from 'react'
import Link from 'next/link'
export default function SectionComp({ imgSrc, sId, link }) {
    return (
        // <Link href={link}>
            <img src={`/uploads/${imgSrc}`} className="img-thumbnail imgStyle" alt="image1" height="100px" width="120px" />
        // </Link>
    )
}

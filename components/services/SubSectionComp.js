import React from 'react'
import Link from 'next/link'
export default function SubSectionComp({ imgSrc, sId, slug }) {
    return (
        // <Link href={`/subservices/${slug}`}>
            <img src={`/uploads/${imgSrc}`} className="img-thumbnail imgStyle" alt={`service-${sId}`} height="100px" width="120px" />
        // </Link>
    )
}

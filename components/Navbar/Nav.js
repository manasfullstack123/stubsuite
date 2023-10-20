import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NotionLogo from "@/public/notion-logo.svg";
import NavCaret from "../../public/nav-caret.svg";
import NavIndustriesPromoSkyDesktop from "@/public/nav-industries-promo-sky-desktop-1.png";
import IconIndustries from "@/public/icon-industries.png";
import NavIndustriesPromoBottomDesktop from "@/public/nav-industries-promo-bottom-desktop-1.png";
import IndustriesMobile from "@/public/industries-mobile.png";
import Placeholder from "@/public/placeholder16.svg";
import Link from 'next/link';
import Image from 'next/image';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/Io';
export default function nav() {
    const [hover, setHover] = useState('')
    const [block, setBlock] = useState('d-none')
    const [small, setSmall] = useState('d-none')
    const [NavSmall, setNavSmall] = useState('d-block')
    const hoverOnDropdown = () => {
        setHover('d-none')
    }
    const clickOnDropdown = () => {
        if (block == 'd-none') { setBlock('d-block'); setHover('d-block') }
        else setBlock('d-none')
    }
    const onLeave = () => {
        if (block == 'd-block') setBlock('d-none')// setLeave('d-none')   
    }
    const onLeaveOne = () => {
        if (hover == 'd-none') setBlock('d-none')
    }
    const smallShown = () => {
        if (small == 'd-none') {
            setSmall('d-block')
            setNavSmall('d-none')
        } else {
            setSmall('d-none')
        }
    }
    const UnhideDropDown = () => {
        setSmall('d-none')
        setNavSmall('d-block')
    }
    const HideDropdown = () => {
        if (small == 'd-block') {
            setSmall('d-none')
            setNavSmall('d-block')
        }
    }
    return (
        <>
            {/* display only above lg */}
            <div className="d-none d-lg-block">
                <div className="customNavbar">
                    <Navbar sticky="top" className='bg-white' expand="lg">
                        <Container fluid>
                            <Navbar.Brand><Link href='/' className='text-decoration-none'><Image src={NotionLogo} width={30} height={30} alt="Logo" /> <span className='a-bold text-black ' style={{ fontSize: "18px" }}>Notion</span> </Link></Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100vh' }} navbarScroll>

                                    <div className='d-none d-lg-block'>
                                        <Nav.Link onClick={clickOnDropdown} className='hoverColor dropdown-btn'>Product<Image src={NavCaret} alt='dropdown' className='ps-1' style={{ width: 'auto', height: 'auto' }} /></Nav.Link>
                                        <div onMouseLeave={onLeaveOne} className={`dropdown ${block}`}>
                                            <h1 style={{ color: '#032D60' }} className="dropdown-ite"><b>Industries</b></h1>
                                            <div onMouseEnter={hoverOnDropdown}>
                                                <a href="#" className="dropdown-item"><Image src={Placeholder} style={{ width: '7%', height: '7%' }} alt='navlogo' /><b className='ps-3'>Automotive</b></a>
                                                <a href="#" className="dropdown-item"><Image src={Placeholder} style={{ width: '7%', height: '7%' }} alt='navlogo' /><b className='ps-3'>Communication</b></a>
                                                <a href="#" className="dropdown-item"><Image src={Placeholder} style={{ width: '7%', height: '7%' }} alt='navlogo' /><b className='ps-3'>Communication</b></a>
                                                <a href="#" className="dropdown-item"><Image src={Placeholder} style={{ width: '7%', height: '7%' }} alt='navlogo' /><b className='ps-3'>Consumer Goods</b></a>
                                                <a href="#" className="dropdown-item"><Image src={Placeholder} style={{ width: '7%', height: '7%' }} alt='navlogo' /><b className='ps-3'>Education</b></a>
                                                <a href="#" className="dropdown-item"><Image src={Placeholder} style={{ width: '7%', height: '7%' }} alt='navlogo' /><b className='ps-3'>Energy & Utilities</b></a>
                                                <a href="#" className="dropdown-item"><Image src={Placeholder} style={{ width: '7%', height: '7%' }} alt='navlogo' /><b className='ps-3'>Financial Services</b></a>
                                                <a href="#" className="dropdown-item"><Image src={Placeholder} style={{ width: '7%', height: '7%' }} alt='navlogo' /><b className='ps-3'>Healthcare & Life Science</b></a>
                                                <a href="#" className="dropdown-item"><Image src={Placeholder} style={{ width: '7%', height: '7%' }} alt='navlogo' /><b className='ps-3'>Manufacturing</b></a>
                                                <a href="#" className="dropdown-item"><Image src={Placeholder} style={{ width: '7%', height: '7%' }} alt='navlogo' /><b className='ps-3'>Media</b></a>
                                                <a href="#" className="dropdown-item"><Image src={Placeholder} style={{ width: '7%', height: '7%' }} alt='navlogo' /><b className='ps-3'>Nonprofit</b></a>
                                                <a href="#" className="dropdown-item"><Image src={Placeholder} style={{ width: '7%', height: '7%' }} alt='navlogo' /><b className='ps-3'>Public Sector</b></a>
                                                <a href="#" className="dropdown-item"><Image src={Placeholder} style={{ width: '7%', height: '7%' }} alt='navlogo' /><b className='ps-3'>Retailer</b></a>
                                                <a href="#" className="all-industries text-decoration-underline pb-5 mb-3"><b>see all industries</b></a>
                                            </div>
                                        </div>
                                        <div onMouseLeave={onLeave} className={`dropdownSecond ${hover} ${block}`}>
                                            <div className='py-5' style={{ backgroundColor: '#EAF5FE' }}>
                                                <Image src={NavIndustriesPromoSkyDesktop} style={{ width: '100%', height: 'auto' }} alt='offcanimg' />
                                                <div className='text-center px-5'>
                                                    <Image src={IconIndustries} className='mt-5' style={{ width: 'auto', height: 'auto' }} alt='offcanimg' />
                                                    <h3 style={{ color: '#032D60' }}>Explore Salesforce for industries.</h3>
                                                    <p style={{ color: '#032D60' }}>Get industry-specific innovations that modernise your business, speed up time to value and boost productivity.</p>
                                                    <button style={{ backgroundColor: '#0176D3' }} className='btn text-white' type="button" >See all industries</button>
                                                </div>
                                                <Image src={NavIndustriesPromoBottomDesktop} style={{ width: '100%', height: '100%' }} alt='offcanimg' />
                                            </div>
                                        </div>
                                    </div>

                                    <Nav.Link href="#">Download<Image src={NavCaret} alt='dropdown' className='ps-1' style={{ width: 'auto', height: 'auto' }} /></Nav.Link>
                                    <Nav.Link href="#">Solution<Image src={NavCaret} alt='dropdown' className='ps-1' style={{ width: 'auto', height: 'auto' }} /></Nav.Link>
                                    <Nav.Link href="#">Resource<Image src={NavCaret} alt='dropdown' className='ps-1' style={{ width: 'auto', height: 'auto' }} /></Nav.Link>
                                    <Nav.Link href="#">Pricing</Nav.Link>
                                </Nav>
                                <div className='d-flex justify-content-end align-items-center col-4'>
                                    <Link href="/demo" className='nav-link' style={{ marginLeft: '10px' }}>Request a demo</Link>
                                    <span style={{ color: '#d4dae0', margin: '0px 10px' }}>|</span>
                                    <Link href="/login" className='nav-link' style={{ padding: '0px 10px' }}> Login</Link>
                                    <button type="button" className="btn btn-dark fw-medium py-1" style={{ minHeight: "30px", fontSize: "smaller", marginLeft: '10px' }}>Get Notion free</button>
                                </div>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </div>



            {/* display only below lg */}
            <div className="d-block d-lg-none border-bottom border-1">
                <div className="customNavbar">
                    <Navbar sticky="top" className='bg-white' expand="lg">
                        <Container fluid>
                            <Navbar.Brand><Link href='/' className='text-decoration-none'><Image src={NotionLogo} width={30} height={30} alt="Logo" /> <span className='a-bold text-black ' style={{ fontSize: "18px" }}>Notion</span> </Link></Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" onClick={HideDropdown} />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100vh' }} navbarScroll>


                                    <Nav.Link onClick={smallShown} className={`hoverColo ${NavSmall} d-flex align-items-center`}>Product<IoIosArrowForward className='ms-auto' /></Nav.Link>
                                    <div onMouseLeave={onLeaveOne} className={`${small} dropdown p-0`} style={{ width: '100%' }}  >
                                        <h1 style={{ color: '#032D60', paddingLeft: '5%' }} className="dropdown-ite"><span className='fs-6 d-flex align-items-center pt-2' onClick={UnhideDropDown}><IoIosArrowBack />Back </span><br /> <b>Industries</b></h1>
                                        <div >
                                            <div style={{ paddingLeft: '5%' }}>
                                                <a href="#" className="dropdown-item"><Image src={Placeholder} style={{ width: '7%', height: '7%' }} alt='navlogo' /><b className='ps-3'>Automotive</b></a>
                                                <a href="#" className="dropdown-item"><Image src={Placeholder} style={{ width: '7%', height: '7%' }} alt='navlogo' /><b className='ps-3'>Communication</b></a>
                                                <a href="#" className="dropdown-item"><Image src={Placeholder} style={{ width: '7%', height: '7%' }} alt='navlogo' /><b className='ps-3'>Communication</b></a>
                                                <a href="#" className="dropdown-item"><Image src={Placeholder} style={{ width: '7%', height: '7%' }} alt='navlogo' /><b className='ps-3'>Consumer Goods</b></a>
                                                <a href="#" className="dropdown-item"><Image src={Placeholder} style={{ width: '7%', height: '7%' }} alt='navlogo' /><b className='ps-3'>Education</b></a>
                                                <a href="#" className="dropdown-item"><Image src={Placeholder} style={{ width: '7%', height: '7%' }} alt='navlogo' /><b className='ps-3'>Energy & Utilities</b></a>
                                                <a href="#" className="dropdown-item"><Image src={Placeholder} style={{ width: '7%', height: '7%' }} alt='navlogo' /><b className='ps-3'>Financial Services</b></a>
                                                <a href="#" className="dropdown-item"><Image src={Placeholder} style={{ width: '7%', height: '7%' }} alt='navlogo' /><b className='ps-3'>Healthcare & Life Science</b></a>
                                                <a href="#" className="dropdown-item"><Image src={Placeholder} style={{ width: '7%', height: '7%' }} alt='navlogo' /><b className='ps-3'>Manufacturing</b></a>
                                                <a href="#" className="dropdown-item"><Image src={Placeholder} style={{ width: '7%', height: '7%' }} alt='navlogo' /><b className='ps-3'>Media</b></a>
                                                <a href="#" className="dropdown-item"><Image src={Placeholder} style={{ width: '7%', height: '7%' }} alt='navlogo' /><b className='ps-3'>Nonprofit</b></a>
                                                <a href="#" className="dropdown-item"><Image src={Placeholder} style={{ width: '7%', height: '7%' }} alt='navlogo' /><b className='ps-3'>Public Sector</b></a>
                                                <a href="#" className="dropdown-item"><Image src={Placeholder} style={{ width: '7%', height: '7%' }} alt='navlogo' /><b className='ps-3'>Retailer</b></a>
                                                <a href="#" className="all-industries text-decoration-underline mb-3"><b>see all industries</b></a>
                                            </div>
                                            <div className="py-5 mb-5 d-flex justify-content-around" style={{ backgroundColor: " #EAF5FE" }}>
                                                <div className="container-fluid">
                                                    <div className="row">
                                                        <div className='ps-5 col-12 col-sm-6'>
                                                            <h4>Explore salesforce industry</h4>
                                                            <button className='btn text-white' style={{ backgroundColor: "#0176D3" }}>See all industry</button>
                                                        </div>
                                                        <Image src={IndustriesMobile} alt='IndustriesMobile' style={{ width: "50%", height: 'auto', backgroundColor: "#EAF5FE" }} />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <Image src={IndustriesMobile} alt='IndustriesMobile' className='' style={{width:"auto",height:'auto',backgroundColor:"#EAF5FE"}} /> */}
                                        </div>
                                    </div>

                                    <Nav.Link href="#" className={`${NavSmall} d-flex align-items-center`} >Download<IoIosArrowForward className='ms-auto' /></Nav.Link>
                                    <Nav.Link href="#" className={`${NavSmall} d-flex align-items-center`} >Solution<IoIosArrowForward className='ms-auto' /></Nav.Link>
                                    <Nav.Link href="#" className={`${NavSmall} d-flex align-items-center`} >Resource<IoIosArrowForward className='ms-auto' /></Nav.Link>
                                    <Nav.Link href="#" className={`${NavSmall}`} >Pricing</Nav.Link>
                                    <Nav.Link href="/login" className={`${NavSmall}`} >Login</Nav.Link>
                                    <Nav.Link href="/demo" className={`${NavSmall}`} >Request a demo</Nav.Link>
                                    <Nav.Link href="#" className={`${NavSmall}`} ><button type="button" className="btn btn-dark fw-medium py-1" style={{ minHeight: "30px", fontSize: "smaller" }}>Get Notion free</button></Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </div>
        </>
    )
}

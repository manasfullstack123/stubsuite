import React from 'react'
import Image from 'next/image';
import Gartner from "@/public/gartner.png";
import Man from "@/public/man.png";
import Women from "@/public/women.png";
import One from "@/public/one.svg";
import Two from "@/public/two.svg";
import Three from "@/public/three.svg";
import Four from "@/public/four.svg";
import Five from "@/public/five.svg";
import Six from "@/public/six.svg";
import smootherOperations from "@/public/smoother-operations-integration-2x.webp";
import smootherOperations2 from "@/public/smoother-operations-integration-illustration-2x.webp";
import ClientScript from "@/public/zcrm-client-script.svg";
import CrmWebinar from "@/public/crm-webinar-footer-2x.webp";
import CrmWhatsNew from "@/public/crm-whatsnew-footer-banner-2x.webp";
import ZCrmEnterPrice from "@/public/zcrm-enterprice.svg";
import Sherpa from "@/public/sherpa.png";
import JsCollege from "@/public/jscollege.png";
import { MdOutlineNavigateNext } from 'react-icons/md';
import Link from "next/link";
import Nav from '@/components/Navbar/Nav';
import CustomCarosal from '@/components/demo/CustomCarosal';
import TextCarosal from '@/components/demo/TextCarosal';

export default function demo() {
    return (
        <>

            <Nav />

            <div style={{ backgroundColor: "#0059DA" }}>
                <nav className="navbar navbar-expand-md p-0 m-0">
                    <div className="container">
                        <div className="col-1"><Link className="navbar-brand" href="/"><Image src={"https://www.zohowebstatic.com/sites/zweb/images/productlogos/crm-dark.svg"} width={100} height={65} alt="Picture of the author" /></Link></div>

                        <div className="collapse navbar-collapse" id="navbarSupportedConten">
                            <ul className="offset-4 col-8 navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-around">
                                <li className="nav-item">
                                    <Link className="nav-link text-white" href="#">Features</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" href="#">Pricing</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" href="#">Solution</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" href="#">Customers</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" href="#">Recources</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" href="#">Bulliten</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-lg-12 d-block d-sm-none mx-auto text-center">
                            <h1 className='text-white mt-4'><b>SUPERFAST WORK. STEADFAST GROWTH.</b></h1>
                            <p className='text-white'>Bring the very best out of your customer-facing teams with robust automation, comprehensive analytics, personalized solutions, and more. Sign up and get started in no time—the fastest implementation in the enterprise CRM market.</p>
                            <button type="button" className="btn btn-danger d-lg-none">SIGNUP FOR FREE</button>
                        </div>
                        <div className="col-lg-12 d-none d-sm-block d-lg-none mx-auto text-center">
                            <h1 className='text-white mt-4' style={{ fontSize: '64px', lineHeight: '56px' }}><b>SUPERFAST WORK. STEADFAST GROWTH.</b></h1>
                            <p className='text-white'>Bring the very best out of your customer-facing teams with robust automation, comprehensive analytics, personalized solutions, and more. Sign up and get started in no time—the fastest implementation in the enterprise CRM market.</p>
                            <button type="button" className="btn btn-danger d-lg-none">SIGNUP FOR FREE</button>
                        </div>
                        <div className="col-md-6 d-none d-lg-block">
                            <h1 className='text-white mt-4' style={{ fontSize: '90px', lineHeight: '81px' }}><b>SUPERFAST WORK. STEADFAST GROWTH.</b></h1>
                            <p className='text-white'>Bring the very best out of your customer-facing teams with robust automation, comprehensive analytics, personalized solutions, and more. Sign up and get started in no time—the fastest implementation in the enterprise CRM market.</p>
                            <button type="button" className="btn btn-danger d-lg-none">SIGNUP FOR FREE</button>
                        </div>
                        <form className="offset-2 col-4 d-flex justify-content-center d-none d-lg-block mt-5">
                            <div>
                                <h5 className='text-white text-center pb-2'>Get started with your free trial</h5>
                                <div>
                                    <input type="text" className="form-control w-100 custom-placeholder" style={{ backgroundColor: "#0050C6" }} placeholder="Full Name" required />
                                    <input type="email" className="form-control w-100 my-3 custom-placeholder" style={{ backgroundColor: "#0050C6" }} placeholder="Email" required />
                                    <input type="password" className="form-control w-100 custom-placeholder" style={{ backgroundColor: "#0050C6" }} placeholder="Password" required />
                                    <div className='d-flex mt-3'>
                                        <select className='w-25 rounded-start form-control text-white select' style={{ backgroundColor: "#0050C6" }}>
                                            <option value="pk" className="text-whit">+92</option>
                                            <option value="uk" className="text-whit">+90</option>
                                            <option value="in" className="text-whit">922</option>
                                            <option value="ag" className="text-whit">27</option>
                                        </select>
                                        <input type="tel" className="form-control w-75 rounded-end ms-1 custom-placeholder" style={{ backgroundColor: "#0050C6" }} placeholder="Phone" required />
                                    </div>
                                    <p className='text-white pt-2 mb-0' style={{ fontSize: "11px" }}>It looks like you‘re in PAKISTAN based on your IP.</p>
                                    <p className='text-white pt-2 mb-0' style={{ fontSize: "11px" }}>Your data will be stored in the US data center.</p>
                                    <div className='d-flex align-items-center mt-3'>
                                        <input type="checkbox" className='me-1 border border-0 custom-placeholder' />
                                        <p className='mb-0 text-white' style={{ fontSize: "11px" }}>I agree to the <Link href="#" className='text-white'>Terms of Service</Link> and <Link href="#" className='text-white'>Privacy Policy</Link>.</p>
                                    </div>
                                    <button className='btn w-100 text-white mt-4 py-3 rounded-3' style={{ backgroundColor: '#F0483E' }}>Get Started</button>
                                    <p className='text-white d-flex justify-content-end pt-2'>or sign in using <Link href='#' className='text-white px-1'>Google </Link><Link href='#' className='text-white'> linkedin</Link>.</p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="container">
                    <div style={{ backgroundColor: "#EFEFF0" }} className="rounded-top-5">
                        <div className="row">
                            <div className="d-flex justify-content-around mt-4">
                                <div className="col-md-5 d-block">
                                    <Image src={Gartner} width={130} height={100} alt="Gartner" />
                                    <p className="ps-2 mb-0"><b>Visionary in 2023 Magic Quadrant™ for Sales Force Automation Platforms</b></p>
                                </div>
                                <div className="col-md-5 d-block">
                                    <Image src={Gartner} width={130} height={100} alt="Gartner" />
                                    <p className="ps-2 mb-0"><b><Link href="#" className="nav-link">Winner with the highest score in CRM Watchlist 2022 <br /> <span className="text-decoration-underline">Read more <MdOutlineNavigateNext /> </span></Link>
                                    </b></p>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center" >
                            <div className="rounded-pill" style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', backgroundColor: "white" }}>
                                <p className="mb-0 p-2">Trusted by 250,000 businesses worldwide</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: '#262626' }}>
                <div className="container">
                    <div style={{ backgroundColor: '#FFFFFF' }} className="rounded-bottom-5">
                        <div className="row">
                            <div className="d-flex justify-content-around py-3 px-0">
                                <Image src={Gartner} width={70} height={70} alt="Gartner" />
                                <Image src={Gartner} width={70} height={70} alt="Gartner" />
                                <Image src={Gartner} width={70} height={70} alt="Gartner" />
                                <Image src={Gartner} width={70} height={70} alt="Gartner" />
                                <Image src={Gartner} className="d-none d-sm-block" width={70} height={70} alt="Gartner" />
                                <Image src={Gartner} className="d-none d-sm-block" width={70} height={70} alt="Gartner" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: '#262626' }}>
                <div className="container">
                    <div className="row">
                        <div className="py-5 text-center">
                            <h6 className="text-white">FOR HAPPIER CUSTOMERS</h6>
                            <h1 className="text-white">Build excellent customer <br /> relationships</h1>
                            <p className="text-white">Engage with your customers through the right channel at the right <br /> time and with the right message. With Zoho CRM you can harness the power of omni-channel presence, <br /> segmentation, KPIs, predictive intelligence, and more to deliver personalized experiences that <br /> breed customer loyalty.</p>
                            <Link href="#" className="nav-link" style={{ color: '#ffd01e' }}>How Zoho CRM can help build better relationships</Link>
                        </div>
                    </div>
                    <div className="row">
                        <Image src={Man} className="w-100" style={{ height: "fit-content" }} alt="Picture of the author" />
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: '#F4F0EA' }}>
                <div className="container">
                    <div className="row">
                        <div className="py-5 text-center">
                            <h6>FOR HAPPIER CUSTOMERS</h6>
                            <h1>Build excellent customer <br /> relationships</h1>
                            <p>Engage with your customers through the right channel at the right <br /> time and with the right message. With Zoho CRM you can harness the power of omni-channel presence, <br /> segmentation, KPIs, predictive intelligence, and more to deliver personalized experiences that <br /> breed customer loyalty.</p>
                            <Link href="#" className="nav-link" style={{ color: '#0067ff' }}>How to get more done in less time with Zoho CRM</Link>
                        </div>
                    </div>
                </div>
                <Image src={Women} className="w-100 h-auto" alt="Picture of the author" />
            </div>
            <div style={{ backgroundColor: '#0124D2' }}>
                <div className="container">
                    <div className="text-center py-5">
                        <div className="my-5">
                            <h1 style={{ color: '#ffd01e' }}>Sensational software for a sensible price.</h1>
                            <div className="d-block d-sm-none">
                                <button type="button" className="btn btn-danger mb-1 me-1">SIGN UP FOR FREE</button>
                                <button type="button" className="btn btn-outline-light">SEE ALL FEATURE</button>
                            </div>
                            <div className="d-none d-sm-block">
                                <button type="button" className="btn btn-danger me-3">SIGN UP FOR FREE</button>
                                <button type="button" className="btn btn-outline-light">SEE ALL FEATURE</button>
                            </div>
                        </div>
                        <h5 className="text-white">FOR A SUCCESSFUL BUSINESS</h5>
                        <h1 className="text-white">Hyper-manage operations with <br /> rich analytics</h1>
                        <p className="text-white">You can make informed decisions with agility using Zoho CRM's advanced analytics tools. <br /> Derive actionable insights, create custom reports and dashboards, and measure operations in <br /> real time to drive growth in a sustainable manner. Leverage our intelligent AI Zia to get <br /> accurate predictions and next steps to be taken for each lead.</p>
                        <Link href="#" className="nav-link" style={{ color: '#ffd01e' }}>How to get the in-depth insights with Zoho CRM</Link>
                    </div>
                    <div className="col-12">
                        <div className="">
                            <Image src={One} style={{ width: '33%', height: 'auto' }} alt="Picture of the author" />
                            <Image src={Two} style={{ width: '21.5%', height: 'auto' }} className="mx-1" alt="Picture of the author" />
                            <Image src={Three} style={{ width: '21.5%', height: 'auto' }} className="me-1" alt="Picture of the author" />
                            <Image src={Four} style={{ width: '21%', height: 'auto' }} className="me-2" alt="Picture of the author" />
                            <Image src={Five} style={{ width: '44%', height: 'auto' }} className="me-2 mt-2" alt="Picture of the author" />
                            <Image src={Six} style={{ width: '53%', height: '12%' }} className=" mt-2" alt="Picture of the author" />
                        </div>
                    </div>
                    <div className="text-center py-5">
                        <h5 className="text-white">FOR A PERSONALIZED IMPLEMENTATION</h5>
                        <h1 className="text-white">Customize, upscale, and deploy <br /> with ease</h1>
                        <p className="text-white">Manage Zoho CRM from the bottom up without breaking a sweat. Wield a dedicated admin <br /> panel, state-of-the-art customization, and a powerful developer platform to extend what  <br /> Zoho CRM can do.</p>
                        <Link href="#" className="nav-link" style={{ color: '#ffd01e' }}>How Zoho CRM can be truly yours</Link>
                    </div>
                </div>
                <div className="container-fluid">
                    <Image src={ClientScript} className="w-100" height={600} alt="Picture of the author" />
                </div>
            </div>
            <div style={{ backgroundColor: '#E8F1FA' }}>
                <div className="container">
                    <div className="pt-5">
                        <div className="row py-5 mt-5">
                            <div className="col-sm-6 col-12">
                                <h1>Integrate Zoho CRM with over 800+ apps</h1>
                                <p className="mb-5">Zoho CRM works seamlessly with your favorite apps–or find the right app for your needs at Zoho Marketplace</p>
                                <Link href="#" className="text-decoration-none"><b>Learn More</b></Link>
                                <Image className="d-none d-xl-block" style={{ position: "absolute", left: '37%' }} src={smootherOperations2} width={300} height={300} alt="Picture of the author" />
                            </div>
                            <div className="col-md-6 col-12">
                                <Image src={smootherOperations} className="w-100" height={400} alt="Picture of the author" />
                            </div>
                            <hr style={{ marginTop: "10.8%" }} />

                        </div>
                        <div className="my-5">
                            <div className="row">
                                <div className="col-md-4 ms-md-0 offset-3 col-6">
                                    <h1>Why choose <br /> Zoho CRM?</h1>
                                </div>
                                <div className="col-md-4">
                                    <p>Refreshingly simple to use—a modern CRM for a modern business</p>
                                    <p>Refreshingly simple to use—a modern CRM for a modern business</p>
                                    <p>Refreshingly simple to use—a modern CRM for a modern business</p>
                                </div>
                                <div className="col-md-4">
                                    <p>Dedicated programs for migration, deployment, and training</p>
                                    <p>Dedicated programs for migration, deployment, and training</p>
                                    <p>Dedicated programs for migration, deployment, and training</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pb-5" style={{ backgroundColor: '#E8F1FA' }}>
                    <div className="container-fluid">
                        <div className="rounded-4" style={{ backgroundColor: '#262626' }}>
                            <div className="row">
                                <div className="col-xl-6 col-12 py-5">
                                    <h3 className="text-white p-5">How a leading global franchise development company scaled faster with the help of Zoho CRM </h3>
                                    <iframe className="ms-1 d-block d-sm-none rounded-5" width="280" height="150" src="https://www.youtube.com/embed/0BIaDVnYp2A?si=gfwxi7hxDpz8zBQm" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    <iframe className="ms-4 d-none d-sm-block rounded-5" width="520" height="300" src="https://www.youtube.com/embed/0BIaDVnYp2A?si=gfwxi7hxDpz8zBQm" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                </div>
                                <div className="w-100 h-100" style={{ position: "relative" }}>
                                    <div className="col-xl-6 d-none d-xl-block" style={{ position: "absolute", right: '40px', bottom: '-61px' }}>
                                        <div className="rounded-4" style={{ backgroundColor: "#FFFFFF" }}>
                                            <h1 className="px-5 pt-5">The complete CRM for modern enterprises.</h1>
                                            <ul className="px-5 pb-5 mb-0">
                                                <li className="nav-link">Fastest deployment in the market</li>
                                                <li className="nav-link my-2" >Fastest deployment in the market</li>
                                                <li className="nav-link">Fastest deployment in the market</li>
                                                <li className="nav-link mt-3"><Link href="#" className="btn btn-danger">Learn More</Link></li>
                                            </ul>
                                            <Image src={ZCrmEnterPrice} className="d-none d-xl-block" style={{ marginLeft: '17%' }} alt="Picture of the author" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 d-block d-xl-none">
                                    <div className="rounded-4" style={{ backgroundColor: "#FFFFFF" }}>
                                        <h1 className="px-5 pt-5">The complete CRM for modern enterprises.</h1>
                                        <ul className="px-5 pb-5 mb-0">
                                            <li className="nav-link">Fastest deployment in the market</li>
                                            <li className="nav-link my-2" >Fastest deployment in the market</li>
                                            <li className="nav-link">Fastest deployment in the market</li>
                                            <li className="nav-link mt-3"><Link href="#" className="btn btn-danger">Learn More</Link></li>
                                        </ul>
                                        <Image src={ZCrmEnterPrice} className="d-none d-xl-block" style={{ marginLeft: '17%' }} alt="Picture of the author" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ backgroundColor: '#E8F1FA' }}>
                <div className="container">
                    <div className="row pt-5">
                        <b className="mt-5" style={{ fontSize: '24px' }}>What makes us the</b>
                        <b className="d-none d-xl-block" style={{ fontSize: '48px' }}>#WorldsFavoriteCRM</b>
                        <h1 className="d-block d-xl-none"><b>#WorldsFavoriteCRM</b></h1>
                    </div>
                    <div className="d-block d-xl-none">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <Image className="h-auto" style={{ width: '15%' }} src={Sherpa} alt="Picture of the author" />
                                    <h5 className="mt-2">With Zoho CRM, we experienced a 65% increase in our sales pipeline. We also managed to reduce our lead to real prospect time by 60%, which is huge. I would definitely recommend Zoho CRM to companies that are experiencing complexity with sales and marketing and witnessing rapid growth.</h5>
                                </div>
                                <div className="col-12">
                                    <Image className="h-auto" style={{ width: '15%' }} src={JsCollege} alt="Picture of the author" />
                                    <h5 className="mt-2">Since switching to Zoho CRM, JusCollege has effectively managed the large volume of contacts flowing through the sales pipeline and has already increased its sales from $1 million to $20 million in just two years. We attribute this to Zoho – being organized, getting more visibility, seeing where the problem points are, and restructuring our business.</h5>
                                </div>
                                <div className="col-12 my-4">
                                    <div className="d-flex justify-content-center">
                                        <a className="text-primary me-5">More Case Studies </a>
                                        <a className="text-primary">More Testimonials</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <CustomCarosal />

                </div>
            </div>

            <div className="d-none d-xl-block">
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-7 offset-5">
                            <a className="text-primary me-5">More Case Studies </a>
                            <a className="text-primary">More Testimonials</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row mt-5 pt-5">
                    <div className="text-center mt-5 pt-5">
                        <h1>Improved Sales. Lasting Relationships. <br /> Faster Growth.</h1>
                        <h5>15-day free trial. No credit card required.</h5>
                        <div className="my-5">
                            <button type="button" className="btn btn-danger me-3">SIGN UP FOR FREE</button>
                            <button type="button" className="btn btn-outline-primary">SEE ALL FEATURE</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-10 offset-1">
                        <p className="bg-secondary-subtle d-inline rounded-3 px-2">CRM 101: The basics of CRM software explained</p>
                    </div>
                </div>
            </div>

            <TextCarosal />

            <div style={{ backgroundColor: '#333333' }}>
                <div className="container">
                    <div className="row py-5">
                        <div className="col-lg-5 col-12 d-flex d-lg-block">
                            <Image className="mb-lg-4 me-1 w-md-100 w-50 h-auto" src={CrmWebinar} alt="Picture of the author" />
                            <Image className="w-md-100 w-50 h-auto" src={CrmWhatsNew} style={{ width: '100%', height: "50%" }} alt="Picture of the author" />
                        </div>
                        <div className="col-lg-7 col-12 mt-lg-0 mt-5">
                            <div className="row">
                                <div className="col-4">
                                    <p className="text-white">EXPLORE CRM</p>
                                    <p className="text-white">CRM Essentials</p>
                                    <p className="text-white">CRM Essentials</p>
                                    <p className="text-white">CRM Essentials</p>
                                    <p className="text-white">CRM Essentials</p>
                                    <p className="text-white">CRM Essentials</p>
                                    <p className="text-white">CRM Essentials</p>
                                </div>
                                <div className="col-4">
                                    <p className="text-white">EXPLORE CRM</p>
                                    <p className="text-white">CRM Essentials</p>
                                    <p className="text-white">CRM Essentials</p>
                                    <p className="text-white">CRM Essentials</p>
                                    <p className="text-white">CRM Essentials</p>
                                    <p className="text-white">CRM Essentials</p>
                                    <p className="text-white">CRM Essentials</p>
                                </div>
                                <div className="col-4">
                                    <p className="text-white">EXPLORE CRM</p>
                                    <p className="text-white">CRM Essentials</p>
                                    <p className="text-white">CRM Essentials</p>
                                    <p className="text-white">CRM Essentials</p>
                                    <p className="text-white">CRM Essentials</p>
                                    <p className="text-white">CRM Essentials</p>
                                    <p className="text-white">CRM Essentials</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
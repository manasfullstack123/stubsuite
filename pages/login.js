import Link from "next/link";

export default function login() {
    return (
        <>
            <div className="col-8 offset-2" style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
                <div className="my-3">
                    <div className="text-center py-3">
                        <h1 className="mb-4">Login</h1>
                        <p>Enter Login details to get access</p>
                    </div>
                    <div className="mx-5">
                        <div className="mb-4">
                            <label className="mb-2"><b>Username or Email Address</b></label> <br />
                            <input type="text" className="form-control border rounded-0" placeholder="Username / Email address" />
                        </div>
                        <div className="">
                            <label className="mb-2"><b>Password</b></label> <br />
                            <input type="password" className="form-control border rounded-0" placeholder="Enter Password" />
                        </div>
                        <div className="d-flex justify-content-between my-3">
                            <p className="d-flex">Don’t have an account? <a href="#" className="text-danger nav-link"> &nbsp; Sign Up</a>  &nbsp; here</p>
                            <Link href="#" className="text-danger nav-link">Forgot Password?</Link>
                        </div>
                    </div>
                    <div className="p-5">
                        <button type="button" className="btn btn-danger btn-lg border rounded-0"><Link href='/' className="nav-link">Login</Link> </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export const metadata = {
    title: "Login",
    description: "Login to get Full access",
    openGraph: {
      title: 'Login',
      description: "Login to get Full access",
      images: '../../../public/login.png',
    },
  }
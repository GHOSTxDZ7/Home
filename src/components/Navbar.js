import React from 'react'
import { Link } from 'react-router-dom'

export default function navbar() {
    return (


        <nav className="navbar navbar-expand-lg navbar-dark gradient-custom rounded-bottom fixed-top">

            <div className="container-fluid">

                <a className="navbar-brand" href="/Home"><img src="https://cdn.pixabay.com/photo/2020/08/19/15/04/icon-5501127_1280.png" alt="EARTHLY" width={'40px'} /></a>

                <button className="navbar-toggler" type="button" data-mdb-toggle="collapse"
                    data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <i className="fas fa-bars text-light"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav me-auto d-flex flex-row mt-3 mt-lg-0">
                        <li className="nav-item text-center mx-2 mx-lg-1">
                            <Link className="nav-link active" aria-current="page" to="/Home">
                                <div>
                                    <i className="fa-sharp fa-solid fa-house"></i>
                                </div>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item text-center mx-2 mx-lg-1">
                            <Link className="nav-link active" aria-current="page" to="/Product">
                                <div>
                                    <i className="fa-solid fa-cart-shopping"></i>
                                </div>
                                Product
                            </Link>
                        </li>
                    </ul>
                    <div className="nav-item text-center mx-2 mx-lg-1">
                        <Link className="nav-link active" aria-current="page"  target="_blank" to="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTNqmSNRNJgKgQZCMcvPBMvxhxGLVKFNrjVTlwKMCpBsMkwlkPbMzZJkBKWkTDVFNxsbVV">
                            <div>
                                <i className="fa-solid fa-envelope"></i>
                            </div>
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>

    )
}

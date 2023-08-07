import React from 'react'

export default function SideBar() {
    return (
        <div>
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                <div className="position-sticky pt-3 sidebar-sticky">
                    <ul className="nav flex-column">
                        <li className="nav-item">

                            <a className="nav-link active" aria-current="page" href="#">
                                <span data-feather="home" className="align-text-bottom"></span>
                                <span className="fs-5"><i className="bi bi-house-fill"></i></span>Acceuil
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <span data-feather="file" className="align-text-bottom"></span>
                                <span className="fs-5"><i className="bi bi-arrow-up-right-circle-fill"></i></span>Populaire
                            </a>
                        </li>
                        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
                            <span>Thématique</span>
                            <a className="link-secondary" href="#" aria-label="Add a new report">
                                <span data-feather="plus-circle" className="align-text-bottom"></span>
                            </a>
                        </h6>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <span data-feather="shopping-cart" className="align-text-bottom"></span>
                                Informatique
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <span data-feather="users" className="align-text-bottom"></span>
                                Business & Economie
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <span data-feather="bar-chart-2" className="align-text-bottom"></span>
                                Sports
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <span data-feather="layers" className="align-text-bottom"></span>
                                Crypto
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <span data-feather="layers" className="align-text-bottom"></span>
                                Autres
                            </a>
                        </li>
                        <hr></hr>
                        <li className='nav-item ms-3 mt-4'>
                            <a className='btn btn-primary rounded-pill'>
                                Poser un quiz <span><i className='bi bi-question-diamond'></i></span>
                            </a>
                        </li>
                    </ul>


                </div>
            </nav>
        </div>
    )
}

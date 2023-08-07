import React from "react";
import '../../assets/css/dashboard.css'
import '../../assets/css/usercome.css'
import SideBar from "../kits/SideBar";
function UserCome() {


    return (
        <div>
            <header className="navbar navbar-white sticky-top bg-light flex-md-nowrap p-0 shadow">
                <a className="navbar-brand bg-white text-primary col-md-3 col-lg-2 me-0 px-3 fs-6" href="#">Le Forum</a>
                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <input className="form-control form-control-dark w-100 rounded-0 border-0" type="text" placeholder="Search" aria-label="Search" />
                <div className="navbar-nav">
                    <span className="fs-4"><i className="bi bi-person-fill"></i></span>
                </div>
                <div className="navbar-nav">
                    <div className="nav-item text-nowrap">
                        <a className="nav-link px-3" href="#">Sign out</a>
                    </div>
                </div>
            </header>
            <div className="container-fluid">
                <div className="row">

                    <SideBar></SideBar>
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div className="text-muted pt-3 h6">Tendances du moment</div>

                        <div className="row">
                            <div className="col-md-3 col-sm-12 mb-2 pe-1">
                                <div id="td-1" className="td-style"></div>
                            </div>
                            <div className="col-md-3 col-sm-12 mb-2 pe-1">
                                <div id="td-2" className="td-style"></div>
                            </div>
                            <div className="col-md-3 col-sm-12 mb-2 pe-1">
                                <div id="td-3" className="td-style"></div>
                            </div>
                            <div className="col-md-3 col-sm-12 mb-2 pe-1">
                                <div id="td-4" className="td-style"></div>
                            </div>

                        </div>
                    </main>
                </div>
            </div>

        </div>
    );
}
export default UserCome;
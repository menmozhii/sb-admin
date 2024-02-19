import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return<>
  <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

{/* <!-- Sidebar - Brand --> */}
        <Link to={"/dashboard"} className="sidebar-brand d-flex align-items-center justify-content-center">
        
            <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </Link>

{/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
                <Link to={"/dashboard"} className="nav-link">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></Link>
            </li>
            {/* <!-- Divider --> */}
            <hr className="sidebar-divider"/>

            

            {/* <!-- Nav Item - Pages Collapse Menu --> */}
            <li className="nav-item">
                <Link to={"/add-user"} className="nav-link" 
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>AddUser</span>
                </Link>
                </li>

</ul>
  </>
}

export default Sidebar
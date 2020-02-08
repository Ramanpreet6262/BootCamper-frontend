import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-expand-md navbar-dark bg-primary fixed-top'>
          <div className='container'>
            <Link className='navbar-brand' to='/'>
              <i className='fas fa-laptop-code'></i> BootCamper
            </Link>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarSupportedContent'
            >
              <span className='navbar-toggler-icon'></span>
            </button>

            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                  <Link className='nav-link' to='/'>
                    <i className='fas fa-sign-in-alt'></i> Login
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/'>
                    <i className='fas fa-user-plus'></i> Register
                  </Link>
                </li>
                <li className='nav-item d-none d-sm-block'>
                  <Link className='nav-link'>|</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/'>
                    Browse Bootcamps
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;

/*         
For login users



<nav class="navbar navbar-expand-md navbar-dark bg-primary">
			<div class="container">
				<a class="navbar-brand" href="index.html"
					><i class="fas fa-laptop-code"></i> DevCamper</a
				>
				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
				>
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav ml-auto">
						<li class="nav-item dropdown">
							<a
								class="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdown"
								role="button"
								data-toggle="dropdown"
							>
								<i class="fas fa-user"></i> Account
							</a>
							<div class="dropdown-menu">
								<a class="dropdown-item" href="manage-bootcamp.html"
									>Manage Bootcamp</a
								>
								<a class="dropdown-item" href="manage-reviews.html"
									>Manage Reviews</a
								>
								<a class="dropdown-item" href="manage-account.html"
									>Manage Account</a
								>
								<div class="dropdown-divider"></div>
								<a class="dropdown-item" href="login.html"
									><i class="fas fa-sign-out-alt"></i> Logout</a
								>
							</div>
						</li>
						<li class="nav-item d-none d-sm-block">
							<a class="nav-link" href="#">|</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="bootcamps.html">Browse Bootcamps</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>





*/

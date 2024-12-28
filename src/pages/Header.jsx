import React from "react";

function Header() {
    return (
        <div className="body-inner">
        <div id="top-bar" className="top-bar">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-8">
                <ul className="top-info text-center text-md-left">
                  <li>
                    <i className="fas fa-map-marker-alt" />{" "}
                    <p className="info-text">9051 Caglar Incorporate, USA</p>
                  </li>
                </ul>
              </div>
            </div>
            {/*/ Content row end */}
          </div>
          {/*/ Container end */}
        </div>
        {/*/ Topbar end */}
        {/* Header start */}
        <header id="header" className="header-one">
          <div className="bg-white">
            <div className="container">
              <div className="logo-area">
                <div className="row align-items-center">
                  <div className="logo col-lg-3 text-center text-lg-left mb-3 mb-md-5 mb-lg-0">
                    <a className="d-block" href="index.html">
                      <p style={{ fontSize: 50 }}>C a g l a r</p>
                      {/* <img loading="lazy" src="images/logo.png" alt="Caglar"> */}
                    </a>
                  </div>
                  {/* logo end */}
                  <div className="col-lg-9 header-right">
                    <ul className="top-info-box">
                      <li>
                        <div className="info-box">
                          <div className="info-box-content">
                            <p className="info-box-title">Call Us</p>
                            <p className="info-box-subtitle">+1 (215) 512-9020</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="info-box">
                          <div className="info-box-content">
                            <p className="info-box-title">Email Us</p>
                            <p className="info-box-subtitle">
                              info@caglarconstruction.com
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="last">
                        <div className="info-box last">
                          <div className="info-box-content">
                            <p className="info-box-title">Global Certificate</p>
                            <p className="info-box-subtitle">ISO XXXXXX</p>
                          </div>
                        </div>
                      </li>
                      <li className="header-get-a-quote">
                        <a className="btn btn-primary" href="contact.html">
                          Get A Quote
                        </a>
                      </li>
                    </ul>
                    {/* Ul end */}
                  </div>
                  {/* header right end */}
                </div>
                {/* logo area end */}
              </div>
              {/* Row end */}
            </div>
            {/* Container end */}
          </div>
          <div className="site-navigation">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <nav className="navbar navbar-expand-lg navbar-dark p-0">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target=".navbar-collapse"
                      aria-controls="navbar-collapse"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon" />
                    </button>
                    <div id="navbar-collapse" className="collapse navbar-collapse">
                      <ul className="nav navbar-nav mr-auto">
                        <li className="nav-item dropdown active">
                          <a
                            href="#"
                            className="nav-link dropdown-toggle"
                            data-toggle="dropdown"
                          >
                            Home
                          </a>
                        </li>
                        <li className="nav-item dropdown">
                          <a
                            href="#"
                            className="nav-link dropdown-toggle"
                            data-toggle="dropdown"
                          >
                            Projects
                          </a>
                        </li>
                        <li className="nav-item dropdown">
                          <a
                            href="#"
                            className="nav-link dropdown-toggle"
                            data-toggle="dropdown"
                          >
                            Services
                          </a>
                        </li>
                        <li>
                          <a href="#" className="nav-link dropdown-toggle">
                            Features
                          </a>
                        </li>
                        {/*               
                      <li class="nav-item dropdown">
                          <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">News </a>
                          <ul class="dropdown-menu" role="menu">
                           
                          </ul>
                      </li> */}
                        <li className="nav-item">
                          <a className="nav-link" href="contact.html">
                            Contact
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                {/*/ Col end */}
              </div>
              {/*/ Row end */}
              <div className="nav-search">
                <span id="search">
                  <i className="fa fa-search" />
                </span>
              </div>
              {/* Search end */}
              <div className="search-block" style={{ display: "none" }}>
                <label htmlFor="search-field" className="w-100 mb-0">
                  <input
                    type="text"
                    className="form-control"
                    id="search-field"
                    placeholder="Type what you want and enter"
                  />
                </label>
                <span className="search-close">×</span>
              </div>
              {/* Site search end */}
            </div>
            {/*/ Container end */}
          </div>
          {/*/ Navigation end */}
        </header>
        {/*/ Header end */}
      </div>
      
    )
}

export default Header
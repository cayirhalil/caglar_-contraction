import React from "react";

function ProjectArea() {
    return (

        <>
  <section id="project-area" className="project-area solid-bg">
    <div className="container">
      <div className="row text-center">
        <div className="col-lg-12">
          <h2 className="section-title">Work of Excellence</h2>
          <h3 className="section-sub-title">Recent Projects</h3>
        </div>
      </div>
      {/*/ Title row end */}
      <div className="row">
        <div className="col-12">
          <div className="shuffle-btn-group"></div>
          <div className="row shuffle-wrapper">
            <div className="col-1 shuffle-sizer" />
            <div
              className="col-lg-4 col-md-6 shuffle-item"
              data-groups='["government","healthcare"]'
            >
              <div className="project-img-container">
                <a
                  className="gallery-popup"
                  href="/assets/images/projects/project1.jpg"
                  aria-label="project-img"
                >
                  <img
                    className="img-fluid"
                    src="/assets/images/projects/project1.jpg"
                    alt="project-img"
                  />
                  <span className="gallery-icon">
                    <i className="fa fa-plus" />
                  </span>
                </a>
                <div className="project-item-info">
                  <div className="project-item-info-content">
                    <h3 className="project-item-title">
                      <a href="projects-single.html">Coming Soon</a>
                    </h3>
                    <p className="project-cat">Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
            {/* shuffle item 1 end */}
            <div
              className="col-lg-4 col-md-6 shuffle-item"
              data-groups='["healthcare"]'
            >
              <div className="project-img-container">
                <a
                  className="gallery-popup"
                  href="/assets/images/projects/project2.jpg"
                  aria-label="project-img"
                >
                  <img
                    className="img-fluid"
                    src="/assets/images/projects/project2.jpg"
                    alt="project-img"
                  />
                  <span className="gallery-icon">
                    <i className="fa fa-plus" />
                  </span>
                </a>
                <div className="project-item-info">
                  <div className="project-item-info-content">
                    <h3 className="project-item-title">
                      <a href="projects-single.html">Coming Soon</a>
                    </h3>
                    <p className="project-cat">Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
            {/* shuffle item 2 end */}
            <div
              className="col-lg-4 col-md-6 shuffle-item"
              data-groups='["infrastructure","commercial"]'
            >
              <div className="project-img-container">
                <a
                  className="gallery-popup"
                  src="/assets/images/projects/project3.jpg"
                  aria-label="project-img"
                >
                  <img
                    className="img-fluid"
                    src="/assets/images/projects/project3.jpg"
                    alt="project-img"
                  />
                  <span className="gallery-icon">
                    <i className="fa fa-plus" />
                  </span>
                </a>
                <div className="project-item-info">
                  <div className="project-item-info-content">
                    <h3 className="project-item-title">
                      <a href="projects-single.html">Coming Soon</a>
                    </h3>
                    <p className="project-cat">Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
            {/* shuffle item 3 end */}
            <div
              className="col-lg-4 col-md-6 shuffle-item"
              data-groups='["education","infrastructure"]'
            >
              <div className="project-img-container">
                <a
                  className="gallery-popup"
                  href="/assets/images/projects/project4.jpg"
                  aria-label="project-img"
                >
                  <img
                    className="img-fluid"
                    src="/assets/images/projects/project4.jpg"
                    alt="project-img"
                  />
                  <span className="gallery-icon">
                    <i className="fa fa-plus" />
                  </span>
                </a>
                <div className="project-item-info">
                  <div className="project-item-info-content">
                    <h3 className="project-item-title">
                      <a href="projects-single.html">Coming Soon</a>
                    </h3>
                    <p className="project-cat">Infrastructure</p>
                  </div>
                </div>
              </div>
            </div>
            {/* shuffle item 4 end */}
            <div
              className="col-lg-4 col-md-6 shuffle-item"
              data-groups='["infrastructure","education"]'
            >
              <div className="project-img-container">
                <a
                  className="gallery-popup"
                  href="/assets/images/projects/project5.jpg"
                  aria-label="project-img"
                >
                  <img
                    className="img-fluid"
                    src="/assets/images/projects/project5.jpg"
                    alt="project-img"
                  />
                  <span className="gallery-icon">
                    <i className="fa fa-plus" />
                  </span>
                </a>
                <div className="project-item-info">
                  <div className="project-item-info-content">
                    <h3 className="project-item-title">
                      <a href="projects-single.html">Coming Soon</a>
                    </h3>
                    <p className="project-cat">Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
            {/* shuffle item 5 end */}
            <div
              className="col-lg-4 col-md-6 shuffle-item"
              data-groups='["residential"]'
            >
              <div className="project-img-container">
                <a
                  className="gallery-popup"
                  href="/assets/images/projects/project6.jpg"
                  aria-label="project-img"
                >
                  <img
                    className="img-fluid"
                    src="/assets/images/projects/project6.jpg"
                    alt="project-img"
                  />
                  <span className="gallery-icon">
                    <i className="fa fa-plus" />
                  </span>
                </a>
                <div className="project-item-info">
                  <div className="project-item-info-content">
                    <h3 className="project-item-title">
                      <a href="projects-single.html">Coming Soon</a>
                    </h3>
                    <p className="project-cat">Residential</p>
                  </div>
                </div>
              </div>
            </div>
            {/* shuffle item 6 end */}
          </div>
          {/* shuffle end */}
        </div>
        <div className="col-12">
          <div className="general-btn text-center">
            <a className="btn btn-primary" href="projects.html">
              View All Projects
            </a>
          </div>
        </div>
      </div>
      {/* Content row end */}
    </div>
    {/*/ Container end */}
  </section>
  {/* Project area end */}
</>


      
    )
}

export default ProjectArea